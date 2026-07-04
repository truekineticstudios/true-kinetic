import json
import os
import re
import cloudscraper  # Cloudflare korumasını aşmak için
from bs4 import BeautifulSoup

FILE_PATH = 'products.json'

# ==========================================================================
# ⚙️ SENİN KÂR AYARLARIN (Buradaki rakamları istediğin gibi değiştirebilirsin)
# ==========================================================================
PROFIT_UNDER_150 = 10   # 150 TL altı ürünlerden kazanmak istediğin NET para
PROFIT_150_TO_400 = 15  # 150-400 TL arası ürünlerden kazanmak istediğin NET para
PROFIT_400_TO_1000 = 25 # 400-1000 TL arası ürünlerden kazanmak istediğin NET para

# --- SHOPIER VE VERGİ AYARLARI ---
SHOPIER_COMMISSION_RATE = 0.0499  # %4.99 Shopier standart komisyon oranı
KDV_RATE = 0.20                 # %20 KDV oranı (Komisyon ve sabit ücret için)
SHOPIER_FIXED_FEE = 0.49         # İşlem başı 0.49 TL sabit ücret

def get_profit_margin(cost):
    """
    Maliyete göre eklenecek kârı yukarıdaki ayarlardan otomatik çeker.
    """
    if cost < 150:
        return PROFIT_UNDER_150
    elif cost <= 400:
        return PROFIT_150_TO_400
    elif cost <= 1000:
        return PROFIT_400_TO_1000
    else:
        return (cost * 0.05) + 30  # 1000 TL üzeri için %5 + 30 TL net kâr

def calculate_shopier_price(cost):
    """
    Shopier kesintilerini hesaplayarak kuruşu kuruşuna nihai satış fiyatını bulur.
    """
    profit = get_profit_margin(cost)
    target_payout = cost + profit # Cebimize kalmasını istediğimiz net para
    
    # KDV Dahil Komisyon Oranı ve Sabit Ücret
    comm_factor = SHOPIER_COMMISSION_RATE * (1 + KDV_RATE)       # ~0.05988
    fixed_fee_with_kdv = SHOPIER_FIXED_FEE * (1 + KDV_RATE)      # ~0.588
    
    # Shopier Ters Komisyon Formülü
    final_price = (target_payout + fixed_fee_with_kdv) / (1 - comm_factor)
    return round(final_price) # Fiyatı tam sayıya yuvarla

# --- HESAP.COM.TR CANLI FİYAT ÇEKİCİ (SCRAPER) ---
def get_hesap_com_price(url, keyword, min_val):
    try:
        scraper = cloudscraper.create_scraper(
            browser={
                'browser': 'chrome',
                'platform': 'windows',
                'mobile': False
            }
        )
        response = scraper.get(url, timeout=20)
        
        if response.status_code != 200:
            print(f"Bağlantı Hatası: {url} (Kod: {response.status_code})")
            return None
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Boşlukları esnek regex haline getir
        regex_pattern = re.sub(r'\s+', r'\\s+', keyword)
        elements = []
        
        # Sadece görünür body elemanlarını tara (script, head, meta, style etiketlerini es geç)
        for tag in soup.find_all(['div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'b', 'strong']):
            parent_is_invalid = False
            temp = tag
            while temp:
                if temp.name in ['script', 'style', 'meta', 'link', 'head', 'title']:
                    parent_is_invalid = True
                    break
                temp = temp.parent
            if parent_is_invalid:
                continue
                
            text_content = tag.get_text().strip()
            if text_content and len(text_content) < 120:
                if re.search(regex_pattern, text_content, re.IGNORECASE):
                    elements.append(tag)
        
        # Bulunan her elementten yukarı doğru tırmanıp fiyat ara
        for el in elements:
            parent = el.parent
            # 1800 UC için tırmanış seviyesini 4 yaptık
            for _ in range(4):
                if not parent:
                    break
                text = parent.get_text()
                
                # Karakter uzunluk sınırını 350 yaptık (1800 UC'nin geniş kart yapısı için)
                if len(text) > 350:
                    break
                    
                prices = re.findall(r'(\d+(?:[.,]\d+)?)\s*(?:TL|₺)', text)
                if prices:
                    clean_prices = []
                    for p in prices:
                        clean_p = p.replace('.', '').replace(',', '.')
                        try:
                            val = float(clean_p)
                            # Fiyat limiti kontrolü
                            if 15 < val < 15000:
                                clean_prices.append(val)
                        except ValueError:
                            continue
                    
                    if clean_prices:
                        # Sadece beklediğimiz minimum fiyattan (eşik değerden) büyük fiyatları al
                        valid_prices = [v for v in clean_prices if v >= min_val]
                        if valid_prices:
                            return min(valid_prices) # Karttaki indirimli/güncel fiyatı dön
                parent = parent.parent
                
    except Exception as e:
        print(f"Hata oluştu ({url} - {keyword}): {e}")
    return None

# --- ANA PROGRAM ---
def main():
    if not os.path.exists(FILE_PATH):
        print("products.json bulunamadı!")
        return

    with open(FILE_PATH, 'r', encoding='utf-8') as file:
        data = json.load(file)

    # 1. VALORANT VP GÜNCELLEME (1700 VP) - Eşik Değer: 300 TL
    print("\n--- Valorant VP Güncelleniyor ---")
    val_cost = get_hesap_com_price("https://www.hesap.com.tr/urunler/valorant-vp-satin-al", "1700 VP", 300)
    if val_cost:
        yeni_satis_fiyati = calculate_shopier_price(val_cost)
        data['valorant_vp']['tiers'][0]['price']['tr'] = f"{yeni_satis_fiyati} TL"
        print(f"1700 VP -> Maliyet: {val_cost} TL | Satış Fiyatı: {yeni_satis_fiyati} TL")
    else:
        print("Valorant VP fiyatı çekilemedi, eski fiyat korunuyor.")

    # 2. PUBG UC GÜNCELLEME (3 Farklı Paket)
    print("\n--- PUBG Mobile UC Paketleri Güncelleniyor ---")
    pubg_uc_targets = [
        {"keyword": "325 UC", "index": 0, "min_val": 150},   # 325 UC en az 150 TL olmalı
        {"keyword": "660 UC", "index": 1, "min_val": 300},   # 660 UC en az 300 TL olmalı
        {"keyword": "1800 UC", "index": 2, "min_val": 650}   # Eşik değeri 650 TL'ye çekerek garantiledik
    ]
    for target in pubg_uc_targets:
        cost = get_hesap_com_price("https://www.hesap.com.tr/urunler/pubg-mobile-uc-satin-al", target["keyword"], target["min_val"])
        if cost:
            yeni_satis_fiyati = calculate_shopier_price(cost)
            data['pubg_uc']['tiers'][target["index"]]['price']['tr'] = f"{yeni_satis_fiyati} TL"
            print(f"{target['keyword']} -> Maliyet: {cost} TL | Satış Fiyatı: {yeni_satis_fiyati} TL")
        else:
            print(f"{target['keyword']} fiyatı çekilemedi, eski fiyat korunuyor.")

    # 3. FREE FIRE ELMAS GÜNCELLEME (2 Farklı Paket)
    print("\n--- Free Fire Elmas Paketleri Güncelleniyor ---")
    ff_targets = [
        {"keyword": "231 Elmas", "index": 0, "min_val": 80},  # 231 Elmas en az 80 TL olmalı
        {"keyword": "583 Elmas", "index": 1, "min_val": 200}  # 583 Elmas en az 200 TL olmalı
    ]
    for target in ff_targets:
        cost = get_hesap_com_price("https://www.hesap.com.tr/urunler/free-fire-elmas-satin-al", target["keyword"], target["min_val"])
        if cost:
            yeni_satis_fiyati = calculate_shopier_price(cost)
            data['freefire_gem']['tiers'][target["index"]]['price']['tr'] = f"{yeni_satis_fiyati} TL"
            print(f"{target['keyword']} -> Maliyet: {cost} TL | Satış Fiyatı: {yeni_satis_fiyati} TL")
        else:
            print(f"{target['keyword']} fiyatı çekilemedi, eski fiyat korunuyor.")

    # Güncellenmiş yeni products.json verisini yaz
    with open(FILE_PATH, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)
    print("\n[BAŞARILI] products.json dosyası yeni veri yapısına uygun şekilde güncellendi.")

if __name__ == "__main__":
    main()

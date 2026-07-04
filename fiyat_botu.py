import json
import os
import re
import cloudscraper  # Cloudflare korumasını aşmak için
from bs4 import BeautifulSoup

FILE_PATH = 'products.json'

# --- SHOPIER VE KÂR AYARLARI ---
SHOPIER_COMMISSION_RATE = 0.0499  # %4.99 Shopier standart komisyon oranı
KDV_RATE = 0.20                 # %20 KDV oranı (Komisyon ve sabit ücret için)
SHOPIER_FIXED_FEE = 0.49         # İşlem başı 0.49 TL sabit ücret

def get_profit_margin(cost):
    """
    Ürünün maliyetine göre üzerine eklenecek net kârı belirler.
    Sınırları ve kâr miktarlarını buradan değiştirebilirsin.
    """
    if cost < 150:
        return 20  # 150 TL altı ürünlere net 20 TL kâr ekle
    elif cost <= 400:
        return 35  # 150-400 TL arası ürünlere net 35 TL kâr ekle
    elif cost <= 1000:
        return 65  # 400-1000 TL arası ürünlere net 65 TL kâr ekle
    else:
        return (cost * 0.08) + 40  # 1000 TL üzeri ürünlere %8 + 40 TL kâr ekle

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
def get_hesap_com_price(url, keyword):
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
        
        # Sitedeki olası ekstra boşlukları/satır başlarını (\n) kaçırmamak için esnek regex şablonu oluştur
        regex_pattern = re.sub(r'\s+', r'\\s+', keyword)
        elements = soup.find_all(string=re.compile(regex_pattern, re.IGNORECASE))
        
        for el in elements:
            parent = el.parent
            # Yukarı doğru tırman, fiyat bulduğumuz İLK parent'ta dur ve o fiyati döndür!
            for _ in range(5):
                if not parent:
                    break
                text = parent.get_text()
                # Fiyat formatlarını yakala: Örn: "150 TL" veya "150,50 TL" veya "150,00 ₺"
                prices = re.findall(r'(\d+(?:[.,]\d+)?)\s*(?:TL|₺)', text)
                if prices:
                    clean_prices = []
                    for p in prices:
                        clean_p = p.replace('.', '').replace(',', '.')
                        try:
                            val = float(clean_p)
                            # Fiyatın mantıklı bir aralıkta olduğunu doğrula (15 TL ile 15.000 TL arası)
                            if 15 < val < 15000:
                                clean_prices.append(val)
                        except ValueError:
                            continue
                    
                    if clean_prices:
                        # Bu karttaki en düşük fiyatı döndür (genellikle indirimli fiyattır) ve tırmanmayı durdur!
                        return min(clean_prices)
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

    # 1. VALORANT VP GÜNCELLEME (1700 VP)
    print("\n--- Valorant VP Güncelleniyor ---")
    val_cost = get_hesap_com_price("https://www.hesap.com.tr/urunler/valorant-vp-satin-al", "1700 VP")
    if val_cost:
        yeni_satis_fiyati = calculate_shopier_price(val_cost)
        data['valorant_vp']['tiers'][0]['price']['tr'] = f"{yeni_satis_fiyati} TL"
        print(f"1700 VP -> Maliyet: {val_cost} TL | Satış Fiyatı: {yeni_satis_fiyati} TL")
    else:
        print("Valorant VP fiyatı çekilemedi, eski fiyat korunuyor.")

    # 2. PUBG UC GÜNCELLEME (3 Farklı Paket)
    print("\n--- PUBG Mobile UC Paketleri Güncelleniyor ---")
    pubg_uc_targets = [
        {"keyword": "325 UC", "index": 0},
        {"keyword": "660 UC", "index": 1},
        {"keyword": "1800 UC", "index": 2}
    ]
    for target in pubg_uc_targets:
        cost = get_hesap_com_price("https://www.hesap.com.tr/urunler/pubg-mobile-uc-satin-al", target["keyword"])
        if cost:
            yeni_satis_fiyati = calculate_shopier_price(cost)
            data['pubg_uc']['tiers'][target["index"]]['price']['tr'] = f"{yeni_satis_fiyati} TL"
            print(f"{target['keyword']} -> Maliyet: {cost} TL | Satış Fiyatı: {yeni_satis_fiyati} TL")
        else:
            print(f"{target['keyword']} fiyatı çekilemedi, eski fiyat korunuyor.")

    # 3. FREE FIRE ELMAS GÜNCELLEME (2 Farklı Paket)
    print("\n--- Free Fire Elmas Paketleri Güncelleniyor ---")
    ff_targets = [
        {"keyword": "231 Elmas", "index": 0},
        {"keyword": "583 Elmas", "index": 1}
    ]
    for target in ff_targets:
        cost = get_hesap_com_price("https://www.hesap.com.tr/urunler/free-fire-elmas-satin-al", target["keyword"])
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

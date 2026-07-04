import json
import os

FILE_PATH = 'products.json'

# Varsayılan veriler (Dosya deponuzda yoksa otomatik oluşturulması için)
DEFAULT_DATA = {
    "web": { "category": "software", "icon": "fas fa-code", "title": { "en": "Web Site Design", "tr": "Web Tasarım Paketleri" }, "desc": { "en": "Professional responsive design services.", "tr": "Profesyonel arayüz tasarım hizmetleri." }, "tiers": [{ "name": { "en": "Front-End", "tr": "Front-End" }, "price": { "en": "12$", "tr": "400 TL" }, "desc": { "en": "+$5 extra page", "tr": "Ek sayfa +170 TL" } }] },
    "discord": { "category": "software", "icon": "fab fa-discord", "title": { "en": "Discord Server Setup", "tr": "Discord Sunucu Kurulumu" }, "desc": { "en": "Tailored roles and professional bot setup.", "tr": "Özel yetkilendirme ve profesyonel botlar." }, "tiers": [{ "name": { "en": "Basic Setup", "tr": "Temel Kurulum" }, "price": { "en": "2$", "tr": "70 TL" }, "desc": { "en": "Perfect starting layout", "tr": "Standart, temiz kurulum" } }] },
    "roblox_gift": { "category": "games", "icon": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Robux_2019_Logo_gold.svg", "title": { "en": "Roblox Gift Cards", "tr": "Roblox Hediye Kartları" }, "desc": { "en": "Digital codes directly applicable for Robux.", "tr": "Robux için geçerli resmi kodlar." }, "tiers": [{ "name": "$5 Gift Card", "price": { "en": "5$", "tr": "400 TL" }, "desc": { "en": "Official key", "tr": "Resmi kod" } }] },
    "pubg_uc": { "category": "games", "icon": "fas fa-crosshairs", "title": { "en": "PUBG Mobile UC", "tr": "PUBG Mobile UC" }, "desc": { "en": "In-game Unknown Cash delivered to Player ID.", "tr": "Oyuncu ID'nize doğrudan yüklenen UC." }, "tiers": [{ "name": "325 UC", "price": { "en": "4.5$", "tr": "230 TL" }, "desc": { "en": "Direct ID Top-up", "tr": "Doğrudan Yükleme" } }] },
    "valorant_vp": { "category": "games", "icon": "fas fa-gamepad", "title": { "en": "Valorant VP", "tr": "Valorant VP" }, "desc": { "en": "Secure Valorant Points Pin Codes.", "tr": "İndirimli Valorant Points e-pin kodları." }, "tiers": [{ "name": "1700 VP", "price": { "en": "7.5$", "tr": "493 TL" }, "desc": { "en": "Riot PIN delivery", "tr": "Hızlı Riot PIN teslimatı" } }] }
}

def fiyatlari_guncelle():
    # 1. Eğer dosya yoksa, varsayılan şablonla otomatik oluştur
    if not os.path.exists(FILE_PATH):
        print("products.json bulunamadı, yenisi otomatik oluşturuluyor...")
        data = DEFAULT_DATA
    else:
        with open(FILE_PATH, 'r', encoding='utf-8') as file:
            data = json.load(file)

    # 2. Örnek zam işlemi (Test amaçlı Valorant'a +5 TL ekliyoruz)
    if 'valorant_vp' in data:
        eski_fiyat_str = data['valorant_vp']['tiers'][0]['price']['tr']
        eski_fiyat = int(eski_fiyat_str.replace(" TL", "").strip())
        yeni_fiyat = eski_fiyat + 5
        data['valorant_vp']['tiers'][0]['price']['tr'] = f"{yeni_fiyat} TL"
        print(f"Valorant VP güncellendi: {eski_fiyat_str} -> {yeni_fiyat} TL")

    # 3. Dosyayı kaydet
    with open(FILE_PATH, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)
    print("İşlem tamamlandı, dosya kaydedildi.")

if __name__ == "__main__":
    fiyatlari_guncelle()

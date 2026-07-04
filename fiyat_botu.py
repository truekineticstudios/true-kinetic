import json
import os

# products.json dosyasının yolu
FILE_PATH = 'products.json'

def fiyatlari_guncelle():
    # 1. Mevcut veritabanını (products.json) oku
    if not os.path.exists(FILE_PATH):
        print("products.json bulunamadı!")
        return

    with open(FILE_PATH, 'r', encoding='utf-8') as file:
        data = json.load(file)

    # -------------------------------------------------------------
    # BURASI ÖRNEK: Normalde burada başka siteye bağlanıp fiyat çekeceğiz (requests ile)
    # Şimdilik sistemin çalıştığını görmek için Valorant fiyatına +5 TL ekleyen temsili bir işlem yapıyoruz.
    # -------------------------------------------------------------
    
    print("Fiyatlar internetten çekiliyor... (Örnek İşlem)")
    
    if 'valorant_vp' in data:
        # Eski fiyatı al (Örn: "493 TL")
        eski_fiyat_str = data['valorant_vp']['tiers'][0]['price']['tr']
        
        # Sadece rakamı çek
        eski_fiyat = int(eski_fiyat_str.replace(" TL", "").strip())
        yeni_fiyat = eski_fiyat + 5  # Temsili +5 TL zam
        
        # Yeni fiyatı JSON verisine yaz
        data['valorant_vp']['tiers'][0]['price']['tr'] = f"{yeni_fiyat} TL"
        print(f"Valorant 1700 VP güncellendi: {eski_fiyat_str} -> {yeni_fiyat} TL")

    # 2. Değişiklikleri tekrar products.json dosyasına yaz
    with open(FILE_PATH, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)
        
    print("İşlem tamamlandı, dosya kaydedildi.")

if __name__ == "__main__":
    fiyatlari_guncelle()

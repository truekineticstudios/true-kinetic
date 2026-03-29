// Çeviri sözlüğü
const translations = {
  en: {
    discord: "Discord",
    status: "● Systems Operational v1.0",
    heroTitle: "Empowering Communities<br>Building Creativity",
    heroSubtitle: "Connect with creators, explore exclusive tools, and shape the future of collaboration.",
    exploreStore: "Explore Store →",
    joinCommunity: "Join Community",
    item1Title: "Premium Script",
    item1Desc: "Secure Roblox script with anti-cheat protection.",
    item2Title: "Utility Pack",
    item2Desc: "Exclusive utilities for professional developers.",
    item3Title: "Design Template",
    item3Desc: "Modern UI templates for Roblox projects.",
    item4Title: "Innovation Pack",
    item4Desc: "Cutting-edge scripts with cloud integration.",
    item5Title: "Community Tools",
    item5Desc: "Enhance collaboration with custom utilities.",
    item6Title: "Starter Bundle",
    item6Desc: "Perfect for beginners entering the creative hub.",
    buy: "Buy",
    aboutTitle: "About Us",
    aboutText: "True Kinetic Studios is a creative hub empowering digital communities worldwide.",
    footer: "© 2026 True Kinetic Studios. All rights reserved."
  },
  tr: {
    discord: "Discord",
    status: "● Sistemler Çalışıyor v1.0",
    heroTitle: "Toplulukları Güçlendir<br>Yaratıcılığı İnşa Et",
    heroSubtitle: "Yaratıcılarla bağlan, özel araçları keşfet ve işbirliğinin geleceğini şekillendir.",
    exploreStore: "Mağazayı Keşfet →",
    joinCommunity: "Topluluğa Katıl",
    item1Title: "Premium Script",
    item1Desc: "Anti-hile korumalı güvenli Roblox scripti.",
    item2Title: "Utility Pack",
    item2Desc: "Profesyonel geliştiriciler için özel araçlar.",
    item3Title: "Design Template",
    item3Desc: "Roblox projeleri için modern UI şablonları.",
    item4Title: "Innovation Pack",
    item4Desc: "Bulut entegrasyonlu ileri seviye scriptler.",
    item5Title: "Community Tools",
    item5Desc: "Özel araçlarla işbirliğini geliştirin.",
    item6Title: "Starter Bundle",
    item6Desc: "Yeni başlayanlar için mükemmel paket.",
    buy: "Satın Al",
    aboutTitle: "Hakkımızda",
    aboutText: "True Kinetic Studios dijital toplulukları güçlendiren bir yaratıcı merkezdir.",
    footer: "© 2026 True Kinetic Studios. Tüm hakları saklıdır."
  },
  de: {
    discord: "Discord",
    status: "● Systeme laufen v1.0",
    heroTitle: "Gemeinschaften stärken<br>Kreativität fördern",
    heroSubtitle: "Verbinde dich mit Kreativen, entdecke exklusive Tools und gestalte die Zukunft der Zusammenarbeit.",
    exploreStore: "Shop entdecken →",
    joinCommunity: "Community beitreten",
    item1Title: "Premium Script",
    item1Desc: "Sicheres Roblox-Skript mit Anti-Cheat-Schutz.",
    item2Title: "Utility Pack",
    item2Desc: "Exklusive Werkzeuge für professionelle Entwickler.",
    item3Title: "Design Template",
    item3Desc: "Moderne UI-Vorlagen für Roblox-Projekte.",
    item4Title: "Innovation Pack",
    item4Desc: "Fortschrittliche Skripte mit Cloud-Integration.",
    item5Title: "Community Tools",
    item5Desc: "Verbessere die Zusammenarbeit mit benutzerdefinierten Tools.",
    item6Title: "Starter Bundle",
    item6Desc: "Perfekt für Anfänger im kreativen Hub.",
    buy: "Kaufen",
    aboutTitle: "Über uns",
    aboutText: "True Kinetic Studios ist ein kreatives Zentrum, das digitale Gemeinschaften weltweit stärkt.",
    footer: "© 2026 True Kinetic Studios. Alle Rechte vorbehalten."
  }
};

// Dil değiştirme
const langSelect = document.getElementById("lang-select");
langSelect.addEventListener("change", e => {
  const lang = e.target.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
});

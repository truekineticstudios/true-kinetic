/* ==========================================================================
   1. TRANSLATIONS (DİL SÖZLÜĞÜ)
   ========================================================================== */
const translations = {
    en: {
        nav_home: "Home", nav_how: "How It Works", nav_services: "Services", nav_reviews: "Reviews", nav_faq: "FAQ", nav_admin: "Admin",
        announcement: "🚀 Summer Sale: Join our Discord for special discounts!",
        search_placeholder: "Search services...",
        hero_title: "Reliable Digital Services & Game Solutions", hero_desc: "Professional web design, Discord server configuration, and popular in-game currencies with secure delivery at one single hub.", hero_btn_explore: "Explore Services", hero_btn_discord: "Join Community",
        how_title: "How It Works?", step1_title: "Join Discord", step1_desc: "Enter our official Discord server safely using any join button on our website.", step2_title: "Open a Ticket", step2_desc: "Create an order or inquiry ticket through our dedicated support channels.", step3_title: "Safe Delivery", step3_desc: "Our team members will assist you shortly and deliver your order securely.",
        trust_title: "Our Background & Sales", trust_desc: "Please note that while our Discord-based shop is a newly established hub, our primary developer operations and sales history are rooted in the official Roblox Creator Marketplace and other verified platforms.",
        services_title: "Our Services & Products", services_subtitle: "You can filter our current catalogs using the quick tabs below.", filter_all: "All", filter_software: "Software & Server", filter_games: "Game Currencies",
        btn_order: "Order Now", btn_info: "Get Info", btn_view_prices: "View Prices", btn_order_on_discord: "Order via Discord",
        reviews_title: "Client Testimonials", reviews_subtitle: "What our community says about our secure services.",
        sec_desc: "Ensure you are talking to a real True Kinetic official. Enter their Discord Username below to verify them.", sec_btn: "Verify Staff",
        faq_title: "Frequently Asked Questions", faq_q1_title: "How can I make payments?", faq_q1_desc: "You can easily complete payments by opening a ticket on our Discord server. We support various secure options like Bank Transfer, Papara, and major secure local payment networks.", faq_q3_title: "Why is everything based on Discord?", faq_q3_desc: "To offer personal assistance, address specific inquiries directly, and maintain direct secure support, we manage all purchases personally through our Discord ticket system.",
        roles_title: "Discord Server Roles", roles_subtitle: "Information about the roles and ranks available on our Discord server.", role_col_staff: "Management & Staff", role_col_ranks: "Active Purchase Ranks", role_col_members: "Special & Member Roles",
        r_founder_desc: "Official server founder and owner.", r_coleader_desc: "Official server Co-Leader.", r_headadmin_desc: "Ban requests, partnership applications, staff recruitment, and bot administration.", r_mod_desc: "Moderation staff member, log viewing, and report priority.", r_legendary_desc: "Requires making a total of 100+ purchases.", r_master_desc: "Requires making a total of 50+ purchases.", r_diamond_desc: "Requires making a total of 25+ purchases.", r_gold_desc: "Requires making a total of 5+ purchases.", r_partnerteam_desc: "Partner, free advertising authority.", r_developer_desc: "Official development team members.", r_member_desc: "Official server member.", 
        footer_community_title: "True Kinetic Studios", footer_community_desc: "This web project is managed via the official True Kinetic Studios Discord page.", footer_sub: "This website and provided services are independently operated by the True Kinetic Team."
    },
    tr: {
        nav_home: "Ana Sayfa", nav_how: "Nasıl Çalışır", nav_services: "Hizmetler", nav_reviews: "Yorumlar", nav_faq: "S.S.S.", nav_admin: "Admin",
        announcement: "🚀 Yaz İndirimleri: Özel indirimler için Discord sunucumuza katılın!",
        search_placeholder: "Hizmetlerde ara...",
        hero_title: "Güvenilir Dijital Hizmetler ve Oyun Çözümleri", hero_desc: "Profesyonel web tasarım, Discord sunucu yapılandırması ve en popüler oyun içi para birimleri güvenli teslimat ile tek adreste.", hero_btn_explore: "Hizmetleri İncele", hero_btn_discord: "Topluluğa Katıl",
        how_title: "Nasıl Satın Alınır?", step1_title: "Discord'a Katılın", step1_desc: "Sitemizdeki butonları kullanarak resmi Discord sunucumuza güvenli bir şekilde giriş yapın.", step2_title: "Talep Açın", step2_desc: "Sunucumuzda yer alan sipariş ve destek kanallarından hizmet için talep oluşturun.", step3_title: "Güvenle Teslim Alın", step3_desc: "Yetkililerimiz talebinizle ilgilenerek siparişinizi güvenli bir şekilde teslim etsin.",
        trust_title: "Satış Geçmişimiz", trust_desc: "Discord mağazamız henüz yenidir. Ana geliştirici faaliyetlerimiz ve asıl satış geçmişimiz resmi Roblox Creator Marketplace ve diğer yetkili platformlar üzerindedir.",
        services_title: "Hizmetlerimiz ve Ürünlerimiz", services_subtitle: "Aşağıdaki filtreleri kullanarak aradığınız hizmete hızlıca göz atabilirsiniz.", filter_all: "Tümü", filter_software: "Yazılım & Sunucu", filter_games: "Oyun Paraları",
        btn_order: "Sipariş Ver", btn_info: "Bilgi Al", btn_view_prices: "Fiyatları Gör", btn_order_on_discord: "Discord ile Sipariş Ver",
        reviews_title: "Müşteri Yorumları", reviews_subtitle: "Topluluğumuzun güvenli hizmetlerimiz hakkındaki düşünceleri.",
        sec_desc: "Gerçek bir True Kinetic yetkilisi ile konuştuğunuzdan emin olun. Doğrulamak için aşağıya kullanıcı adını yazın.", sec_btn: "Yetkiliyi Doğrula",
        faq_title: "Sıkça Sorulan Sorular", faq_q1_title: "Ödemeleri nasıl yapabilirim?", faq_q1_desc: "Ödemelerinizi Discord sunucumuz üzerinden destek talebi açarak güvenli yöntemlerle (Havale/EFT, Papara vb.) gerçekleştirebilirsiniz.", faq_q3_title: "Neden Discord?", faq_q3_desc: "Müşterilerimizle birebir iletişim kurabilmek, doğrudan canlı destek sunabilmek amacıyla tüm süreci Discord üzerinden yönetiyoruz.",
        roles_title: "Sunucu Rolleri", roles_subtitle: "Sunucumuzda mevcut olan roller ve rütbeler hakkında bilgi.", role_col_staff: "Yönetim & Yetkililer", role_col_ranks: "Aktif Rütbeler", role_col_members: "Özel Roller & Üyeler",
        r_founder_desc: "Resmi sunucu kurucusu, sahibi.", r_coleader_desc: "Resmi sunucu eş lideri.", r_headadmin_desc: "Ban istekleri, ortaklık başvuruları, yetkili alımı ve bot yöneticisi.", r_mod_desc: "Moderasyon ekibi, log görüntüleme.", r_legendary_desc: "Toplamda 100+ satın alma.", r_master_desc: "Toplamda 50+ satın alma.", r_diamond_desc: "Toplamda 25+ satın alma.", r_gold_desc: "Toplamda 5+ satın alma.", r_partnerteam_desc: "İş ortağı, reklam yetkisi.", r_developer_desc: "Geliştirici ekip üyeleri.", r_member_desc: "Resmi sunucu üyesi.", 
        footer_community_title: "True Kinetic Studios", footer_community_desc: "Bu web projesi, resmi True Kinetic Studios Discord sayfasında yayınlanmaktadır.", footer_sub: "Bu web sitesi True Kinetic ekibi tarafından bağımsız olarak yönetilmektedir."
    }
};

/* ==========================================================================
   2. VERİTABANI BAŞLATMA (LOCALSTORAGE & DEFAULTS)
   ========================================================================== */
const defaultPricingData = {
    web: { category: "software", icon: "fas fa-code", title: { en: "Web Site Design", tr: "Web Tasarım Paketleri" }, desc: { en: "Professional responsive design services.", tr: "Profesyonel arayüz tasarım hizmetleri." }, tiers: [{ name: { en: "Front-End", tr: "Front-End" }, price: { en: "12$", tr: "400 TL" }, desc: { en: "+$5 extra page", tr: "Ek sayfa +170 TL" } }] },
    discord: { category: "software", icon: "fab fa-discord", title: { en: "Discord Server Setup", tr: "Discord Sunucu Kurulumu" }, desc: { en: "Tailored roles and professional bot setup.", tr: "Özel yetkilendirme ve profesyonel botlar." }, tiers: [{ name: { en: "Basic Setup", tr: "Temel Kurulum" }, price: { en: "2$", tr: "70 TL" }, desc: { en: "Perfect starting layout", tr: "Standart, temiz kurulum" } }] },
    roblox_gift: { category: "games", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Robux_2019_Logo_gold.svg", title: { en: "Roblox Gift Cards", tr: "Roblox Hediye Kartları" }, desc: { en: "Digital codes directly applicable for Robux.", tr: "Robux için geçerli resmi kodlar." }, tiers: [{ name: "$5 Gift Card", price: { en: "5$", tr: "400 TL" }, desc: { en: "Official key", tr: "Resmi kod" } }] },
    pubg_uc: { category: "games", icon: "fas fa-crosshairs", title: { en: "PUBG Mobile UC", tr: "PUBG Mobile UC" }, desc: { en: "In-game Unknown Cash delivered to Player ID.", tr: "Oyuncu ID'nize doğrudan yüklenen UC." }, tiers: [{ name: "325 UC", price: { en: "4.5$", tr: "230 TL" }, desc: { en: "Direct ID Top-up", tr: "Doğrudan Yükleme" } }] },
    valorant_vp: { category: "games", icon: "fas fa-gamepad", title: { en: "Valorant VP", tr: "Valorant VP" }, desc: { en: "Secure Valorant Points Pin Codes.", tr: "İndirimli Valorant Points e-pin kodları." }, tiers: [{ name: "1700 VP", price: { en: "7.5$", tr: "493 TL" }, desc: { en: "Riot PIN delivery", tr: "Hızlı Riot PIN teslimatı" } }] }
};

if (!localStorage.getItem("kineticPricingDB")) {
    localStorage.setItem("kineticPricingDB", JSON.stringify(defaultPricingData));
}
let pricingData = JSON.parse(localStorage.getItem("kineticPricingDB"));
let officialStaff = JSON.parse(localStorage.getItem("kineticStaffDB")) || ["owmanxx", "neural_forge.", "someoneelsexd"];
let currentLang = localStorage.getItem("preferredLang") || "en";

/* ==========================================================================
   3. GÜVENLİK (ADMIN ŞİFRESİ GİZLEME)
   ========================================================================== */
const ENCODED_PASS = "eHM3MmtwMXo3NzN0M3AzdDlvNW5jMmY5dWYzcmhxeDN5bGJqZXhkMjNtbWZ0eTJzNXU=";

function verifyAdminPassword(inputPass) {
    try {
        return btoa(inputPass) === ENCODED_PASS;
    } catch(e) {
        return false;
    }
}

/* ==========================================================================
   4. TOAST BİLDİRİM SİSTEMİ
   ========================================================================== */
function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    let icon = type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle";
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 400); }, 3500);
}

/* ==========================================================================
   5. ARAMA & LİSTELEME MOTORU (SPOTLIGHT)
   ========================================================================== */
function initSpotlight() {
    const cards = document.querySelectorAll(".service-card");
    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        });
    });
}

function renderServices(searchQuery = "") {
    const grid = document.getElementById("servicesGrid");
    grid.innerHTML = "";
    
    // Geçerli kategori filtresini al
    const activeFilterBtn = document.querySelector(".filter-btn.active");
    const activeFilter = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";

    Object.keys(pricingData).forEach(key => {
        const item = pricingData[key];
        const titleText = item.title[currentLang] || item.title.en || item.title;
        const descText = item.desc[currentLang] || item.desc.en || item.desc;
        const btnText = item.category === "software" ? translations[currentLang].btn_info : translations[currentLang].btn_view_prices;

        // Arama ve Kategori Filtresi Uygunluk Kontrolü
        const matchesCategory = (activeFilter === "all" || item.category === activeFilter);
        const matchesSearch = titleText.toLowerCase().includes(searchQuery.toLowerCase()) || descText.toLowerCase().includes(searchQuery.toLowerCase());

        if (matchesCategory && matchesSearch) {
            // İkon mu yoksa Resim url'si mi kontrolü (http içeriyorsa resimdir)
            let iconHTML = item.icon.includes("http") ? `<img src="${item.icon}" alt="${titleText}">` : `<i class="${item.icon}"></i>`;
            
            const card = document.createElement("div");
            card.className = "service-card";
            card.setAttribute("data-category", item.category || "software");
            card.innerHTML = `
                <div class="card-icon">${iconHTML}</div>
                <h3>${titleText}</h3>
                <p>${descText}</p>
                <button class="card-action-btn" onclick="openPricingModal('${key}')">
                    <span>${btnText}</span> <i class="fas fa-arrow-right"></i>
                </button>
            `;
            grid.appendChild(card);
        }
    });

    if (grid.innerHTML === "") {
        grid.innerHTML = `<p style="color: var(--text-muted); text-align:center; width:100%; grid-column: 1 / -1;">No matching services found.</p>`;
    }

    initSpotlight();
}

/* ==========================================================================
   6. DİL / ÇEVİRİ YÖNETİMİ
   ========================================================================== */
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("preferredLang", lang);
    document.getElementById("langSelect").value = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) element.textContent = translations[lang][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) element.setAttribute("placeholder", translations[lang][key]);
    });

    renderServices(document.getElementById("searchInput") ? document.getElementById("searchInput").value : "");
}

/* ==========================================================================
   7. UI ETKİLEŞİMLERİ (SCROLL, MOBİL, ARAMA, FAQ)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);

    // Scroll Navbar
    window.addEventListener("scroll", () => {
        const nav = document.getElementById("navbar");
        if (window.scrollY > 50) nav.classList.add("scrolled"); else nav.classList.remove("scrolled");
    });

    // Mobile Nav
    document.getElementById("mobileToggle").addEventListener("click", () => {
        document.getElementById("navContainer").classList.toggle("active");
    });

    // Language change
    document.getElementById("langSelect").addEventListener("change", (e) => applyLanguage(e.target.value));

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));

    // Kategori Filtre Butonları
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderServices(document.getElementById("searchInput").value);
        });
    });

    // Arama Çubuğu Dinleyici
    const searchInput = document.getElementById("searchInput");
    if(searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderServices(e.target.value);
        });
    }

    // FAQ Akordeon
    document.querySelectorAll(".faq-question").forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;
            const answer = item.querySelector(".faq-answer");
            const isActive = item.classList.contains("active");
            
            document.querySelectorAll(".faq-item").forEach(i => {
                i.classList.remove("active"); i.querySelector(".faq-answer").style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add("active"); answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Staff Verification Tool
    const verifyBtn = document.getElementById("verifyBtn");
    if(verifyBtn) {
        verifyBtn.addEventListener("click", () => {
            const val = document.getElementById("staffInput").value.trim().toLowerCase();
            const resBox = document.getElementById("verifyResult");
            if (!val) return;

            resBox.style.display = "block";
            if (officialStaff.includes(val)) {
                resBox.className = "verify-result verify-success";
                resBox.innerHTML = `<i class="fas fa-check-circle"></i> VERIFIED: <strong>@${val}</strong> is an official team member.`;
            } else {
                resBox.className = "verify-result verify-fail";
                resBox.innerHTML = `<i class="fas fa-exclamation-triangle"></i> WARNING: <strong>@${val}</strong> is NOT a registered official!`;
            }
        });
    }

    // Modalları kapatma (dışarı tıklayınca)
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-overlay")) e.target.classList.remove("active");
    });
});

/* ==========================================================================
   8. MODAL YÖNETİMİ (KAPATMA VE PRICING AÇMA)
   ========================================================================== */
document.querySelectorAll(".close-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => btn.closest(".modal-overlay").classList.remove("active"));
});

window.openPricingModal = function(key) {
    const data = pricingData[key];
    if (!data) return;

    document.getElementById("pricingTitle").textContent = data.title[currentLang] || data.title.en;
    document.getElementById("pricingDesc").textContent = data.desc[currentLang] || data.desc.en;
    
    const tiersDiv = document.getElementById("pricingTiers");
    tiersDiv.innerHTML = "";

    data.tiers.forEach(tier => {
        const tName = typeof tier.name === "string" ? tier.name : (tier.name[currentLang] || tier.name.en);
        const tPrice = typeof tier.price === "string" ? tier.price : (tier.price[currentLang] || tier.price.en);
        const tDesc = typeof tier.desc === "string" ? tier.desc : (tier.desc[currentLang] || tier.desc.en);

        tiersDiv.innerHTML += `
            <div class="tier-card">
                <h4>${tName}</h4>
                <div class="tier-price">${tPrice}</div>
                <p class="tier-desc">${tDesc}</p>
            </div>
        `;
    });

    document.getElementById("pricingModal").classList.add("active");
};

/* ==========================================================================
   9. ADMIN PANELİ & GİRİŞ (AUTH)
   ========================================================================== */
document.getElementById("openAdminLoginBtn").addEventListener("click", () => {
    document.getElementById("adminAuthModal").classList.add("active");
});

document.getElementById("toggleAdminPass").addEventListener("click", () => {
    const inp = document.getElementById("adminPassInput");
    const icon = document.querySelector("#toggleAdminPass i");
    if (inp.type === "password") { inp.type = "text"; icon.className = "far fa-eye-slash"; } 
    else { inp.type = "password"; icon.className = "far fa-eye"; }
});

// Güvenli Admin Giriş İşlemi
document.getElementById("submitAdminLoginBtn").addEventListener("click", () => {
    const inpVal = document.getElementById("adminPassInput").value;
    const isValid = verifyAdminPassword(inpVal);

    if (isValid) {
        document.getElementById("adminAuthModal").classList.remove("active");
        document.getElementById("adminPassInput").value = "";
        showToast("Access Granted! Welcome to Command Center.", "success");
        openAdminDashboard();
    } else {
        showToast("Authentication Failed! Invalid Security Key.", "error");
    }
});

/* ==========================================================================
   10. ADMIN DASHBOARD İŞLEVLERİ (TABS, EDIT, ADD, DB IMPORT/EXPORT)
   ========================================================================== */
function openAdminDashboard() {
    document.getElementById("adminDashboard").classList.add("active");
    
    const tabBtns = document.querySelectorAll("#adminDashboard .tab-btn");
    const tabContents = document.querySelectorAll("#adminDashboard .tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(btn.getAttribute("data-tab")).classList.add("active");
        });
    });

    refreshAdminDashboardData();
}

function refreshAdminDashboardData() {
    // İstatistikleri Güncelle
    document.getElementById("statTotalProducts").textContent = Object.keys(pricingData).length;
    document.getElementById("statTotalStaff").textContent = officialStaff.length;

    loadEditorSelect();
    loadAdminProductList();
    loadStaffList();
    generateTiersInputFields();
}

// FİYAT GÜNCELLEME (Edit Prices)
const editorSelect = document.getElementById("editorServiceSelect");
const editorContainer = document.getElementById("editorTiersContainer");

function loadEditorSelect() {
    editorSelect.innerHTML = "";
    Object.keys(pricingData).forEach(key => {
        editorSelect.innerHTML += `<option value="${key}">${pricingData[key].title.en || pricingData[key].title}</option>`;
    });
    if(Object.keys(pricingData).length > 0) loadTiersIntoEditor(editorSelect.value);
}

editorSelect.addEventListener("change", (e) => loadTiersIntoEditor(e.target.value));

function loadTiersIntoEditor(serviceKey) {
    const data = pricingData[serviceKey];
    editorContainer.innerHTML = "";
    if (!data) return;

    data.tiers.forEach((tier, index) => {
        const tName = typeof tier.name === "string" ? tier.name : (tier.name.en || tier.name.tr);
        const pEn = typeof tier.price === "string" ? tier.price : tier.price.en;
        const pTr = typeof tier.price === "string" ? tier.price : tier.price.tr;

        editorContainer.innerHTML += `
            <div class="tier-edit-row">
                <label>${tName} (Package ${index + 1})</label>
                <div class="form-row-dual">
                    <input type="text" class="dashboard-input edit-p-en" value="${pEn}" placeholder="Price (EN)">
                    <input type="text" class="dashboard-input edit-p-tr" value="${pTr}" placeholder="Fiyat (TR)">
                </div>
            </div>
        `;
    });
}

document.getElementById("savePricesBtn").addEventListener("click", () => {
    const key = editorSelect.value;
    if(!pricingData[key]) return;
    const rows = editorContainer.querySelectorAll(".tier-edit-row");
    
    rows.forEach((row, index) => {
        const enVal = row.querySelector(".edit-p-en").value;
        const trVal = row.querySelector(".edit-p-tr").value;
        pricingData[key].tiers[index].price = { en: enVal, tr: trVal };
    });

    localStorage.setItem("kineticPricingDB", JSON.stringify(pricingData));
    renderServices(document.getElementById("searchInput") ? document.getElementById("searchInput").value : "");
    showToast("Global pricing configuration updated!", "success");
});

// YENİ ÜRÜN EKLE / SİL
const addProdTiersCount = document.getElementById("addProdTiersCount");
const addProdTiersFields = document.getElementById("addProdTiersFields");

function generateTiersInputFields() {
    const count = parseInt(addProdTiersCount.value) || 1;
    addProdTiersFields.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        addProdTiersFields.innerHTML += `
            <div class="tier-input-group" style="background:rgba(255,255,255,0.02); padding:10px; border-radius:8px; margin-bottom:10px; border:1px solid rgba(255,255,255,0.05);">
                <label style="display:block; color:var(--purple-hover); font-size:0.8rem; margin-bottom:5px;">Package ${i}</label>
                <div class="form-row-dual">
                    <input type="text" class="dashboard-input t-name-en" placeholder="Name (EN)" required>
                    <input type="text" class="dashboard-input t-name-tr" placeholder="Ad (TR)" required>
                </div>
                <div class="form-row-dual">
                    <input type="text" class="dashboard-input t-price-en" placeholder="Price (EN) 10$" required>
                    <input type="text" class="dashboard-input t-price-tr" placeholder="Fiyat (TR) 100 TL" required>
                </div>
                <div class="form-row-dual">
                    <input type="text" class="dashboard-input t-desc-en" placeholder="Desc (EN)" required>
                    <input type="text" class="dashboard-input t-desc-tr" placeholder="Açıklama (TR)" required>
                </div>
            </div>
        `;
    }
}
addProdTiersCount.addEventListener("input", generateTiersInputFields);

document.getElementById("addProductBtn").addEventListener("click", () => {
    const key = document.getElementById("addProdKey").value.trim().toLowerCase().replace(/\s+/g, '_');
    if (!key) return showToast("Product ID cannot be empty!", "error");
    if (pricingData[key]) return showToast("This Product ID already exists!", "error");

    const tierGroups = addProdTiersFields.querySelectorAll(".tier-input-group");
    const tiers = [];
    let isTiersValid = true;

    tierGroups.forEach(group => {
        const nameEn = group.querySelector(".t-name-en").value;
        if(!nameEn) isTiersValid = false;
        tiers.push({
            name: { en: nameEn, tr: group.querySelector(".t-name-tr").value },
            price: { en: group.querySelector(".t-price-en").value, tr: group.querySelector(".t-price-tr").value },
            desc: { en: group.querySelector(".t-desc-en").value, tr: group.querySelector(".t-desc-tr").value }
        });
    });

    if(!isTiersValid) return showToast("Please fill all package names!", "error");

    pricingData[key] = {
        category: document.getElementById("addProdCategory").value, 
        icon: document.getElementById("addProdIcon").value || "fas fa-box",
        title: { en: document.getElementById("addProdTitleEn").value, tr: document.getElementById("addProdTitleTr").value },
        desc: { en: document.getElementById("addProdDescEn").value, tr: document.getElementById("addProdDescTr").value },
        tiers: tiers
    };

    localStorage.setItem("kineticPricingDB", JSON.stringify(pricingData));
    showToast("New product integrated to the global hub!", "success");
    
    // Formu temizle
    document.querySelectorAll(".add-product-form input[type='text']").forEach(i => i.value = "");
    addProdTiersCount.value = 1; generateTiersInputFields();
    
    renderServices(document.getElementById("searchInput") ? document.getElementById("searchInput").value : "");
    refreshAdminDashboardData();
});

function loadAdminProductList() {
    const ul = document.getElementById("adminProductList");
    ul.innerHTML = "";
    Object.keys(pricingData).forEach(key => {
        const title = pricingData[key].title.en || pricingData[key].title;
        ul.innerHTML += `
            <li class="staff-list-item">
                <span>${title} <span style="font-size:0.7rem; color:var(--text-muted); opacity:0.5;">(${key})</span></span>
                <button class="remove-product-btn" onclick="deleteProduct('${key}')"><i class="fas fa-trash"></i></button>
            </li>
        `;
    });
}

window.deleteProduct = function(key) {
    delete pricingData[key];
    localStorage.setItem("kineticPricingDB", JSON.stringify(pricingData));
    showToast(`Product [${key}] eradicated from database.`, "info");
    renderServices(document.getElementById("searchInput") ? document.getElementById("searchInput").value : "");
    refreshAdminDashboardData();
};

// STAFF YÖNETİMİ
function loadStaffList() {
    const ul = document.getElementById("staffList");
    ul.innerHTML = "";
    officialStaff.forEach((username, index) => {
        ul.innerHTML += `
            <li class="staff-list-item">
                <span>@${username}</span>
                <button class="remove-staff-btn" onclick="removeStaff(${index})"><i class="fas fa-user-minus"></i></button>
            </li>
        `;
    });
}

document.getElementById("addStaffBtn").addEventListener("click", () => {
    const input = document.getElementById("newStaffInput");
    const val = input.value.trim().toLowerCase();
    
    if (!val) return;
    if (officialStaff.includes(val)) return showToast("User is already in the registry.", "error");

    officialStaff.push(val);
    localStorage.setItem("kineticStaffDB", JSON.stringify(officialStaff));
    input.value = "";
    refreshAdminDashboardData();
    showToast("Staff registry updated.", "success");
});

window.removeStaff = function(index) {
    officialStaff.splice(index, 1);
    localStorage.setItem("kineticStaffDB", JSON.stringify(officialStaff));
    refreshAdminDashboardData();
    showToast("Staff access revoked.", "info");
};

// VERİTABANI İNDİRME VE İÇE AKTARMA (JSON EXPORT & IMPORT)
document.getElementById("exportDbBtn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pricingData, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr); dlAnchorElem.setAttribute("download", "products.json");
    document.body.appendChild(dlAnchorElem); dlAnchorElem.click(); dlAnchorElem.remove();
    showToast("JSON successfully generated for GitHub sync.", "success");
});

const importDbBtn = document.getElementById("importDbBtn");
const importDbFile = document.getElementById("importDbFile");

importDbBtn.addEventListener("click", () => importDbFile.click());

importDbFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const importedData = JSON.parse(evt.target.result);
            if (typeof importedData === "object" && importedData !== null) {
                pricingData = importedData;
                localStorage.setItem("kineticPricingDB", JSON.stringify(pricingData));
                renderServices(document.getElementById("searchInput") ? document.getElementById("searchInput").value : "");
                refreshAdminDashboardData();
                showToast("Database successfully restored from JSON!", "success");
            } else { throw new Error("Invalid format"); }
        } catch (error) {
            showToast("Failed to import! The JSON file is corrupted or invalid.", "error");
        }
    };
    reader.readAsText(file);
    // Reset file input
    e.target.value = '';
});

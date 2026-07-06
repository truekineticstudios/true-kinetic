/* ==========================================================================
   TRUE KINETIC - FRONT-END ENGINE (NO FIREBASE / 100% STABLE)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. DİL SÖZLÜĞÜ (TRANSLATIONS)
   -------------------------------------------------------------------------- */
const translations = {
    en: {
        nav_home: "Home", nav_how: "How It Works", nav_services: "Services", nav_reviews: "Reviews", nav_faq: "FAQ", nav_admin: "Admin",
        nav_community: "Community", nav_esports: "TK Esports", nav_updates: "Updates", nav_roster: "Roster",
        announcement: "🏆 TK Esports Recruitment is Officially OPEN!",
        search_placeholder: "Search services...",
        hero_title: "Welcome to True Kinetic Ecosystem", 
        hero_desc: "Join our Discord community, participate in our custom esports tournaments, and discover our digital services all in one place.", 
        hero_btn_explore: "Discover Esports", hero_btn_discord: "Join Community",
        roles_title: "Discord Server Roles", roles_subtitle: "Information about the roles and ranks available on our Discord server.",
        role_col_staff: "Management & Staff", role_col_ranks: "Purchase Ranks", role_col_members: "Community & Teams",
        r_founder_desc: "Official server founder and owner.", r_coleader_desc: "Official server Co-Leader.", r_headadmin_desc: "Ban requests, applications, bot admin.", r_mod_desc: "Moderation staff member, log viewing.", r_legendary_desc: "Requires making a total of 100+ purchases.", r_master_desc: "Requires making a total of 50+ purchases.", r_diamond_desc: "Requires making a total of 25+ purchases.", r_gold_desc: "Requires making a total of 5+ purchases.", r_partnerteam_desc: "Partner, free advertising authority.", r_developer_desc: "Official development team members.", r_member_desc: "Official server member.", r_esport_desc: "Official professional e-sports players representing TK.",
        footer_community_title: "True Kinetic Studios", footer_community_desc: "This web project is managed via the official True Kinetic Studios Discord page.", footer_sub: "This website and provided services are independently operated by the True Kinetic Team.",
        es_community_desc: "An active and growing gaming community organizing custom tournaments and aiming to step into competitive arenas.",
        es_feat_1: "Official Tournaments", es_feat_2: "Community Scrims", es_feat_3: "Custom TK Cups",
        es_pubg_text: "Join our competitive squad for official tournaments and community scrims.",
        es_bs_text: "Fast-paced tactical coordination. Step into the battlefield with us.",
        es_btn_apply: "Apply Now",
        es_modal_subtitle: "Player Recruitment Requirements & Rules",
        es_rule1_title: "Communication", es_rule1_desc: "Active microphone usage and Discord presence is strictly required during match times.",
        es_rule2_title: "Activity & Dedication", es_rule2_desc: "Players must attend scheduled community scrims, training sessions, and official cups.",
        es_rule3_title: "Respect & Toxicity", es_rule3_desc: "Zero tolerance for toxic behavior. You represent the True Kinetic community.",
        es_modal_warning: "By proceeding, you agree to follow the community guidelines. You will be redirected to our Discord server to open a recruitment ticket.",
        es_btn_accept: "I Accept, Open Ticket",
        epin_title: "💎 E-Pin & Game Currencies",
        epin_desc: "Although we have removed our website catalog, our safe and fast E-Pin (Valorant VP, PUBG Mobile UC, Steam Wallet, etc.) sales are still actively running! You can easily place an order by opening a support ticket on our Discord server.",
        epin_btn: "Join Discord & Order Now",
        roster_title: "👥 Active Game Rosters",
        roster_subtitle: "Our active competitive squads representing True Kinetic across various titles."
    },
    tr: {
        nav_home: "Ana Sayfa", nav_how: "Nasıl Çalışır", nav_services: "Hizmetler", nav_reviews: "Yorumlar", nav_faq: "S.S.S.", nav_admin: "Admin",
        nav_community: "Topluluk", nav_esports: "TK E-Spor", nav_updates: "Gelişmeler", nav_roster: "Kadro",
        announcement: "🏆 TK Esports Kadro Başvuruları RESMEN AÇILDI!",
        search_placeholder: "Ara...",
        hero_title: "True Kinetic Ekosistemine Hoş Geldin", 
        hero_desc: "Discord topluluğumuza katılın, özel espor turnuvalarımızda yerinizi alın ve dijital hizmetlerimizi tek bir adreste keşfedin.", 
        hero_btn_explore: "E-Sporu Keşfet", hero_btn_discord: "Topluluğa Katıl",
        roles_title: "Sunucu Rolleri", roles_subtitle: "Sunucumuzda mevcut olan roller ve rütbeler hakkında bilgi.",
        role_col_staff: "Yönetim & Yetkililer", role_col_ranks: "Aktif Rütbeler", role_col_members: "Topluluk & Takımlar",
        r_founder_desc: "Resmi sunucu kurucusu, sahibi.", r_coleader_desc: "Resmi sunucu eş lideri.", r_headadmin_desc: "Ban istekleri, ortaklık başvuruları, yetkili alımı ve bot yöneticisi.", r_mod_desc: "Moderasyon ekibi, log görüntüleme.", r_legendary_desc: "Toplamda 100+ satın alma.", r_master_desc: "Toplamda 50+ satın alma.", r_diamond_desc: "Toplamda 25+ satın alma.", r_gold_desc: "Toplamda 5+ satın alma.", r_partnerteam_desc: "İş ortağı, reklam yetkisi.", r_developer_desc: "Geliştirici ekip üyeleri.", r_member_desc: "Resmi sunucu üyesi.", r_esport_desc: "TK'yi temsil eden resmi profesyonel e-spor oyuncuları.",
        footer_community_title: "True Kinetic Studios", footer_community_desc: "Bu web projesi, resmi True Kinetic Studios Discord sayfasında yayınlanmaktadır.", footer_sub: "Bu web sitesi True Kinetic ekibi tarafından bağımsız olarak yönetilmektedir.",
        es_community_desc: "Kendi turnuvalarını düzenleyen, rekabetçi arenalarda yer almayı hedefleyen aktif ve gelişmekte olan bir oyuncu topluluğuyuz.",
        es_feat_1: "Resmi Turnuvalar", es_feat_2: "Topluluk Scrimleri", es_feat_3: "Özel TK Turnuvaları",
        es_pubg_text: "Resmi turnuvalarda ve scrimlerde fırtına estirmek için takımımıza katıl.",
        es_bs_text: "Taktiksel ve yüksek tempolu savaş alanında omuz omuza çarpışmak için yerini al.",
        es_btn_apply: "Başvur",
        es_modal_subtitle: "Oyuncu Alım Şartları ve Topluluk Kuralları",
        es_rule1_title: "İletişim Şartı", es_rule1_desc: "Maç saatlerinde aktif mikrofon kullanımı ve Discord'da bulunmak zorunludur.",
        es_rule2_title: "Aktiflik ve Özveri", es_rule2_desc: "Oyuncuların planlanan antrenmanlara, scrimlere ve resmi turnuvalara katılımı beklenir.",
        es_rule3_title: "Saygı ve Toksisite", es_rule3_desc: "Toksik davranışlara sıfır tolerans. True Kinetic topluluğunu temsil ettiğinizi unutmayın.",
        es_modal_warning: "Devam ederek topluluk kurallarına uymayı kabul etmiş olursunuz. Başvuru bilet açmak için Discord sunucumuza yönlendirileceksiniz.",
        es_btn_accept: "Kabul Ediyorum, Bilet Aç",
        epin_title: "💎 E-Pin & Oyun Parası Satışları",
        epin_desc: "Web sitemizdeki ürün kataloğunu kaldırmış olsak da; güvenli ve hızlı E-Pin (Valorant VP, PUBG Mobile UC, Steam Cüzdan vb.) satışlarımız kesintisiz olarak devam ediyor! Discord sunucumuza katılarak kolayca sipariş oluşturabilirsiniz.",
        epin_btn: "Katıl & Sipariş Ver",
        roster_title: "👥 Aktif Oyun Kadroları",
        roster_subtitle: "True Kinetic adını farklı arenalarda temsil eden rekabetçi aktif kadrolarımız."
    }
};

/* ==========================================================================
   VARSAYILAN YEDEK VERİTABANI ŞABLONU
   ========================================================================== */
const defaultDatabase = {
    tournaments: [
        { oyun: "Valorant", baslik: "TK Valorant Cup Season 1", odul: "5000 VP", tarih: "2026-07-20" }
    ],
    updates: [
        { 
            baslik: { en: "TK Esports PUBG Mobile Recruitment!", tr: "TK Esports PUBG Mobile Kadro Alımı!" },
            desc: { en: "We are officially starting recruitments for our brand-new competitive squad.", tr: "Yeni kuracağımız rekabetçi kadromuz için başvuruları resmen başlatıyoruz." },
            icon: "fas fa-bullhorn"
        }
    ],
    recruitments: [
        { oyun: "PUBG Mobile", desc: { en: "Faceit lvl 10, Age 18+, Active mic", tr: "Faceit Lvl 10, Yaş 18+, Aktif mikrofon" }, theme: "pubg-theme" }
    ],
    roster: [
        { oyun: "PUBG Mobile", ad: "neural_forge", rol: "IGL / Sniper", yas: "20" }
    ]
};

// Yerel Değişkenler
let hubDatabase = JSON.parse(localStorage.getItem("kinetic_hub_db")) || defaultDatabase;
let officialStaff = JSON.parse(localStorage.getItem("kineticStaffDB")) || ["owmanxx", "neural_forge.", "someoneelsexd"];
let currentLang = localStorage.getItem("preferredLang") || "en";
let selectedRosterTab = "ALL"; // Varsayılan seçili kadro sekmesi

/* ==========================================================================
   2. GITHUB'DAN database.json VERİSİNİ ÇEKME
   ========================================================================== */
async function fetchLatestDataFromGithub() {
    try {
        const response = await fetch('database.json?t=' + new Date().getTime());
        if (response.ok) {
            hubDatabase = await response.json();
            localStorage.setItem("kinetic_hub_db", JSON.stringify(hubDatabase));
            console.log("database.json başarıyla GitHub'dan güncellendi.");
        }
    } catch (e) {
        console.log("GitHub database.json çekilemedi, yerel önbellek kullanılıyor.");
    }
    renderUpdates();
    renderActiveTournaments();
    renderActiveRecruitments();
    renderActiveRosters(); // Sekmeli roster çizimi
}

/* ==========================================================================
   3. DETAYLI RENDER SİSTEMLERİ (OKUMA VE LİSTELEME)
   ========================================================================== */
// Duyurular ve Gelişmeler Grid Çizimi
function renderUpdates() {
    const grid = document.getElementById("updatesGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    if (!hubDatabase.updates || hubDatabase.updates.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); text-align:center; width:100%; grid-column: 1/-1;">No updates found.</p>`;
        return;
    }

    hubDatabase.updates.forEach((item) => {
        if (!item) return;
        const titleText = !item.baslik ? "No Title" : (typeof item.baslik === "string" ? item.baslik : (item.baslik[currentLang] || item.baslik.en || item.baslik.tr || "No Title"));
        const descText = !item.desc ? "" : (typeof item.desc === "string" ? item.desc : (item.desc[currentLang] || item.desc.en || item.desc.tr || ""));
        const iconClass = item.icon || "fas fa-bullhorn";

        const card = document.createElement("div");
        card.className = "service-card reveal-on-scroll active";
        card.innerHTML = `
            <div class="card-icon"><i class="${iconClass}"></i></div>
            <h3>${titleText}</h3>
            <p>${descText}</p>
        `;
        grid.appendChild(card);
    });
}

// Canlı Turnuvaları Ekrana Basma
function renderActiveTournaments() {
    const grid = document.getElementById("activeTournamentsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    if ((!hubDatabase.tournaments || hubDatabase.tournaments.length === 0)) {
        grid.innerHTML = `<p style="color: var(--text-muted); font-size:0.95rem; grid-column: 1/-1;">No active tournaments currently. Stay tuned!</p>`;
        return;
    }

    hubDatabase.tournaments.forEach((t) => {
        grid.innerHTML += `
            <div class="es-roster-card bs-theme" style="border-color: var(--purple-glow);">
                <div class="es-roster-bg" style="background: var(--purple-glow);"></div>
                <div class="es-roster-content">
                    <div class="es-roster-head">
                        <h3>${t.oyun ? t.oyun.toUpperCase() : "GAME"}</h3>
                        <span class="pulse-tag" style="background:rgba(168, 85, 247, 0.15); color:var(--purple-hover); border-color:rgba(168, 85, 247, 0.3);">ACTIVE</span>
                    </div>
                    <h4 style="color:white; font-size:1.2rem; margin-bottom: 5px;">${t.baslik || "Tournament"}</h4>
                    <p style="margin-bottom: 1.5rem; font-size:0.9rem;">🎁 <b>Reward:</b> ${t.odul || "TBD"} <br> 📅 <b>Date:</b> ${t.tarih || "TBD"}</p>
                    <button class="es-action-btn" onclick="openEsportsModal('${t.baslik || "Tournament"}')">
                        <span data-i18n="es_btn_apply">Apply Now</span> <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

// Canlı Kadro Alımlarını Ekrana Basma
function renderActiveRecruitments() {
    const grid = document.getElementById("activeRecruitmentsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    if ((!hubDatabase.recruitments || hubDatabase.recruitments.length === 0)) {
        grid.innerHTML = `<p style="color: var(--text-muted); font-size:0.95rem;">No active recruitments currently.</p>`;
        return;
    }

    hubDatabase.recruitments.forEach((r) => {
        if (!r) return;
        const descText = !r.desc ? "" : (typeof r.desc === "string" ? r.desc : (r.desc[currentLang] || r.desc.en || r.desc.tr || ""));
        grid.innerHTML += `
            <div class="es-roster-card ${r.theme || 'software'}">
                <div class="es-roster-bg"></div>
                <div class="es-roster-content">
                    <div class="es-roster-head">
                        <h3>${r.oyun ? r.oyun.toUpperCase() : "GAME"}</h3>
                        <span class="pulse-tag">RECRUITING</span>
                    </div>
                    <p>${descText}</p>
                    <button class="es-action-btn" onclick="openEsportsModal('${r.oyun}')">
                        <span data-i18n="es_btn_apply">Apply Now</span> <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

// 3.1 DİNAMİK SEKMELİ KADRO RENDER SİSTEMİ (ROSTER TABS)
function renderActiveRosters() {
    const tabsBar = document.getElementById("rosterTabsBar");
    const grid = document.getElementById("activeRostersGrid");
    if (!grid) return;
    grid.innerHTML = "";

    if (!hubDatabase.roster || hubDatabase.roster.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); text-align:center; width:100%;">Henüz kadrolara oyuncu eklenmedi.</p>`;
        if (tabsBar) tabsBar.innerHTML = "";
        return;
    }

    // 1. Benzersiz oyun listesini çıkararak dinamik sekmeler üret (Tabs)
    const uniqueGames = ["ALL"];
    hubDatabase.roster.forEach(p => {
        const gameName = p.oyun ? p.oyun.trim().toUpperCase() : "";
        if (gameName && !uniqueGames.includes(gameName)) {
            uniqueGames.push(gameName);
        }
    });

    // Sekme Butonlarını Yaz
    if (tabsBar) {
        tabsBar.innerHTML = "";
        uniqueGames.forEach(game => {
            const isActive = selectedRosterTab === game ? "active" : "";
            const displayName = game === "ALL" ? (currentLang === "tr" ? "TÜMÜ" : "ALL") : game;
            tabsBar.innerHTML += `
                <button class="filter-btn ${isActive}" onclick="setRosterTab('${game}')">${displayName}</button>
            `;
        });
    }

    // 2. Seçili Sekmeye Göre Oyuncuları Filtrele ve Kare Kart Olarak Çiz [1.1]
    const filteredPlayers = selectedRosterTab === "ALL" 
        ? hubDatabase.roster 
        : hubDatabase.roster.filter(p => p.oyun && p.oyun.trim().toUpperCase() === selectedRosterTab);

    if (filteredPlayers.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); text-align:center; width:100%;">Bu kategoride oyuncu bulunamadı.</p>`;
        return;
    }

    filteredPlayers.forEach(p => {
        grid.innerHTML += `
            <div class="player-card reveal-on-scroll active">
                <div class="player-avatar-bg">
                    <i class="fas fa-gamepad"></i>
                </div>
                <h4 class="player-name">${p.ad}</h4>
                <span class="player-role">${p.rol}</span>
                <span class="player-age">AGE: ${p.yas}</span>
            </div>
        `;
    });
}

// Roster Sekmesini Değiştirme Tetikleyicisi
window.setRosterTab = function(tabName) {
    selectedRosterTab = tabName;
    renderActiveRosters();
};

/* ==========================================================================
   4. ÇEVİRİ VE DİL DESTEĞİ
   ========================================================================== */
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("preferredLang", lang);
    const select = document.getElementById("langSelect");
    if (select) select.value = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) element.textContent = translations[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) element.setAttribute("placeholder", translations[lang][key]);
    });
    
    renderServices("");
    renderActiveRosters(); // Dil değişiminde sekmeli roster'ı tekrar Türkçe/İngilizce çiz
}

/* ==========================================================================
   5. UI ETKİLEŞİMLERİ VE GENEL OLAYLAR
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    fetchLatestDataFromGithub();

    window.addEventListener("scroll", () => {
        const nav = document.getElementById("navbar");
        if (nav) { if (window.scrollY > 50) nav.classList.add("scrolled"); else nav.classList.remove("scrolled"); }
    });

    const mobToggle = document.getElementById("mobileToggle");
    if (mobToggle) { mobToggle.addEventListener("click", () => document.getElementById("navContainer").classList.toggle("active")); }

    const langSelect = document.getElementById("langSelect");
    if (langSelect) { langSelect.addEventListener("change", (e) => applyLanguage(e.target.value)); }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add("active"); observer.unobserve(entry.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));

    document.querySelectorAll(".faq-question").forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;
            const answer = item.querySelector(".faq-answer");
            const isActive = item.classList.contains("active");
            document.querySelectorAll(".faq-item").forEach(i => { i.classList.remove("active"); i.querySelector(".faq-answer").style.maxHeight = null; });
            if (!isActive) { item.classList.add("active"); answer.style.maxHeight = answer.scrollHeight + "px"; }
        });
    });

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

    // Modal dışına tıklayınca kapanma mantığı (Admin Paneli artık ayrı sayfada olduğu için sadece apply modalı kapsar)
    window.addEventListener("click", (e) => { 
        if (e.target.classList.contains("modal-overlay")) {
            e.target.classList.remove("active"); 
        } 
    });
});

/* ==========================================================================
   6. MODALLAR VE KAPATMA İŞLEVLERİ
   ========================================================================== */
document.querySelectorAll(".close-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => btn.closest(".modal-overlay").classList.remove("active"));
});

window.openEsportsModal = function(gameName) {
    const modal = document.getElementById("esportsApplyModal");
    const title = document.getElementById("esModalGameTitle");
    if(modal && title) {
        title.innerHTML = `TK Esports - <span style="color:var(--purple-glow);">${gameName}</span>`;
        modal.classList.add("active");
    }
};

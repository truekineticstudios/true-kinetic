/* ==========================================================================
   1. GÜVENLİK ANAHTARI VE ŞİFRELİ GİRİŞ SİSTEMİ (Yeni Kolay Şifre: kineticadmin)
   ========================================================================== */
const ENCODED_PASS = "a2luZXRpY2FkbWlu"; 
function verifyAdminPassword(inputPass) { try { return btoa(inputPass) === ENCODED_PASS; } catch(e) { return false; } }

/* ==========================================================================
   VARSAYILAN VERİTABANI ŞABLONU (İLK ÇALIŞMADA OTOMATİK OLUŞUR)
   ========================================================================== */
const defaultDatabase = {
    tournaments: [
        { oyun: "Valorant", baslik: "TK Valorant Cup Season 1", odul: "5000 VP", tarih: "2026-07-20" }
    ],
    updates: [
        { 
            baslik: { en: "TK Esports PUBG Mobile Roster Recruitment!", tr: "TK Esports PUBG Mobile Kadro Başvuruları!" },
            desc: { en: "We are officially starting recruitments for our brand-new competitive pubg mobile squad.", tr: "Yeni kuracağımız rekabetçi PUBG Mobile kadromuz için başvuruları resmen başlatıyoruz." },
            icon: "fas fa-bullhorn"
        }
    ],
    recruitments: [
        { oyun: "PUBG Mobile", desc: { en: "Faceit lvl 10, Age 18+, Active mic", tr: "Faceit Lvl 10, Yaş 18+, Aktif mikrofon" }, theme: "pubg-theme" },
        { oyun: "Blood Strike", desc: { en: "Legend rank, Competitive coordination", tr: "Efsane rütbe, Rekabetçi koordinasyon" }, theme: "bs-theme" }
    ]
};

// Yerel Değişkenler ve Veritabanı Yüklemesi
let hubDatabase = JSON.parse(localStorage.getItem("kinetic_hub_db")) || defaultDatabase;
let officialStaff = JSON.parse(localStorage.getItem("kineticStaffDB")) || ["owmanxx", "neural_forge.", "someoneelsexd"];
let currentLang = localStorage.getItem("preferredLang") || "en";
let isLoggedInAdmin = localStorage.getItem("kinetic_admin_session") === "true";

// HTML Eleman Seçicileri
const openAdminBtn = document.getElementById("openAdminLoginBtn");
const submitAdminBtn = document.getElementById("submitAdminLoginBtn");
const toggleAdminPass = document.getElementById("toggleAdminPass");
const savePricesBtn = document.getElementById("savePricesBtn");
const addTournamentBtn = document.getElementById("addTournamentBtn");
const addUpdateBtn = document.getElementById("addUpdateBtn");
const addRecruitmentBtn = document.getElementById("addRecruitmentBtn");
const addStaffBtn = document.getElementById("addStaffBtn");
const exportDbBtn = document.getElementById("exportDbBtn");
const importDbBtn = document.getElementById("importDbBtn");
const importDbFile = document.getElementById("importDbFile");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");

/* ==========================================================================
   2. GITHUB'DAN database.json VERİSİNİ ÇEKME
   ========================================================================== */
async function fetchLatestDataFromGithub() {
    try {
        const response = await fetch('database.json?t=' + new Date().getTime());
        if (response.ok) {
            hubDatabase = await response.json();
            localStorage.setItem("kinetic_hub_db", JSON.stringify(hubDatabase));
            console.log("Database GitHub'dan başarıyla senkronize edildi!");
        }
    } catch (e) {
        console.log("GitHub database.json çekilemedi, yerel önbellek kullanılıyor.");
    }
    renderServices(""); // Updates/Haberler Grid
    renderActiveTournaments();
    renderActiveRecruitments();
}

/* ==========================================================================
   3. TOAST BİLDİRİM SİSTEMİ
   ========================================================================== */
function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    let icon = type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle";
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 400); }, 3500);
}

/* ==========================================================================
   4. DETAYLI RENDER SİSTEMLERİ (GÜNCELLEMELER, TURNUVALAR, KADRO BAŞVURULARI)
   ========================================================================== */
// Duyurular ve Güncellemeler (Blog Kartları)
function renderServices(searchQuery = "") {
    const grid = document.getElementById("updatesGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    if (!hubDatabase.updates || hubDatabase.updates.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); text-align:center; width:100%; grid-column: 1/-1;">No updates found.</p>`;
        return;
    }

    hubDatabase.updates.forEach((item, index) => {
        const titleText = item.baslik[currentLang] || item.baslik.en || item.baslik;
        const descText = item.desc[currentLang] || item.desc.en || item.desc;
        const iconClass = item.icon || "fas fa-bullhorn";

        if (titleText.toLowerCase().includes(searchQuery.toLowerCase()) || descText.toLowerCase().includes(searchQuery.toLowerCase())) {
            const card = document.createElement("div");
            card.className = "service-card";
            card.innerHTML = `
                <div class="card-icon"><i class="${iconClass}"></i></div>
                <h3>${titleText}</h3>
                <p>${descText}</p>
            `;
            grid.appendChild(card);
        }
    });
}

// Canlı Turnuvaları Ekrana Basma
function renderActiveTournaments() {
    const grid = document.getElementById("activeTournamentsGrid");
    const adminList = document.getElementById("adminTournamentList");
    if (grid) grid.innerHTML = "";
    if (adminList) adminList.innerHTML = "";

    if ((!hubDatabase.tournaments || hubDatabase.tournaments.length === 0) && grid) {
        grid.innerHTML = `<p style="color: var(--text-muted); font-size:0.95rem; grid-column: 1/-1;">No active tournaments currently. Stay tuned!</p>`;
    }

    if (hubDatabase.tournaments) {
        hubDatabase.tournaments.forEach((t, index) => {
            if (grid) {
                grid.innerHTML += `
                    <div class="es-roster-card bs-theme" style="border-color: var(--purple-glow);">
                        <div class="es-roster-bg" style="background: var(--purple-glow);"></div>
                        <div class="es-roster-content">
                            <div class="es-roster-head">
                                <h3>${t.oyun ? t.oyun.toUpperCase() : "GAME"}</h3>
                                <span class="pulse-tag" style="background:rgba(168,85,247,0.15); color:var(--purple-hover); border-color:rgba(168,85,247,0.3);">ACTIVE</span>
                            </div>
                            <h4 style="color:white; font-size:1.2rem; margin-bottom: 5px;">${t.baslik || "Tournament"}</h4>
                            <p style="margin-bottom: 1.5rem; font-size:0.9rem;">🎁 <b>Reward:</b> ${t.odul || "TBD"} <br> 📅 <b>Date:</b> ${t.tarih || "TBD"}</p>
                            <button class="es-action-btn" onclick="openEsportsModal('${t.baslik || "Tournament"}')">
                                <span data-i18n="es_btn_apply">Apply Now</span> <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                `;
            }

            if (adminList) {
                adminList.innerHTML += `
                    <li class="staff-list-item">
                        <span><b>[${t.oyun.toUpperCase()}]</b> ${t.baslik}</span>
                        <button class="remove-product-btn" onclick="deleteTournament(${index})"><i class="fas fa-trash"></i></button>
                    </li>
                `;
            }
        });
    }
}

// Canlı Kadro Alımlarını Ekrana Basma
function renderActiveRecruitments() {
    const grid = document.getElementById("activeRecruitmentsGrid");
    const adminList = document.getElementById("adminRecruitmentList");
    if (grid) grid.innerHTML = "";
    if (adminList) adminList.innerHTML = "";

    if ((!hubDatabase.recruitments || hubDatabase.recruitments.length === 0) && grid) {
        grid.innerHTML = `<p style="color: var(--text-muted); font-size:0.95rem;">No active recruitments currently.</p>`;
    }

    if (hubDatabase.recruitments) {
        hubDatabase.recruitments.forEach((r, index) => {
            const descText = r.desc[currentLang] || r.desc.en || r.desc;
            if (grid) {
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
            }

            if (adminList) {
                adminList.innerHTML += `
                    <li class="staff-list-item">
                        <span><b>[${r.oyun.toUpperCase()}]</b> alımı</span>
                        <button class="remove-product-btn" onclick="deleteRecruitment(${index})"><i class="fas fa-trash"></i></button>
                    </li>
                `;
            }
        });
    }
}

/* ==========================================================================
   5. ÇEVİRİ VE DİL DESTEĞİ
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
}

/* ==========================================================================
   6. UI ETKİLEŞİMLERİ VE GENEL OLAYLAR
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

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderServices(document.getElementById("searchInput") ? document.getElementById("searchInput").value : "");
        });
    });

    const searchInput = document.getElementById("searchInput");
    if(searchInput) { searchInput.addEventListener("input", (e) => renderServices(e.target.value)); }

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

    window.addEventListener("click", (e) => { 
        if (e.target.classList.contains("modal-overlay")) {
            if (e.target.id !== "adminDashboard") {
                e.target.classList.remove("active"); 
            }
        } 
    });
});

/* ==========================================================================
   7. MODALLAR VE GLOBAL PENCERE BAĞLANTILARI
   ========================================================================== */
document.querySelectorAll(".close-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => btn.closest(".modal-overlay").classList.remove("active"));
});

window.openEsportsModal = function(gameName) {
    const modal = document.getElementById("esportsApplyModal");
    const title = document.getElementById("esModalGameTitle");
    if(modal && title) {
        title.innerHTML = `TK Esports - <span style="color:var(--purple-hover);">${gameName}</span>`;
        modal.classList.add("active");
    }
};

if (openAdminBtn) { 
    openAdminBtn.addEventListener("click", () => {
        if (isLoggedInAdmin) {
            openAdminDashboard();
        } else {
            document.getElementById("adminAuthModal").classList.add("active"); 
        }
    }); 
}

if (toggleAdminPass) {
    toggleAdminPass.addEventListener("click", () => {
        const inp = document.getElementById("adminPassInput");
        const icon = document.querySelector("#toggleAdminPass i");
        if (inp.type === "password") { inp.type = "text"; icon.className = "far fa-eye-slash"; } 
        else { inp.type = "password"; icon.className = "far fa-eye"; }
    });
}

// Şifreli Giriş (Manuel şifre onayı)
if (submitAdminBtn) {
    submitAdminBtn.addEventListener("click", () => {
        const pass = document.getElementById("adminPassInput").value;
        if (verifyAdminPassword(pass)) {
            isLoggedInAdmin = true;
            localStorage.setItem("kinetic_admin_session", "true");
            document.getElementById("adminAuthModal").classList.remove("active");
            document.getElementById("adminPassInput").value = "";
            showToast("Access Granted! Welcome to Command Center.", "success");
            openAdminDashboard();
        } else {
            showToast("Authentication Failed! Invalid Security Key.", "error");
        }
    });
}

// Oturum Kapat (Logout)
if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener("click", () => {
        isLoggedInAdmin = false;
        localStorage.removeItem("kinetic_admin_session");
        showToast("Oturum başarıyla kapatıldı.", "success");
        document.getElementById("adminDashboard").classList.remove("active");
    });
}

/* ==========================================================================
   8. ADMIN PANELİ YÖNETİM İŞLEVLERİ (LOCAL STORAGE VERİ DEĞİŞİKLİKLERİ)
   ========================================================================= */
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
    // Toplam İstatistikler
    document.getElementById("statTotalTournaments").textContent = hubDatabase.tournaments ? hubDatabase.tournaments.length : 0;
    document.getElementById("statTotalUpdates").textContent = hubDatabase.updates ? hubDatabase.updates.length : 0;
    document.getElementById("statTotalRecruitments").textContent = hubDatabase.recruitments ? hubDatabase.recruitments.length : 0;
    
    renderActiveTournaments();
    renderActiveRecruitments();
    loadAdminUpdates();
    loadStaffList();
}

// 8.1 Turnuva Ekleme/Silme
if (addTournamentBtn) {
    addTournamentBtn.addEventListener("click", () => {
        const oyun = document.getElementById("tourOyun").value.trim();
        const baslik = document.getElementById("tourBaslik").value.trim();
        const odul = document.getElementById("tourOdul").value.trim();
        const tarih = document.getElementById("tourTarih").value;

        if (!oyun || !baslik || !odul || !tarih) {
            return showToast("Please fill all tournament fields!", "error");
        }

        if(!hubDatabase.tournaments) hubDatabase.tournaments = [];
        hubDatabase.tournaments.push({ oyun, baslik, odul, tarih });
        
        localStorage.setItem("kinetic_hub_db", JSON.stringify(hubDatabase));
        showToast("Tournament officially launched! Remember to export JSON.", "success");
        
        document.getElementById("tourOyun").value = "";
        document.getElementById("tourBaslik").value = "";
        document.getElementById("tourOdul").value = "";
        document.getElementById("tourTarih").value = "";
        
        refreshAdminDashboardData();
    });
}

window.deleteTournament = function(index) {
    if (confirm("Are you sure you want to end and delete this tournament?")) {
        hubDatabase.tournaments.splice(index, 1);
        localStorage.setItem("kinetic_hub_db", JSON.stringify(hubDatabase));
        showToast("Tournament closed locally.", "info");
        refreshAdminDashboardData();
    }
};

// 8.2 Güncelleme/Duyuru Ekleme/Silme
if (addUpdateBtn) {
    addUpdateBtn.addEventListener("click", () => {
        const baslikEn = document.getElementById("upBaslikEn").value.trim();
        const baslikTr = document.getElementById("upBaslikTr").value.trim();
        const descEn = document.getElementById("upDescEn").value.trim();
        const descTr = document.getElementById("upDescTr").value.trim();
        const icon = document.getElementById("upIcon").value.trim() || "fas fa-bullhorn";

        if (!baslikEn || !baslikTr || !descEn || !descTr) {
            return showToast("Please fill all update fields!", "error");
        }

        if(!hubDatabase.updates) hubDatabase.updates = [];
        hubDatabase.updates.push({
            baslik: { en: baslikEn, tr: baslikTr },
            desc: { en: descEn, tr: descTr },
            icon: icon
        });

        localStorage.setItem("kinetic_hub_db", JSON.stringify(hubDatabase));
        showToast("Update published locally! Remember to export JSON.", "success");
        
        document.getElementById("upBaslikEn").value = "";
        document.getElementById("upBaslikTr").value = "";
        document.getElementById("upDescEn").value = "";
        document.getElementById("upDescTr").value = "";
        document.getElementById("upIcon").value = "";

        refreshAdminDashboardData();
    });
}

function loadAdminUpdates() {
    const ul = document.getElementById("adminUpdateList");
    if(!ul) return;
    ul.innerHTML = "";
    if (hubDatabase.updates) {
        hubDatabase.updates.forEach((item, index) => {
            const title = item.baslik.en || item.baslik;
            ul.innerHTML += `<li class="staff-list-item"><span>${title}</span><button class="remove-product-btn" onclick="deleteUpdate(${index})"><i class="fas fa-trash"></i></button></li>`;
        });
    }
}

window.deleteUpdate = function(index) {
    if(confirm("Are you sure you want to delete this update?")) {
        hubDatabase.updates.splice(index, 1);
        localStorage.setItem("kinetic_hub_db", JSON.stringify(hubDatabase));
        showToast("Update removed locally.", "info");
        refreshAdminDashboardData();
    }
};

// 8.3 Kadro Başvurusu Açma/Kapatma
if (addRecruitmentBtn) {
    addRecruitmentBtn.addEventListener("click", () => {
        const oyun = document.getElementById("recOyun").value.trim();
        const descEn = document.getElementById("recDescEn").value.trim();
        const descTr = document.getElementById("recDescTr").value.trim();
        const theme = document.getElementById("recTheme").value;

        if (!oyun || !descEn || !descTr) {
            return showToast("Please fill all recruitment fields!", "error");
        }

        if(!hubDatabase.recruitments) hubDatabase.recruitments = [];
        hubDatabase.recruitments.push({
            oyun: oyun,
            desc: { en: descEn, tr: descTr },
            theme: theme
        });

        localStorage.setItem("kinetic_hub_db", JSON.stringify(hubDatabase));
        showToast("Recruitment roster launched locally!", "success");
        
        document.getElementById("recOyun").value = "";
        document.getElementById("recDescEn").value = "";
        document.getElementById("recDescTr").value = "";

        refreshAdminDashboardData();
    });
}

window.deleteRecruitment = function(index) {
    if (confirm("Are you sure you want to close this recruitment?")) {
        hubDatabase.recruitments.splice(index, 1);
        localStorage.setItem("kinetic_hub_db", JSON.stringify(hubDatabase));
        showToast("Recruitment closed locally.", "info");
        refreshAdminDashboardData();
    }
};

// 8.4 Yetkili Yönetimi (Local Storage)
function loadStaffList() {
    const ul = document.getElementById("staffList");
    if(!ul) return;
    ul.innerHTML = "";
    officialStaff.forEach((username, index) => {
        ul.innerHTML += `<li class="staff-list-item"><span>@${username}</span><button class="remove-staff-btn" onclick="removeStaff(${index})"><i class="fas fa-user-minus"></i></button></li>`;
    });
}

if(addStaffBtn) {
    addStaffBtn.addEventListener("click", () => {
        const input = document.getElementById("newStaffInput");
        const val = input.value.trim().toLowerCase();
        if (!val) return;
        if (officialStaff.includes(val)) return showToast("User is already in the registry.", "error");

        officialStaff.push(val);
        localStorage.setItem("kineticStaffDB", JSON.stringify(officialStaff));
        input.value = "";
        refreshAdminDashboardData();
        showToast("Staff registry updated locally.", "success");
    });
}

window.removeStaff = function(index) {
    if (confirm("Revoke this staff member's verification?")) {
        officialStaff.splice(index, 1);
        localStorage.setItem("kineticStaffDB", JSON.stringify(officialStaff));
        refreshAdminDashboardData();
        showToast("Staff access revoked locally.", "info");
    }
};

// 8.5 Export Database (Yedek Alma)
if(exportDbBtn) {
    exportDbBtn.addEventListener("click", () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(hubDatabase, null, 2));
        const dlAnchorElem = document.createElement('a');
        dlAnchorElem.setAttribute("href", dataStr); dlAnchorElem.setAttribute("download", "database.json");
        document.body.appendChild(dlAnchorElem); dlAnchorElem.click(); dlAnchorElem.remove();
        showToast("database.json successfully generated! Push to GitHub to apply.", "success");
    });
}

// Import Database (Yedek Geri Yükleme)
if(importDbBtn && importDbFile) {
    importDbBtn.addEventListener("click", () => importDbFile.click());
    importDbFile.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const importedData = JSON.parse(evt.target.result);
                if (typeof importedData === "object" && importedData !== null) {
                    hubDatabase = importedData;
                    localStorage.setItem("kinetic_hub_db", JSON.stringify(hubDatabase));
                    renderServices("");
                    refreshAdminDashboardData();
                    showToast("Database successfully restored locally!", "success");
                } else { throw new Error("Invalid format"); }
            } catch (error) {
                showToast("Failed to import! The JSON file is corrupted or invalid.", "error");
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    });
}

// Sayfa geçişi
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
}

// Yorumları yükle
function loadComments() {
  const saved = localStorage.getItem("comments");
  if (saved) {
    const comments = JSON.parse(saved);
    const list = document.getElementById("commentList");
    list.innerHTML = "";
    comments.forEach(c => {
      const li = document.createElement("li");
      li.textContent = c;
      list.appendChild(li);
    });
  }
}

// Yorum ekle
function addComment() {
  const input = document.getElementById("commentInput");
  const comment = input.value.trim();
  if (comment) {
    const list = document.getElementById("commentList");
    const li = document.createElement("li");
    li.textContent = comment;
    list.appendChild(li);

    // LocalStorage’a kaydet
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));

    input.value = "";
  }
}

// Yorumları temizle
function clearComments() {
  document.getElementById("commentList").innerHTML = "";
  localStorage.removeItem("comments");
}

// Admin key kontrolü
function checkAdminKey() {
  const key = document.getElementById("adminKey").value;
  if (key === "123Ee123.") {
    document.getElementById("adminMessage").textContent = "Access granted![DEMO YOU CANT USE WEBHOOKS]";
    document.getElementById("adminContent").style.display = "block";
  } else {
    document.getElementById("adminMessage").textContent = "Access denied!";
  }
}

// Admin fonksiyonları
function addAnnouncement() {
  const board = document.getElementById("announcementBoard");
  const div = document.createElement("div");
  div.textContent = "📢 Yeni duyuru eklendi!";
  board.appendChild(div);
}

function addUser() {
  const board = document.getElementById("userBoard");
  const div = document.createElement("div");
  div.textContent = "👤 Yeni kullanıcı eklendi!";
  board.appendChild(div);
}

function addContent() {
  const board = document.getElementById("specialContentBoard");
  const div = document.createElement("div");
  div.textContent = "⭐ Yeni özel içerik eklendi!";
  board.appendChild(div);
}

// Mağaza yönlendirme
function buyProduct(product) {
  let url = "";
  if (product === "whitepaper") {
    url = "https://example.com/whitepaper"; // kendi linkini koy
  } else if (product === "documentary") {
    url = "https://example.com/documentary"; // kendi linkini koy
  } else if (product === "tools") {
    url = "https://example.com/tools"; // kendi linkini koy
  }
  if (url) {
    window.location.href = url;
  }
}

// Discord mesaj gönderme
document.getElementById("sendMessageBtn").addEventListener("click", () => {
  const message = document.getElementById("messageInput").value.trim();
  if (message) {
    fetch("https://truekineticpy-production.up.railway.app/send_webhook", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({message: message})
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 200) {
        alert("Mesaj Discord’a gönderildi!");
        document.getElementById("messageInput").value = "";
      } else {
        alert("Gönderim başarısız. Kod: " + data.status);
      }
    })
    .catch(err => {
      console.error(err);
      alert("Bir hata oluştu.");
    });
  } else {
    alert("Lütfen bir mesaj yaz.");
  }
});

// Sayfa açıldığında yorumları yükle
window.onload = loadComments;

// Tema toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// Sayfa açıldığında kaydedilen tema yükle
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(savedTheme);
  loadComments(); // yorumları da yüklemeyi unutma
};

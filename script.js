// Canvas particle background
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 1.2,
    dy: (Math.random() - 0.5) * 1.2,
    color: Math.random() > 0.5 ? "#00c8ff" : "#bb86fc"
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(draw);
}
draw();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

fetch("https://discord.com/api/guilds/1482670220765298800/widget.json")
  .then(res => res.json())
  .then(data => {
    console.log("Sunucu adı:", data.name);
    console.log("Online üye sayısı:", data.presence_count);
    console.log("Davet linki:", data.instant_invite);
  });


// 1 ay = 30 gün = 30 * 24 * 60 * 60 saniye
let totalTime = 30 * 24 * 60 * 60; 

// Daha önce kayıtlı bitiş zamanı var mı?
let endTime = localStorage.getItem("endTime");
if (!endTime) {
  endTime = Date.now() + totalTime * 1000;
  localStorage.setItem("endTime", endTime);
}

function updateTimer() {
  let remaining = Math.floor((endTime - Date.now()) / 1000);
  if (remaining <= 0) {
    document.getElementById("timer").innerText = "Transformation complete!";
    localStorage.removeItem("endTime");
    clearInterval(interval);
  } else {
    let days = Math.floor(remaining / (60 * 60 * 24));
    let hours = Math.floor((remaining % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((remaining % (60 * 60)) / 60);
    let seconds = remaining % 60;
    document.getElementById("timer").innerText =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s remaining";
  }
}

let interval = setInterval(updateTimer, 1000);
updateTimer();

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// FAQ accordion
const faqItems = document.querySelectorAll("#faq p");
faqItems.forEach(item => {
  if (item.innerHTML.includes("→")) {
    const [question, answer] = item.innerHTML.split("→");
    item.innerHTML = `<strong>${question.trim()}</strong>`;
    const answerEl = document.createElement("div");
    answerEl.textContent = answer.trim();
    answerEl.style.display = "none";
    answerEl.style.marginTop = "5px";
    answerEl.style.color = "#94a3b8";
    item.appendChild(answerEl);

    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      answerEl.style.display = answerEl.style.display === "block" ? "none" : "block";
    });
  }
});

// Kart hover animasyonu (extra efekt)
document.querySelectorAll(".plan-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  });
});

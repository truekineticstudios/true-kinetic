// Efektli buton animasyonu
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.boxShadow = '0 0 15px #ff0000';
  });
  button.addEventListener('mouseout', () => {
    button.style.boxShadow = 'none';
  });
});

// Kod–link eşleştirmesi (codes.js ayrı dosyada)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("verifyBtn");
  if (btn) {
    btn.addEventListener("click", checkCode);
  }
});

function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (codes[code]) {
    resultDiv.innerHTML = `✅ Verified! <a href="${codes[code]}" target="_blank">Download file</a>`;
  } else {
    resultDiv.innerHTML = "❌ Invalid code, please try again!";
  }
}


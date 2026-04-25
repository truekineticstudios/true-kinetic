// Efektli buton animasyonu
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.boxShadow = '0 0 15px #ff0000';
  });
  button.addEventListener('mouseout', () => {
    button.style.boxShadow = 'none';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("verifyBtn");
  btn.addEventListener("click", checkCode);
});

function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (codes[code]) {
    resultDiv.innerHTML = `✅ VERIFIED! <a href="${codes[code]}" target="_blank">Download File</a>`;
  } else {
    resultDiv.innerHTML = "❌ Invalid code, please try again!";
  }
}


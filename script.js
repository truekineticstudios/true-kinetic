// Efektli buton animasyonu
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.boxShadow = '0 0 15px #ff0000';
  });
  button.addEventListener('mouseout', () => {
    button.style.boxShadow = 'none';
  });
});

const codes = {
  "ANTICHEAT-001": "https://dosya.co/93ydztbsok23/Copilot_20260418_203654.png.html"
};

function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const resultDiv = document.getElementById("result");

  if(codes[code]) {
    resultDiv.innerHTML = `✅ VERIFED! <a href="${codes[code]}" target="_blank">Dosyayı indir</a>`;
  } else {
    resultDiv.innerHTML = "❌ Your Code is Wrong, Please Try Again!";
  }
}

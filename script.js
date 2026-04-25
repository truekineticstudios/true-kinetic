// Efektli buton animasyonu
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.boxShadow = '0 0 15px #ff0000';
  });
  button.addEventListener('mouseout', () => {
    button.style.boxShadow = 'none';
  });
});

async function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const res = await fetch("codes.json");
  const codes = await res.json();

  if(codes[code]) {
    document.getElementById("result").innerHTML = 
      `✅ VERIFED! <a href="${codes[code]}" target="_blank">Download File</a>`;
  } else {
    document.getElementById("result").innerText = "❌ WRONG CODE!";
  }
}

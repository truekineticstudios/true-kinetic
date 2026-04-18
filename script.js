// Efektli buton animasyonu
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.boxShadow = '0 0 15px #ff0000';
  });
  button.addEventListener('mouseout', () => {
    button.style.boxShadow = 'none';
  });
});

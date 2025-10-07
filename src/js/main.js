//lampe bug home page
const light = document.querySelector(".home-light");

function randomFlicker() {
  const duration = Math.random() * 2 + 1; // entre 1 et 3 secondes
  light.style.animation = `flicker ${duration}s infinite`;
}

// relance avec des durées aléatoires régulièrement
setInterval(randomFlicker, 3000);

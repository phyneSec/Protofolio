const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const portfolio = document.getElementById("portfolio");
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  intro.classList.remove("active");
  portfolio.classList.add("active");
  bgMusic.play();
});

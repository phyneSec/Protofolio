const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  main.classList.remove("hidden");
  music.play();
});

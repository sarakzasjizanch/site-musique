// bouton burger
let burger = document.getElementById("burger");

// menu
let menu = document.getElementById("menu");

// clic → ouvrir/fermer
burger.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
});

// bouton dark mode
let btn = document.getElementById("toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});





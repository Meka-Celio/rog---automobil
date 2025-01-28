// -----------------------------------
let imgCars = document.querySelectorAll("ul li img");
const car = document.querySelector(".image img");
const circle = document.querySelector(".circle");

let couleurs = ["#ce092b", "#324774", "#efe67d", "#b9b9b9"];

function changeSource(source) {
  car.src = source;
}

function changeColorCircle(html, color) {
  html.style.background = color;
}

for (let i = 0; i < imgCars.length; i++) {
  imgCars[i].addEventListener("click", () => {
    changeSource(imgCars[i].src);
    changeColorCircle(circle, couleurs[i]);
  });
}

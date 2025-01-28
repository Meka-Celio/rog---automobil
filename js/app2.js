// DONNEES
// Texte en couleur
const text = document.querySelector(".main .text h2 span"); // color

// Le bouton
const btn = document.querySelector(".main .text a"); // background

// Les codes couleurs
let colors = ["#ce092b", "#425a8f", "#ede57c", "rgb(174, 170, 170)"];

// Les images des voitures
let imgCars = document.querySelectorAll(".catalog li img");

//  Les voitures
let cars = document.querySelectorAll(".catalog li");

// L'image du bloc de la voiture
const voiture = document.querySelector(".cars");

// Le circle en arriere plan
const circle = document.querySelector(".circle");

let compteur = 0;

/**
 *
 * @param {*} source
 * @param {*} html
 */
function srcImage(source, html) {
  html.src = source;
}
/**
 *
 * @param {*} color
 * @param {*} html
 */
function changeBackgroundColor(color, html) {
  html.style.background = color;
}
/**
 *
 * @param {*} color
 * @param {*} html
 */
function changeColor(color, html) {
  html.style.color = color;
}

setInterval(() => {
  setTimeout(() => {
    let currentCar = cars[compteur];
    currentCar.classList.add("active");
    for (let index = 0; index < cars.length; index++) {
      if (
        cars[index].classList.contains("active") &&
        cars[index] != currentCar
      ) {
        cars[index].classList.remove("active");
      }
    }
    srcImage(imgCars[compteur].src, voiture);
    changeBackgroundColor(colors[compteur], circle);
    changeBackgroundColor(colors[compteur], btn);
    changeColor(colors[compteur], text);

    compteur++;
    if (compteur == cars.length) {
      compteur = 0;
    }

    // currentCar.classList.remove("active");
  }, 1000);
}, 3000);

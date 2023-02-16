// DONNEES
let colors = ["#ce092b", "#425a8f", "#ede57c", "#ebebeb"];
let imgCars = document.querySelectorAll(".catalog li img");
const voiture = document.querySelector(".cars");
const circle = document.querySelector(".circle");
// console.log(voiture.getAttribute("src"));

// FONCTIONS
/**
 *
 *
 * @param {*} source
 */
function imgSlider(source) {
  voiture.src = source;
}

/**
 *
 *
 * @param {*} color
 */
function changeColorCircle(color) {
  circle.style.background = color;
}

// MAIN
for (let i = 0; i < imgCars.length; i++) {
  imgCars[i].addEventListener("click", () => {
    imgSlider(imgCars[i].src);
    changeColorCircle(colors[i]);
  });
}

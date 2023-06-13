// const mainBtn = document.querySelectorAll(".main-btn")
const mainBtns = document.querySelectorAll(".main-btn")
const mainContainers = document.querySelectorAll(".main-container")

// mainBtn.addEventListener("click", onClick)
// mainBtns.addEventListener("click", onClick)

let nbClick = 0

// BAISSE L'OPACITE A CHAQUE CLIQUE
// let fullOpacity = 1
// function onClick (event) {

//     nbClick++
//     if(nbClick > 5) nbClick = 0
//     event.target.style.opacity = fullOpacity - 0.2 * nbClick
// }

// CHANGE LA COULEUR DE FOND A CHAQUE CLIQUE
// const colors = ['#00eabf', '#011627', '#e73c7e', '#ee7752']

// function onClick() {
//     if (nbClick >= colors.length) nbClick = 0
//     mainContainer.style.backgroundColor = colors[nbClick]
//     nbClick++
// }

// CHANGE LA COULEUR DE FOND EN FONCTION DU BOUTON CLIQUE
// const colors = ["red", "green", "blue"]

// for(let i = 0; i < mainBtns.length; i++) {
//     mainBtns[i].addEventListener("click", onClick)  
// }

// function onClick(event) {
//  mainContainer.style.backgroundColor = event.target.getAttribute("data-color")
// }

// CHANGE LA COULEUR DE FOND EN FONCTION DE L'IMPUT
const input = document.querySelector("input")

mainBtns[3].addEventListener("click", onClick)

function onClick() {
    mainContainers[1].style.backgroundColor = input.value
}
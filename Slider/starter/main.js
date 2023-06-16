const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]

const leftBTN = document.querySelector(".slider-btn-left")
const rightBTN = document.querySelector(".slider-btn-right")
let slideIndex = 0


leftBTN.addEventListener('click', onClickBtn)
rightBTN.addEventListener('click', onClickBtn)

let onClickBtn = (e) => {

}
const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
];

const btns = document.querySelectorAll(".slider-btn");
const imgs = document.querySelectorAll(".slider-img");
const dots = document.querySelectorAll(".dot");

let slideIndex;

init();

btns.forEach((el, index) => {
    el.maNouvellePropriete = 'nouvellePropriete_' + index + '!'
    el.leftOrRight = index;
    el.addEventListener("click", onClickBtn);
    // e.addEventListener("mousedown", onDownBtn);
    // e.addEventListener("mouseup", onUpBtn);
});

dots.forEach((dot, ind) => {
    dot.indexPosition = ind
    dot.addEventListener('click', onClickDot)
})

function onClickDot(e) {
    slideIndex = e.currentTarget.indexPosition
    updateCurrentImage(slideIndex)
}

function onDownBtn(e) {
    console.log('down')
}

function onUpBtn(e) {
    console.log('up')
}

function onClickBtn(e) {
    if (e.currentTarget.leftOrRight === 0) {
        slideIndex--;
    } else {
        slideIndex++;
    }

    updateCurrentImage(slideIndex)
}

function updateCurrentImage(slideI) {
    btns[0].style.opacity = btns[1].style.opacity = 1
    btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

    if (slideI <= 0) {
        slideI = 0;
        btns[0].style.opacity = 0.3
        btns[0].style.pointerEvents = 'none'
    } else if (slideI >= imgs.length - 1) {
        slideI = imgs.length - 1;
        btns[1].style.opacity = 0.3
        btns[1].style.pointerEvents = 'none'
    }

    displayImages(slideI)
}

function displayImages(slideI) {
    imgs.forEach((img, indexImg) => {
        img.style.transition = 'transform 3s';
        img.style.transform = `translateX(${(indexImg - slideI) * 100}%)`
    })
}

function init() {
    slideIndex = 0;
    btns[0].style.opacity = 0.5
    btns[0].style.pointerEvents = 'none'
    imgs.forEach((img, indexImg) => {
        img.style.transform = `translateX(${(indexImg - slideIndex) * 100}%)`
    })
}
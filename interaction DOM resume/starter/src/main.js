

// EXO 1 //

const btns1 = document.querySelectorAll(".btn-1")
const divToColor1 = document.querySelector(".div-to-color-1")


for(let i = 0; i < btns1.length; i++) {
    btns1[i].addEventListener("click", onClick)  
}

function onClick(event) {
 divToColor1.style.backgroundColor = event.target.textContent
}

// EXO 2 //

const input2 = document.querySelector(".input-3")
const textToDisplay2 = document.querySelector(".text-to-display-3") 

input2.addEventListener('input', getValue)

const originText = textToDisplay2.textContent

function getValue() {
    if(!input2.value) {
        textToDisplay2.textContent = originText
    } else {
        textToDisplay2.textContent = input2.value
    }
}

// EXO 3 //


// EXO 4 //

const input4 = document.querySelector(".input-2")
const textToDisplay4 = document.querySelector(".text-to-display-2")
const form4 = document.querySelector(".form-2")

form4.addEventListener("submit", onSubmit)  

function onSubmit(event) {
    event.preventDefault()
    textToDisplay4.textContent = input4.value
}

// EXO 5 //

const output = document.querySelector(".text-to-display-5")
const range = document.querySelector(".input-5")

range.addEventListener("input",getValue5)

function getValue5(e) {
    output.textContent = e.target.value
}

// EXO 6 //

const textToDisplay6 = document.querySelector(".text-to-display-6")
const select = document.querySelector(".select-6")

select.addEventListener("change", getProgLang)

function getProgLang() {
    textToDisplay6.textContent=select.options[select.selectedIndex].text
}

// EXO 7 //

const divToColor7 = document.querySelector(".div-to-color-7")
const inputColor = document.querySelector(".input-7")

inputColor.addEventListener("input", getColor)

function getColor() {
    divToColor7.style.backgroundColor = inputColor.value
}

// EXO 8 //

const btns8 = document.querySelectorAll(".btn-8")
const divToColor8 = document.querySelector(".div-to-color-8")


for(let i = 0; i < btns8.length; i++) {
    btns8[i].addEventListener("click", onClick8)  
}

function onClick8(event) {
 divToColor8.style.backgroundColor = event.target.getAttribute("data-color")
}

// EXO 9 //

const textToDisplay9 = document.querySelector(".text-to-display-9")
let checkboxes = document.querySelectorAll(".checkbox")

const originText2 = 


checkboxes[0].addEventListener("click", onSelect9)
checkboxes[1].addEventListener("click", onSelect9)

function onSelect9() {   
    let interest = []
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            interest.push(checkboxes[i].value)
        }
    }
    
    textToDisplay9.textContent = ''
    interest.forEach(e => {
    textToDisplay9.textContent += e + ', '
    })
}
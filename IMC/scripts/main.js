// poids / taille^2

const mainBtn = document.querySelector(".main-btn")
const weight = document.querySelector(".weight")
const height = document.querySelector(".height")
const result = document.querySelector(".result")
const comment = document.querySelector(".comment")

const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
  ]

mainBtn.addEventListener("click", onClick)

function onClick(event) {
    event.preventDefault()
    result.textContent = 0
    personIMC = (weight.value / ((height.value/100) ** 2))
    result.textContent = personIMC.toFixed(1)

    for(i = 0; i < BMIData.length; i++) {
        if(personIMC > BMIData[i].range[0] && personIMC <= BMIData[i].range[1] || personIMC > BMIData[BMIData.length -1].range) {
            
            comment.textContent = BMIData[i].name
        }
    
    }
    
}


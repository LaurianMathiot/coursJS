// IMC = poids / taille^2

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

// function onClick(event) {
//     event.preventDefault() // Empeche la page de se recharger
//     const wValue = weight.value
//     const hValue = height.value

//     result.textContent = 0

//     personIMC = (wValue / ((hValue/100) ** 2))
//     result.textContent = personIMC.toFixed(1)


//     for(i = 0; i < BMIData.length; i++) {
//         if(personIMC > BMIData[i].range[0] && personIMC <= BMIData[i].range[1] || personIMC >= BMIData[BMIData.length -1].range) {
            
//             comment.textContent = BMIData[i].name
//             result.style.color = BMIData[i].color 
//             break
            
//         }   
//     }
// }

// ---------------------- Correction ---------------------- //


function onClick(event) {
    event.preventDefault()
    const wValue = weight.value
    const hValue = height.value

    if(!wValue || !hValue || wValue <= 0 || hValue <= 0) {
        handleError()
        return
    }

    const bmi = (wValue / Math.pow((hValue / 100), 2)).toFixed(1)
    displayResult(bmi)
}

function displayResult(val) {
    let rank

    for(let i = 0; i < BMIData.length; i++){
        if(val >= BMIData[i].range[0] && val < BMIData[i].range[1]){
            rank = BMIData[i]
            break
        } else if (typeof BMIData[i].range === 'number' && val >= BMIData[i].range) {
            rank = BMIData[i]
        }
    }

    result.textContent = val
    result.style.color = rank.color
    comment.textContent = rank.name
}

function handleError() {
    bmiValue.textContent = "Echec"
    comment.textContent = "Remplissez correctement le formulaire"
}
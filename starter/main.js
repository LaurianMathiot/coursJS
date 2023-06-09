// document.querySelector <- trouvez qqc 

const myText = document.querySelector(".main-container")

const firstPart = `Je m'appelle`
const firstname = `Laurian`
const age = 31
const brotherAge = 35

let result = `${firstPart} ${firstname} et j'ai ${age} ans.`
    // ou let result = firstPart + ` ` + firstname

const myArray = ['Paul', 'Pierre', 'Nathalie', 'Mathilde']
    // Afficher le dernier élément du tableau : myText.textContent = myArray[myArray.length - 1]

const identity_1 = {
    firstname: 'Laurian',
    lastname: 'Mathiot',
    age: 35,
    weight: 74,
    town: {name: 'Bordeaux', population :2000000},
    size: 1.70
}

const identity_2 = {
    firstname: 'Joe',
    lastname: 'Dalton',
    age: 27,
    weight: 20,
    town: {name: 'Mexico', population :10000000},
    size: 1.20
}

// let olderIdentity, youngerIdentity; 


// if (identity_1.age > identity_2.age) {
//     olderIdentity = identity_1
//     youngerIdentity = identity_2
// } else {
//     olderIdentity = identity_2
//     youngerIdentity = identity_1
    
// }

// // myText.textContent = `M. ${olderIdentity.lastname} est le plus agé car il a ${olderIdentity.age - youngerIdentity.age} ans de plus que M.${youngerIdentity.lastname}.`



// let bigCity, smallCity;

// if ((identity_1.town.population)>(identity_2.town.population)) {
//     bigCity = identity_1
//     smallCity = identity_2
// } else {
//     bigCity = identity_2
//     smallCity = identity_1
// }

// myText.textContent = `M. ${bigCity.lastname} habite ${bigCity.town.name} qui est plus grande que ${smallCity.town.name}.`

// Calcul IMC : weight / size ** 2

// identity_1.imc = identity_1.weight / (identity_1.size ** 2)
// identity_2.imc = identity_2.weight / (identity_2.size ** 2)

// let highImc, lowImc

// if (identity_1.imc > identity_2.imc) {
//     highImc = identity_1
//     lowImc = identity_2
// } else {
//     highImc = identity_2
//     lowImc = identity_1
// }

// myText.textContent = `${highImc.firstname} à l'IMC la plus élevée : ${highImc.imc}`


// function calculIMC(person) {
//     const imc = person.weight / person.size ** 2
//     return imc;
// }

const ville1 = {
    nom : 'Bordeaux',
    superficy : 100,
    population : 3,
}

const ville2 = {
    nom : 'Pessac',
    superficy : 200,
    population : 3,
}

calculdensity(ville1)
calculdensity(ville2)

let densedCity
let spreadCity

if(ville1.density > ville2.density) {
    densedCity = ville1
    spreadCity = ville2
} else {
    densedCity = ville2
    spreadCity = ville1
}

myText.textContent = `${densedCity.nom} à une plus grande densité que ${spreadCity.nom} avec ${densedCity.density}.`

function calculdensity(city) {
    let result =  Math.round(city.superficy / city.population)
    city.density = result
}
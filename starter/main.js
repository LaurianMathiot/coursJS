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
    town: 'Bordeaux',
}

const identity_2 = {
    firstname: 'Joe',
    lastname: 'Dalton',
    age: 27,
    town: 'Mexico',
}

let olderIdentity, youngerIdentity; 


if (identity_1.age > identity_2.age) {
    olderIdentity = identity_1
    youngerIdentity = identity_2
} else {
    olderIdentity = identity_2
    youngerIdentity = identity_1
    
}

myText.textContent = `M. ${olderIdentity.lastname} est le plus agé car il a ${olderIdentity.age - youngerIdentity.age} ans de plus que M.${youngerIdentity.lastname}.`
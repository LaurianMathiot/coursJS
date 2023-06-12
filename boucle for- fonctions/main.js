logMessage(`Salut`)
logMessage(`tout`)
logMessage(`le monde`)

function logMessage(arg) {
    console.log(arg)
}


// -------------------------------------------------------------------------------


let valeurRetournee = sum2args(4, 7)

valeurRetournee += ` Coucou c'est nous`

console.log(valeurRetournee)

function sum2args(arg1, arg2) {
    const result = `La somme de ${arg1} et de ${arg2} est égale à ${arg1 + arg2}.`
    return result
}


// -------------------------------------------------------------------------------


let sum = sum2args(80, 20)
let sus = sus2args(sum, 50)
let result = resultat(sus)

console.log(result)

function sum2args(sum1, sum2) {
    return sum1 + sum2
}

function sus2args(sus1, sus2) {
    return sus1 - sus2
}

function resultat(res) {
    const result = `Le résultat des 2 fonctions est ${res}`
    return result
}


// -------------------------------------------------------------------------------


for(let i = 0; i <= 10; i ++) {
        console.log(`Mon indice de boucle est ${i}`)
}

console.log(`La boucle est terminée`)


// -------------------------------------------------------------------------------


const myNumbers = [20, 40, 10, 30]

const result1 = sumElements(myNumbers)

console.log(`La somme des éléments du tableau est ${result1}`)

function sumElements(array) {
    let myResult = 0
    for(i = 0; i < array.length; i++) {
        myResult += array[i]
    }
    return myResult
}

// -------------------------------------------------------------------------------

const myNumbers2 = [30, 43, 10, 33]

const result2 = sumElements(myNumbers2)

console.log(`La somme des éléments paires du tableau est ${result2}`)

function sumElements(array) {
    let myResult2 = 0
        for(i = 0; i < array.length; i++) {
            if(array[i] %2 === 0) myResult2 += array[i]  
        }
        return myResult2
}
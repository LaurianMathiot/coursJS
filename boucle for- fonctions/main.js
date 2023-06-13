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


// -------------------------------------------------------------------------------


const myNumbers3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const result3 = sumElements(myNumbers3)

console.log(`La somme des éléments 1-2-4-5-7... du tableau est ${result3}`)

function sumElements(array) {
    let myResult3 = 0
        for(i = 0; i < array.length; i++) {
            if(i %3 !==0) myResult3 += array[i]  
        }
        return myResult3
}


// -------------------------------------------------------------------------------


let myNumbers4 = [10, 100, 80, 30, 40, 50]

let min = getMin(myNumbers4)
let max = getMax(myNumbers4)

console.log(`Le plus petit est ${min} et le plus grand est ${max}.`)


function getMin(arr) {
    let result4 = arr[0]

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < result4) result4 = arr[i]
    }

    return result4
}

function getMax(arr) {
    let result5 = arr[0]

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > result5) result5 = arr[i]
    }

    return result5
}

console.log(getNumbersSuperiorToAvg(myNumbers4))


// on calcule la moyenne
function getNumbersSuperiorToAvg(arr) {
    let myResult6 = 0
    for(i = 0; i < arr.length; i++) {
        myResult6 += arr[i]
    }

    let avg = myResult6 / arr.length 

    // on tri le tableau
    let newArr = []

    for(i = 0; i < arr.length; i++) {
        if(arr[i] > avg) {
            newArr.push(arr[i])
        }
    }

    return newArr
}


// -------------------------------------------------------------------------------

let arr5 = [`coucou`, `les`, `copains`, `de`, `la`, `piscine`]

// ajoute un dernier élément au tableau
arr5.push()

// retire le dernier élément du tableau
arr5.pop()

// retire le premier élément du tableau
arr5.shift()

// ajoute un premier élément au tableau
arr5.unshift()

console.log(arr5)


// -------------------------------------------------------------------------------


const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]


// tableau avec le nom de toutes les pizzas
console.log(pizzasNames(pizzas))

function pizzasNames(arr) {
    let names = []
    for(let i = 0; i < arr.length; i++) {
        names.push(arr[i].name)
    }
    return names
}

// tableau avec le prix moyen des pizzas
console.log(priceAvg(pizzas))

function priceAvg(arr) {
    let totalPrice = 0
    for(i = 0; i < arr.length; i++) {
        totalPrice += arr[i].price
    }

    return (totalPrice / arr.length).toFixed(2)
}

// tableau avec le nom d'une pizza et ses ingrédients
console.log(getIngredientsByPizzaName('Montagnarde', pizzas))

function getIngredientsByPizzaName(name, arr) {
    
    let targetPizza

    for(i = 0; i < arr.length; i++) {
        if (name === arr[i].name) {
            targetPizza = arr[i]
            break
        }
    }

    let ingredients = []

    if (targetPizza) {
        ingredients = targetPizza.ingredients
    }

    return ingredients
}

// tableau avec tous les ingrédients mais sans les doublons
const result6 = getAllIngredients(pizzas)
console.log(result6)

function getAllIngredients(arr) {

    let allIngredients = []

    for(i = 0; i < arr.length; i++) {
        const currentPizza = arr[i]
        for(let j = 0; j < currentPizza.ingredients.length; j++) {
            if(!allIngredients.includes(currentPizza.ingredients[j])) {
                allIngredients.push(currentPizza.ingredients[j])   
            }
        }
    }

    return allIngredients

}

// tableau avec les noms des pizzas qui ont un ingrédient spécifique

const result7 = pizzasWithThisIngredient(pizzas, 'tomate')
console.log(result7)

function pizzasWithThisIngredient(arr, ingredientName) {

    let pizzasNames = []
    
    for(i = 0; i < arr.length; i++) {
    
        const currentPizza = arr[i]
        if (currentPizza.ingredients.includes(ingredientName)) {
            pizzasNames.push(currentPizza.name)
        }
    }

    return pizzasNames
    
}
  

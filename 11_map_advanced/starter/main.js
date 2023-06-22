const users = getUsers();

async function getUsers() {
    try {
        const response = await fetch(
            "https://randomuser.me/api/?nat=fr&results=50"
        );

        const data = await response.json();
        console.log(data.results)
        exoA(data.results)
        exoB(data.results)
        exoC(data.results)
        exo1(data.results)
        exo2(data.results)
        exo3(data.results)
        

    } catch (error) {
        console.log(error);
    }
}

// a. afficher le dernier élément du tableau

function exoA(arr) {

    console.log(arr[arr.length - 1].name)
}


// b. afficher l'age le plus élevé

function exoB(arr) {

    arr.sort((a, b) => {
        return b.dob.age - a.dob.age
    })

    console.log(arr[0].dob.age)

}

// c. afficher le nombre d'homme et le nombre de femmes

function exoC(arr) {

    let men = arr.filter((element) => element.gender === "male")
    let women = arr.filter((element) => element.gender === "female")

    console.log(` hommes : ${men.length} / femmes : ${women.length}`)

    // ou
    
    let malecount = 0
    let femalecount = 0
    
    arr.forEach(el => {
        el.gender === "female" ? femalecount++ : malecount++
    });
    
    console.log(malecount, femalecount)
}


// 1. afficher un tableau d'objet au format {name : Daphne Durand, age: 61}

function exo1(arr) {

    const people = arr.map((el) => {
        return {name : `${el.name.first} ${el.name.last}`, age: el.dob.age}
    })

    console.log(people)
}

// 2. afficher un tableau d'objet au format {name : Daphne Durand, adult: true}

function exo2(arr) {

    const result2 = arr.map((el) => {
        return {name : `${el.name.first} ${el.name.last}`, age: el.dob.age > 30 }
    })

    console.log(result2)
}

// 3. afficher un tableau de messages au format {mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}

function exo3(arr) {

    const result3 = arr.map((el) => {
        return {mail : `${el.email} Bonjour ${el.name.first}, votre adresse ${el.location.street.number} ${el.location.street.name}, ${el.location.postcode} ${el.location.city} est-elle correcte ?`}
    })

    console.log(result3)
}
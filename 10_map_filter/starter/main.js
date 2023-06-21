import movies from "./movies.json" assert { type: 'json' };

// a. Logger le premier element du tableau movies

console.log(movies[0].title)

// b. Logger l'annee du 4eme element du tableau movies

console.log(movies[3].year)

// c. Logger le titre du dernier element du tableau movies

console.log(movies[movies.length - 1].title)

// d. Logger le titre du film qui a la meilleure note

let highestNote = movies[0]

movies.forEach(element => {
    if (element.rate > highestNote.rate) highestNote = element   
})

console.log(highestNote.title)


// ou 

movies.sort((a, b) => {
        return b.rate - a.rate
})

console.log(`avec .sort : `, movies[0].title)

// e. Logger le titre du film le plus ancien

let olderMovie = movies[0]

movies.forEach(element => {
    if (element.year < olderMovie.year) olderMovie = element   
})

console.log(olderMovie.title)

// ou 

movies.sort((a, b) => {
    if (a.year > b.year)
    return 1
    if (a.year < b.year)
    return -1
    
    return 0
})

console.log(`avec .sort : `, movies[0].title)


// f. Logger tous les titres de film qui ont au moins 3 acteurs

let threeActorsMovies = []

movies.forEach(element => {
    if (element.actors.length > 2)  
    threeActorsMovies.push(element.title)
})

console.log(threeActorsMovies)

// ou

let filmWith3actors = movies.filter((element) => element.actors.length > 2)
let filmsNames = filmWith3actors.map((e) => { return e.title})

console.log(`avec .filter et .map`, filmsNames)

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films
console.log(moviesTitles(movies))

function moviesTitles(arr) {
    let titles = []
    for(let i = 0; i < arr.length; i++) {
        titles.push(arr[i].title)
    }
    return titles
}

// ou 

const moviesNames = movies.map((element) => {return element.title})

console.log(`avec .map : `, moviesNames)


// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee
console.log(thisYearMovies(movies, '1994'))

function thisYearMovies(arr, myYear) {
    let titles = []
    for (let i = 0; i < arr.length; i++) {
        const currentFilm = arr[i]
        if (currentFilm.year == myYear) {
            titles.push(currentFilm.title)
        } 
    }
    return titles
}


// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur
console.log(filmByDirector(movies, 'Christopher Nolan'))

function filmByDirector(arr, director) {
    let titles = []
    for (let i = 0; i < arr.length; i++) {
        const currentFilm = arr[i]
        if (currentFilm.director == director) {
            titles.push(currentFilm.title)
        }
    }
    return titles 
}

// ou





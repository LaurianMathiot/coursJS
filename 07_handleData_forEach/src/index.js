import games from "./games.json" assert { type: "json" };

init();

function init() {
  console.log("init");
}

// const myArray = [1, 2, 3, 4]

// myArray.forEach((el) => {
//   console.log(el)
// })

// a. Logger le premier element du tableau games

console.log(games[0])

// b. Logger l'annee du 3eme element du tableau games

console.log(games[2].year)

// c. Logger le titre du dernier element du tableau

console.log(games[games.length - 1].title)

// 1. Ecrire une fonction qui prend en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)

    // const getAllTitles = (arr) => {
    //   let titlesNames = []

    //   arr.forEach(game => {
    //   titlesNames.push(game.title)
    //   })

    //   return titlesNames
    // }

    // const result = getAllTitles(games)

    // console.log(result)

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee

    // const GamesOfThisYear = (thisyear, arr)  => {
    //   let gameTitle = []

    //   arr.forEach(game2 => {
    //     if (game2.year === thisyear) {
    //       gameTitle.push(game2.title)
    //     }
    //   })

    //   return gameTitle

    // }

    // console.log(GamesOfThisYear(2020, games))

// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8

    const GamesWithHighRate = (rate, arr) => {
      let gameTitle3 = []

      arr.forEach(element => {
        if (element.rate >= rate) {
          gameTitle3.push(element.title)
        }
      });

      return gameTitle3
    }

    console.log(GamesWithHighRate(8, games))

// 4. Ecrire une fonction qui prend en parametre une console et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console

// const GamesOnDevice = (device, arr) => {
//   let gameTitle4 = []

//   arr.forEach(element4 => {
//     if (element4.devices.includes(device)) {
//         gameTitle4.push(element4.title)
//     }
//   })

//   return gameTitle4
// }

// console.log(GamesOnDevice("PC", games))



// Variante exo 4, en prenant qu'une partie du nom de la console

const GamesOnDevice = (device, arr) => {
  let gameTitle4 = []

  arr.forEach(element4 => {
    for (let i = 0; i < element4.devices.length; i++) {
      const element = element4.devices[i];
      if(element.includes(device)){
        gameTitle4.push(element4.title)
      }      
    }
  })

  return gameTitle4
}

console.log(GamesOnDevice("One", games))

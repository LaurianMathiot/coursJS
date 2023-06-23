const section = document.querySelector('.shopping-list')
const checks = document.querySelectorAll('.btn-check')
const select = document.querySelector('.form-select')


let categories = []
let data = []

checks.forEach(check => {
    check.addEventListener('change', onCheckChange)
})

select.addEventListener('change',onSelect)


fetchData()

async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        data = await response.json()
        createCard();
    }
    catch (error) {
        console.log(error);
    }
}


function createCard() {
    section.innerHTML = ""

    data.forEach((element) => {
        if(categories.includes(element.category) || categories.length === 0) {
            
            let card = document.createElement(`div`)           
            let rateStars = buildStars(element.rating.rate)
        
            card.innerHTML =    `<div class="card p-3">
                                    <div class="d-flex flex-row mb-3"><img src="${element.image}" width="70">
                                    <div class="d-flex flex-column ml-2"><span>${element.title}</span><span class="text-black-50">${element.category}</span><span class="ratings">${rateStars} ${element.rating.rate}</span>
                                    </div>
                                    </div>
                                    <h6>${element.description.slice(0, 80)} ...</h6>
                                    <div class="d-flex justify-content-between install mt-3"><span>${element.price} €</span><span class="text-primary">En savoir plus&nbsp;<i class="fa fa-angle-right"></i></span></div>
                                </div>`
            
            section.appendChild(card)
        }
    })
}

function buildStars(rate) {
    let result = ''

    for (let i = 0; i < Math.round(rate); i++) {
        result += `<i class="fa-solid fa-star"></i>`
    }
    
    for (let i = 0; i < 5 - Math.round(rate); i++) {
        result += `<i class="fa-regular fa-star"></i>`
    }

    return result
    }


function onCheckChange(e) {
    categories = []
    checks.forEach((check) => {
        if(check.checked) categories.push(check.value)
    })
    // console.log(categories)
    createCard()
}

function onSelect() {

    let coefAsc
    if(select.value.includes('asc')){
        coefAsc = 1
    } else {
        coefAsc = -1
    }


    data.sort((a, b) => {
        let propertyA, propertyB
        if(select.value.includes('price')){
            propertyA = a.price
            propertyB = b.price
        } else {
            propertyA = a.rating.rate
            propertyB = b.rating.rate
        }

        if(propertyA > propertyB) {
            return coefAsc
        } else if (propertyB > propertyA) {
            return -coefAsc
        } else {
            return 0
        }
    })

    createCard()
}


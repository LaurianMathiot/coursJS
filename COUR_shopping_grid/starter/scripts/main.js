const section = document.querySelector('.shopping-list')

fetchData()

async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        data = await response.json()
        createCard(data);
    }
    catch (error) {
        console.log(error);
    }
}


function createCard(data) {
    section.textContent = ""

    data.forEach((element) => {
    let card = document.createElement(`div`)

    card.innerHTML =    `<div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="${element.image}" width="70">
                            <div class="d-flex flex-column ml-2"><span>${element.title}</span><span class="text-black-50">${element.category}</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>
                            </div>
                            </div>
                            <h6>${element.description.slice(0-120)} ...</h6>
                            <div class="d-flex justify-content-between install mt-3"><span>${element.price} €</span><span class="text-primary">En savoir plus&nbsp;<i class="fa fa-angle-right"></i></span></div>
                        </div>`
    
    section.appendChild(card)
    })
}
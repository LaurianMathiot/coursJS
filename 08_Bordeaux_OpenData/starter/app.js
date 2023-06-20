const dataset = 'bor_frequentation_piscine_tr'

const btn = document.querySelector('button')
const errorMsg = document.querySelector('.errorMsg')

const placeNames = document.querySelectorAll('.place-name')
const placeInfos = document.querySelectorAll('.place-infos')
const visitors = document.querySelectorAll('.visitors')

btn.addEventListener('click', onBtnClick)

async function fetchData() {
    try {
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=${dataset}`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
        displayData(data)
        btnChange('reset')
    }

    catch (error) {
        btnChange('reset')
        errorMsg.textContent = `${error}`
    }
}

function displayData(data) {

    data.records.sort((a, b) => {
        if (a.fields.fmicourante < b.fields.fmicourante)
            return 1
        if (a.fields.fmicourante > b.fields.fmicourante)
            return -1

        return 0
    })


    for (let i = 0; i < placeInfos.length; i++) {
        placeNames[i].textContent = data.records[i].fields.etablissement_etalib + " (" + data.records[i].fields.fmizonlib + ") "
        placeInfos[i].textContent = data.records[i].fields.fmicourante + " / " + data.records[i].fields.fmizonmax
        visitors[i].style.transform = `scaleX(${(((data.records[i].fields.fmicourante)*100) / (data.records[i].fields.fmizonmax))/100}`
    }    
    
}

function progressBar() {

}

function btnChange(type) {
    if (type === 'fetching') {
        btn.textContent = "..."
        btn.classList.add("searching")
    } else if (type === 'reset') {
        btn.textContent = 'Refresh'
        btn.classList.remove("searching")
    }
    }

function onBtnClick(){
    btnChange('fetching')
    fetchData()
}

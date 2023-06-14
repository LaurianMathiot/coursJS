btn = document.querySelector(".main-btn")
container = document.querySelector(".main-container")
container2 = document.querySelector(".container2")

const color = "rgb(69, 214, 254)"
const originColor = container.style.backgroundColor

// changement de bg quand la souris est sur le boutton

    // btn.addEventListener("mouseenter", onHover)
    // btn.addEventListener("mouseout", outHover)

    // function onHover() {
    //     container.style.backgroundColor = color
    // }

    // function outHover() {
    //     container.style.backgroundColor = originColor
    // }



// changement de bg à chaque clique

    // btn.addEventListener("click",onClick)

    // function onClick() {
    //     if(container.style.backgroundColor === color) {
    //         container.style.backgroundColor = originColor
    //     } else {
    //         container.style.backgroundColor = color
    //     }
    // }



// const newDiv2 = document.createElement("div")
// newDiv2.classList.add('new-div2')
// container2.appendChild(newDiv2)
// newDiv2.style.left = "10vw"

btn.addEventListener("click", onClick)

function onClick(event) {
    event.preventDefault()

    
    for(i = 0; i < 10; i++) {
        for(j = 0; j < 10; j++) {
            const newDiv = document.createElement("div")
            container2.appendChild(newDiv)
            newDiv.classList.add('new-div')
            newDiv.style.left = `${i * 10}vw`
            newDiv.style.top = `${j * 10}vh`
            if((i + j) %2 === 0){
                newDiv.style.backgroundColor = "rgba(0,0,0,0)"
            }
        }
    }
}
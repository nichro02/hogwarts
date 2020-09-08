/*
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM is loaded!')
})
*/


//create variable for container div
const container = document.querySelector("#container")

//create h1 element and set to variable, append to container

const h1 = document.createElement("h1")
h1.innerText = "Hogwarts"

container.appendChild(h1)

//add h2,h3,h4 elements

const h2 = document.createElement("h2")
h2.innerText = "Ross"

container.appendChild(h2)

const h3 = document.createElement("h3")
h3.innerText = "Ravenclaw"

container.appendChild(h3)

const h4 = document.createElement("h4")
h4.className = "cat"
h4.innerText = "Momo"

container.appendChild(h4)

const wand = document.createElement("h4")
wand.innerText = "Hornbeam wand with Dragon Heartstring core"

container.appendChild(wand)

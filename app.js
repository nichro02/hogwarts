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
/*
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM is loaded!')
})
*/


//create variable for container div
const container = document.querySelector("#container")

//create h1 element and set to variable, append to container

const h1 = document.createElement("h1")

h1.textContent = "Hogwarts"

container.appendChild(h1)

//add h2,h3,h4 elements

const h2 = document.createElement("h2")

h2.textContent = "Ross"

container.appendChild(h2)

const h3 = document.createElement("h3")

h3.textContent = "Ravenclaw"

container.appendChild(h3)

const h4 = document.createElement("h4")

h4.className = "cat"

h4.textContent = "Momo"

container.appendChild(h4)

const wand = document.createElement("h4")

wand.textContent = "Hornbeam wand with Dragon Heartstring core"

container.appendChild(wand)


//Add an unordered list of items
const items = document.createElement("ol")

items.textContent = "List of Items"

items.dataset.storage = "trunk"

items.className = "list"

container.appendChild(items)

//list item 1
const butterBeer = document.createElement("li")

butterBeer.textContent = "butter beer"

items.appendChild(butterBeer)

//list item 2
const cloak = document.createElement("li")

cloak.textContent = "invisibility cloak"

cloak.className = "secret"

items.appendChild(cloak)

//list item 3
const map = document.createElement("li")

map.textContent = "magic map"

map.className = "secret"

items.appendChild(map)

//list item 4
const timeTurner = document.createElement("li")

timeTurner.textContent = "time turner"

timeTurner.className = "secret"

items.appendChild(timeTurner)

//list item 5
const leash = document.createElement("li")

leash.textContent = "leash"

leash.className = "cat"

items.appendChild(leash)

//list item 6
const candy = document.createElement("li")

candy.textContent = "Bertie Bott's Every Flavor Beans"

items.appendChild(candy)





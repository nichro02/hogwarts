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
const items = document.createElement("ul")

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

//Add a table
const semester = document.createElement("h5")

semester.textContent = "Spring 2017"

container.appendChild(semester)

//Create table

const courses = document.createElement("table")

container.appendChild(courses)

//Add thead

const thead = document.createElement("thead")

courses.appendChild(thead)

//Add th

const th1 = document.createElement("th")

th1.textContent = "Day"

thead.appendChild(th1)

const th2 = document.createElement("th")

th2.textContent = "Classes"

thead.appendChild(th2)

//Add tr element

const tr = document.createElement("tr")

thead.appendChild(tr)

//Set up day 1

const day1 = document.createElement("td")

day1.textContent = "Monday"

tr.appendChild(day1)

const day1Schedule = document.createElement("td")

day1Schedule.textContent = "Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice"

tr.appendChild(day1Schedule)

//Set up day 2

const tr2 = document.createElement("tr")

thead.appendChild(tr2)

const day2 = document.createElement("td")

day2.textContent = "Tuesday"

tr2.appendChild(day2)

const day2Schedule = document.createElement("td")

day2Schedule.textContent = "Herbology, Divination, Astrology, Charms"

tr2.appendChild(day2Schedule)

//Set up day 3

const tr3 = document.createElement("tr")

thead.appendChild(tr3)

const day3 = document.createElement("td")

day3.textContent = "Wednesday"

tr3.appendChild(day3)

const day3Schedule = document.createElement("td")

day3Schedule.textContent = "History of Muggle Politics, Care of Magical Creatures, Potions"

tr3.appendChild(day3Schedule)

//Set up day 4

const tr4 = document.createElement("tr")

thead.appendChild(tr4)

const day4 = document.createElement("td")

day4.textContent = "Thursday"

tr4.appendChild(day4)

const day4Schedule = document.createElement("td")

day4Schedule.textContent = "History of Wizard Finance, Creative Writing,Defense Against the Dark Arts"

tr4.appendChild(day4Schedule)

//Set up day 5

const tr5 = document.createElement("tr")

thead.appendChild(tr5)

const day5 = document.createElement("td")

day5.textContent = "Friday"

tr5.appendChild(day5)

const day5Schedule = document.createElement("td")

day5Schedule.textContent = "Work in the library, Warlock Economics, History of Magic, Quidditch practice"

tr5.appendChild(day5Schedule)

//Remove wand

wand.remove()

//Remove butter beer

butterBeer.remove()

//Get a new wand

const newWand = document.createElement("h4")

newWand.textContent = "Ironwood wand and Unicorn Hair string"

h4.after(newWand)

newWand.style.color = "gold"

//Send pet on spy mission

h4.remove()

const hidingCat = document.getElementsByClassName("cat")[1]

console.log(hidingCat)

hidingCat.remove()

const catBack = document.createElement("h4")

catBack.className = "cat"

catBack.textContent = "Momo"

h3.after(catBack)


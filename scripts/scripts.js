// Clock Selectors
let currentTime = new Date()
let hours = currentTime.getHours()
let minutes = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes()
let main = document.querySelector('[data-main]')
let clock = document.querySelector('[data-clock')
let greetText = document.querySelector('[data-greet]')

// Name and Focus input Selectors
const nameModal = document.querySelector('[data-username]')
const focusModal = document.querySelector('[data-focus]')
const inputName = document.querySelector('[data-username-input]')
const inputFocus = document.querySelector('[data-focus-input]')
const focusTextModal = document.querySelector('[data-focus-output]')
let focusText = document.querySelector('[data-focus-output-text]')

// Quote Randomizer Selectors
const refresh = document.querySelector('.refresh-icon')
const para = document.querySelector('.text-quote')
const customBtn = document.querySelector('.custom')
let quotes = [
   '"Don\'t let yesterday take too much of today."',
   '"Happiness is not the absence of problems, it is the ability to deal with them."',
   '"There is nothing that works out for the worst that won\'t work out for the better."',
   '"The hardest shot you\'d ever take is the one that you didn\'t take."',
]

// Even Listeners
inputName.addEventListener('keypress', openFocus)
refresh.addEventListener('click', randomize)

// Functions

function timeNow() {
   if (hours === 12) {
      clock.innerText = `12:${minutes}`
      greetText.textContent += 'Good Afternoon'
      main.style.backgroundImage = 'url(../images/forest.jfif)'
   } else if (hours >= 12 && hours <= 18) {
      hours = hours % 12
      clock.innerText = `${hours}:${minutes}`
      greetText.textContent += 'Good Afternoon'
      main.style.backgroundImage = 'url(../images/forest.jfif)'
   } else if (hours >= 19 && hours < 24) {
      hours = hours % 12
      clock.innerText = `${hours}:${minutes}`
      greetText.textContent += 'Good Evening'
      main.style.backgroundImage = 'url(../images/darkmountain.jpg)'
   } else if (hours >= 1 && hours <= 11) {
      clock.innerText = `${hours}:${minutes}`
      greetText.textContent += 'Good Morning'
      main.style.backgroundImage = 'url(../images/sunrise.jpg)'
   }
}

timeNow()

function openFocus(e) {
   if (e.key === 'Enter') {
      focusModal.show()
      let userName = inputName.value
      greetText.textContent += `, ${userName}`
      inputFocus.addEventListener('keypress', displayFocus)
      localStorage.setItem('username', greetText.textContent)

      function displayFocus(e) {
         if (e.key === 'Enter') {
            let focus = inputFocus.value
            focusText.textContent = focus
            localStorage.setItem('mainFocus', focusText.textContent)
            focusTextModal.show()
         }
      }
   }
}

function randomize() {
   let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
   para.innerHTML = randomQuote
}

// To do list

const todoBtn = document.querySelector('.todo-btn')
const closeBtn = document.querySelector('.close')
const todoModal = document.querySelector('.todo-modal')

const inputList = document.querySelector('.todo-input')
const ul = document.querySelector('.todo-list')
const listBtn = document.querySelector('.todo-btn_list')

listBtn.addEventListener('click', addToDo)

function addToDo() {
   event.preventDefault()
   console.log('hello')

   // todo div
   const todoDiv = document.createElement('div')
   todoDiv.classList.add('todo', 'd--f')
   //
   const newTodo = document.createElement('li')
   newTodo.innerText = inputList.value
   newTodo.classList.add('todo-item')
   todoDiv.appendChild(newTodo)
   // complete button
   const compBtn = document.createElement('button')
   compBtn.innerHTML = '<span class="material-symbols-outlined completed"> done </span>'
   compBtn.classList.add('compBtn')
   todoDiv.appendChild(compBtn)

   compBtn.addEventListener('click', () => {
      newTodo.style.textDecoration = 'line-through'
   })

   // trash btn
   const trashBtn = document.createElement('button')
   trashBtn.innerHTML = '<span class="material-symbols-outlined deleted"> delete </span>'
   trashBtn.classList.add('trashBtn')
   todoDiv.appendChild(trashBtn)

   trashBtn.addEventListener('click', () => {
      todoDiv.style.display = 'none'
   })
   ul.appendChild(todoDiv)
}

todoBtn.addEventListener('click', openTodo)
closeBtn.addEventListener('click', closeTodo)

function openTodo() {
   todoModal.show()
}

function closeTodo() {
   todoModal.close()
}

customBtn.addEventListener('click', customize)

function customize() {
   para.style.display = 'none'

   const inputElem = document.createElement('input')
   const quoteDiv = document.querySelector('.quote-container')
   quoteDiv.insertBefore(inputElem, quoteDiv.children[0])

   inputElem.addEventListener('keypress', inputNewQuote)

   function inputNewQuote(e) {
      if (e.key === 'Enter') {
         let newQuote = inputElem.value
         para.textContent = `\"${newQuote}\"`
         inputElem.style.display = 'none'
         para.style.display = 'block'
      }
   }
}

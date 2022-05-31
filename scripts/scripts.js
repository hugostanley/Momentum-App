let currentTime = new Date()
let hours = currentTime.getHours()
let minutes = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes()
let main = document.querySelector('main')
let time = document.querySelector('.center-region_clock')

let greetText = document.querySelector('.greet')

function timeNow() {
   if (hours >= 12 && hours <= 18) {
      hours = hours % 12
      time.innerText = `${hours}:${minutes}`
      greetText.textContent += 'Good Afternoon'
      main.style.backgroundImage = 'url(../images/forest.jfif)'
   } else if (hours >= 19 && hours < 24) {
      hours = hours % 12
      time.innerText = `${hours}:${minutes}`
      greetText.textContent += 'Good Evening'
      main.style.backgroundImage = 'url(../images/darkmountain.jpg)'
   } else if (hours >= 1 && hours <= 11) {
      time.innerText = `${hours}:${minutes}`
      greetText.textContent += 'Good Morning'
      main.style.backgroundImage = 'url(../images/sunrise.jpg)'
   }
}

timeNow()

const nameModal = document.querySelector('.modal.name')
const focusModal = document.querySelector('.modal.focus')
const inputName = document.querySelector('.input.name')
const inputFocus = document.querySelector('.input.focus')
const focusTextModal = document.querySelector('.modal.focus-text')
let focusText = document.querySelector('.focusText')
inputName.addEventListener('keypress', openFocus)

// const storedName = localStorage.getItem('username')

// if (storedName) {
//    greetText.textContent = storedName
// }

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

const refresh = document.querySelector('.refresh-icon')
const para = document.querySelector('.text-quote')

let quotes = [
   '"Don\'t let yesterday take too much of today."',
   '"Happiness is not the absence of problems, it is the ability to deal with them."',
   '"There is nothing that works out for the worst that won\'t work out for the better."',
   '"The hardes shot you\'d ever take is the one that you didn\'t take."',
]

refresh.addEventListener('click', randomize)

function randomize() {
   let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
   para.innerHTML = randomQuote
}

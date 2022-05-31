let currentTime = new Date()
let hours = currentTime.getHours()
let minutes = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes()

let time = document.querySelector('.center-region_clock')

let greetText = document.querySelector('.greet')

function timeNow() {
   if (hours >= 12 && hours <= 18) {
      hours = hours % 12
      time.innerText = `${hours}:${minutes}`
      greetText.textContent += ' Afternoon'
   } else if (hours >= 19 && hours < 24) {
      hours = hours % 12
      time.innerText = `${hours}:${minutes}`
      greetText.textContent += ' Evening'
   } else if (hours >= 1 && hours <= 11) {
      time.innerText = `${hours}:${minutes}`
      greetText.textContent += ' Morning'
   }
}

timeNow()

// const userName = document.querySelector('#name')
// const nameQu = document.querySelector('.label.name')

// userName.addEventListener('keypress', getName)

// function getName(e) {
//    function storeName() {
//       if (e.key === 'Enter') {
//          // code for enter
//          let userOne = userName.value
//          console.log(userOne)

//          localStorage.setItem('userName', userOne)
//          let newUser = localStorage.getItem('userName')
//          greetText.textContent += `, ${newUser}`
//       }
//    }

//    function changeBg() {
//       document.querySelectorAll('.label.name', '.input.name').style.cssText =
//          'visibility: hidden; opacity: 0;'
//       u
//    }

//    storeName()
//    changeBg()
// }

const nameModal = document.querySelector('.modal.name')
const focusModal = document.querySelector('.modal.focus')
const inputName = document.querySelector('.input.name')
const inputFocus = document.querySelector('.input.focus')
const focusTextModal = document.querySelector('.modal.focus-text')
let focusText = document.querySelector('.focusText')
inputName.addEventListener('keypress', openFocus)
console.log(openFocus())

function openFocus(e) {
   if (e.key === 'Enter') {
      focusModal.show()
      let userName = inputName.value
      greetText.textContent += `, ${userName}`
      inputFocus.addEventListener('keypress', displayFocus)

      function displayFocus(e) {
         if (e.key === 'Enter') {
            let focus = inputFocus.value
            focusText.textContent = focus

            focusTextModal.show()
         }
      }
   }
}

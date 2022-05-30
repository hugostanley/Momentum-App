let currentTime = new Date()
let hours = currentTime.getHours()
let minutes = currentTime.toLocaleString('en-US', {
   minute: 'numeric',
})

let time = document.querySelector('.center-region_time')

let greetText = document.querySelector('.greet')

function timeNow() {
   if (hours >= 12 && hours <= 6) {
      hours = hours % 12
      time.innerText = `${hours}:${minutes}`
      greetText.textContent += ' Afternoon'
   } else if (hours >= 19 && hours < 24) {
      hours = hours % 12
      time.innerText = `${hours}:${minutes}`
      greetText.textContent += ' Evening'
   } else if (hours >= 1 && hours <= 11) {
      time.innerText = `${hours}:${minutes}`
      greetText.textContent = +' Morning'
   }
}

timeNow()

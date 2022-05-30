let currentTime = new Date()
let hours = currentTime.getHours()
let minutes = currentTime.getMinutes()
let time = document.querySelector('.center-region_time')

function timeNow() {
   if (hours > 12) {
      hours = hours % 12
      time.innerText = `${hours}:${minutes}`
   } else {
      time.innerText = `${hours}:${minutes}`
   }
}

timeNow()


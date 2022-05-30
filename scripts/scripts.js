function timeNow() {
   let currentTime = new Date()
   let hours = currentTime.getHours
   let minutes = currentTime.getMinutes
   let time = document.querySelector('.center-region_time')

   if (hours > 12) {
      time.innerText = `${hours % 12}:${minutes} PM`
   }
}

timeNow()
// time.innerText = currentTime.toLocaleString('en-US', {
//    hour: 'numeric',
//    minute: 'numeric',
//    hour12: true,
// })

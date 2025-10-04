function updateClock() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
document.getElementById('clock').innerHTML=hours;
document.getElementById('clock').innerHTML=minutes;
  document.getElementById('clock').innerHTML=seconds;
  // Add leading zeros
  //hours = hours < 10 ? '0' + hours : hours;
  //minutes = minutes < 10 ? '0' + minutes : minutes;
  //seconds = seconds < 10 ? '0' + seconds : seconds;

  //const currentTime = `${hours}:${minutes}:${seconds}`;
 // document.getElementById('clock').textContent = currentTime;
}


// Initial call
updateClock();
// Update every second
setInterval(updateClock, 1000);
document.getElementById("clock").innerHTML=hours;

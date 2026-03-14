function updateClock(){

const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12;

hours = String(hours).padStart(2,'0');
minutes = String(minutes).padStart(2,'0');
seconds = String(seconds).padStart(2,'0');

document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

document.getElementById("ampm").textContent = ampm;

const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").textContent =
now.toLocaleDateString(undefined,options);

document.getElementById("day").textContent =
now.toLocaleDateString(undefined,{weekday:'long'});

}

setInterval(updateClock,1000);
updateClock();
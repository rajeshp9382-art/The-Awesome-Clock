function updateClock(){
  const now = new Date();
  const hours = now.getHours().toString().padStart(2,'0');
  const minutes = now.getMinutes().toString().padStart(2,'0');
  const seconds = now.getSeconds().toString().padStart(2,'0');

  const time = `${hours}:${minutes}:${seconds}`;

  chrome.action.setBadgeText({text: time});
  chrome.action.setBadgeBackgroundColor({color:"#000000"});
}

setInterval(updateClock,1000);
updateClock();
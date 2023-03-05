const clock = document.getElementById("clock");

const displayClock = () => {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,"0");
  const mm = String(now.getMinutes()).padStart(2,"0");
  const ss = String(now.getSeconds()).padStart(2,"0");
  clock.innerText = `${hh}:${mm}:${ss}`;
}

displayClock();
setInterval(displayClock, 1000);

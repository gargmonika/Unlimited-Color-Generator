let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let btnStop = document.getElementById("stop");
let btnStart = document.getElementById("start");
let intervalId;

function randomColor() {
  const hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let hexPosition = Math.floor(Math.random() * 16);
    color += hex[hexPosition];
  }
  return color;
}

function changeBackgroundColor() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      body.style.backgroundColor = randomColor();
      h1.style.color = randomColor(); // console.log(randomColor());
    }, 1000);
  }
}
function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

btnStart.addEventListener("click", changeBackgroundColor);
btnStop.addEventListener("click", stopChangingColor);

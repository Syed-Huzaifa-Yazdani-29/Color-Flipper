const simpleColors = ["red", "green", "blue", "yellow", "purple", "orange"];
const hexChars = "0123456789ABCDEF";

const simpleBtn = document.getElementById("simple-btn");
const hexBtn = document.getElementById("hex-btn");
const flipBtn = document.getElementById("flip-btn");
const colorCode = document.getElementById("color-code");

let isHexMode = false;

function getRandomSimpleColor() {
  const randomIndex = Math.floor(Math.random() * simpleColors.length);
  return simpleColors[randomIndex].toUpperCase(); 
}

function getRandomHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return hexColor;
}

function flipColor() {
  const color = isHexMode ? getRandomHexColor() : getRandomSimpleColor();
  document.body.style.backgroundColor = isHexMode ? color : color.toLowerCase();
  colorCode.textContent = color;
}

simpleBtn.addEventListener("click", () => {
  isHexMode = false;
  flipColor();
});

hexBtn.addEventListener("click", () => {
  isHexMode = true;
  flipColor();
});

flipBtn.addEventListener("click", flipColor);

flipColor();
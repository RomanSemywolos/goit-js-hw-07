document.querySelector(".change-color").addEventListener("click", backgroundСhanger);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function backgroundСhanger() {
  const newColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = newColor;
  document.querySelector(".color").innerText = newColor;
};
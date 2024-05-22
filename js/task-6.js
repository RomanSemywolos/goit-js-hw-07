function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberOfBoxes = document.querySelector("[type='number']");
const boxes = document.querySelector("#boxes");

function destroy() {
  boxes.innerHTML = "";
}

function create() {
  const docFragment = document.createDocumentFragment();
  const count = Number.parseInt(numberOfBoxes.value, 10);

  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    docFragment.appendChild(div);
  }
  if (count > 0 && count <= 100) {
    destroy();
    boxes.appendChild(docFragment);
  }
  numberOfBoxes.value = "";
}

document.querySelector("[data-create]").addEventListener("click", create);
document.querySelector("[data-destroy]").addEventListener("click", destroy);
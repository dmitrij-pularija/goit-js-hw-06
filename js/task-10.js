function getRandomHexColor() {
  return `#${(Math.random().toString(16) + "000000")
    .substring(2, 8)
    .toUpperCase()}`;
}

let box = document.querySelector("#boxes");
const controlsBox = document.querySelector("#controls");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const countDiv = document.querySelector("[type = 'number']");

function createBoxes(amount) {
  let size = 30;
  destroyBoxes();
  for (let i = 1; i <= amount; i += 1) {
    box.insertAdjacentHTML("beforeend", `<div id="${i}"></div>`);
    let boxCurrent = document.getElementById(i);
    boxCurrent.style.width = `${size}px`;
    boxCurrent.style.height = `${size}px`;
    boxCurrent.style.backgroundColor = getRandomHexColor();
    size += 10;
  }
}

function destroyBoxes() {
  box.remove();
  countDiv.value = null;
  controlsBox.insertAdjacentHTML(
    "afterend",
    '<div id="boxes" style="boxes"></div>'
  );
  box = document.querySelector("#boxes");
}

createBtn.addEventListener("click", () => {
  createBoxes(countDiv.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

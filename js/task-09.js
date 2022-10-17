function getRandomHexColor() {
  return `#${(Math.random().toString(16) + "000000")
    .substring(2, 8)
    .toUpperCase()}`;
}

const buttonColor = document.querySelector(".change-color");
const output = document.querySelector(".color");

buttonColor.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  output.textContent = color;
  document.body.style.backgroundColor = color;
});

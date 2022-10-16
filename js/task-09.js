function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColor = document.querySelector(".change-color");
const output = document.querySelector(".color");

buttonColor.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  output.setAttribute("style", `background-color: ${color}; color: ${color};`);
});

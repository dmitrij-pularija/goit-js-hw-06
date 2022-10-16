function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const sizeInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

output.setAttribute("style", `font-size: ${sizeInput.value}px`);
sizeInput.addEventListener("input", (event) => {
  output.setAttribute(
    "style",
    `font-size: ${event.currentTarget.value}px; color:${getRandomHexColor()}`
  );
});

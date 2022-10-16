let counterValue = 0;
const buttons = document.querySelectorAll("button");
function handleClick() {
  if (this.getAttribute("data-action") === "decrement") {
    if (counterValue > 0) {
      counterValue -= 1;
    }
    value.innerHTML = counterValue;
  } else {
    counterValue += 1;
    value.innerHTML = counterValue;
  }
}
buttons[0].addEventListener("click", handleClick);
buttons[1].addEventListener("click", handleClick);

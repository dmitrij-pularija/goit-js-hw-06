const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const listItems = [];
for (const ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.className = "item";
  listItem.textContent = ingredient;
  listItems.push(listItem);
}

list.append(...listItems);

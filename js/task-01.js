const categories = document.querySelectorAll(".item h2");
console.log(`Number of categories: ${categories.length}`);
for (const cat of categories) {
  console.log(`Category: ${cat.innerHTML}`);
  let numcat = cat.nextElementSibling;
  console.log(`Elements: ${numcat.children.length}`);
}

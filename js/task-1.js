const categories = document.querySelectorAll("#categories .item");
console.log(`Liczba kategorii: ${categories.length}`);
categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;
  console.log(`Kategoria: ${categoryName}, Liczba elementów: ${elementsCount}`);
});

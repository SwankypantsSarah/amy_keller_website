document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel-item");
  // buttons
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel-button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
    <div class="carousel-nav">
      ${buttonsHtml.join("")}
      </div>
    `
  );

  const buttons = carousel.querySelectorAll(".carousel-button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // unselect all the items
      items.forEach((item) => item.classList.remove("carousel-item-selected"));
      buttons.forEach((button) =>
        button.classList.remove("carousel-button-selected")
      );
      items[i].classList.add("carousel-item-selected");
      button.classList.add("carousel-item-selected");
    });
  });

  //select first item on load
  items[1].classList.add("carousel-item-selected");
  buttons[0].classList.add("carousel-item-selected");
});

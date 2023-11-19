// JavaScript
function renderSlider() {
  const sliderWrapper = document.querySelector(".course-items");
  sliderWrapper.innerHTML = "";

  // Calculate the number of items to be displayed based on the screen size
  const numItems = screenSize < 768 ? 2 : items.length;

  // Create a slider container element
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("slider-container");

  // Render the slider with the appropriate number of items
  for (let i = 0; i < numItems; i++) {
    const item = document.createElement("div");
    item.classList.add("slider-item"); // Add a class to the item
    item.textContent = items[i]; // Set the text content of the item
    sliderContainer.appendChild(item); // Add the item to the slider container
  }

  sliderWrapper.appendChild(sliderContainer); // Add the slider container to the slider wrapper
}

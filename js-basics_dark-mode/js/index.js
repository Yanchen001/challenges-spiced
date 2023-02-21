console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkTrigger = document.querySelector('[data-js="dark-mode-button"]');
const lightTrigger = document.querySelector('[data-js="light-mode-button"]');
const darkToggle = document.querySelector('[data-js="toggle-button"]');

darkTrigger.addEventListener("click", () => {
    bodyElement.classList.add("dark");
});

lightTrigger.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
});

darkToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});




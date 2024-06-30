// DOM Elements
const display = document.querySelector(".display");
const buttonMinus = document.querySelector(".button.minus"); 
const buttonPlus = document.querySelector(".button.plus"); 
const buttonReset = document.querySelector(".button.reset"); 
const buttons = document.querySelectorAll(".button");

let count = 0;
let currentColorIndex = 0;

// Update display
function updateDisplay() {
    display.textContent = count;
}

// Events to increase / decrease the counter
buttonPlus.addEventListener("click", incrementCounter);
buttonMinus.addEventListener("click", decrementCounter);
buttonReset.addEventListener("click", reset);

function incrementCounter() {
    count++;
    updateDisplay();
}

function decrementCounter() {
    if (count > 0) {
        count--;
        updateDisplay();
    } 
}

function reset() {
    count = 0;
    updateDisplay();
    changeBackgroundColor();
}

// Events background colors and shadows
const colors = [
    "#4A6CFC",
    "#8f8ff2",
    "#FF9966",
    "#5EBAA0",
    "#D797E7"
];

function changeBackgroundColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    const gradient = `linear-gradient(to bottom, ${newColor} 20%, #fff 100%)`;
    document.body.style.background = gradient;
    updateButtonColors(newColor);
}

function updateButtonColors(color) {
    buttons.forEach(button => {
        button.style.boxShadow = `0 0.2em ${color}`;
    });
}

changeBackgroundColor();
updateDisplay();

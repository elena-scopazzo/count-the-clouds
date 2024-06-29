// Elementi del DOM
const display = document.querySelector(".display");
const buttonMinus = document.querySelector(".button.minus"); 
const buttonPlus = document.querySelector(".button.plus"); 
const buttonReset = document.querySelector(".button.reset"); 
const buttons = document.querySelectorAll(".button");

let count = 0;

let currentColorIndex = 0;

// Aggiornare il display 
function updateDisplay() {
    display.textContent = count;
}

// Eventi per aumentare \ decrementare il counter
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

const colors = [
 "#4A6CFC",
 "#8f8ff2",
"#FF9966",
"#5EBAA0"
];

function changeBackgroundColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    const gradient = `linear-gradient(to bottom, ${newColor} 20%, #fff 100%)`;
    document.body.style.background = gradient;
    document.body.style.display = gradient;
    document.body.style.title = gradient;
    updateButtonColors(newColor);
    
}

function updateButtonColors(color) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.style.boxShadow = `0 0.2em ${color}`;
    });
}

changeBackgroundColor();

updateDisplay();
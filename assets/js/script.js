// Elementi del DOM
const display = document.querySelector(".display");
const buttonMinus = document.querySelector(".button.minus"); 
const buttonPlus = document.querySelector(".button.plus"); 
const buttonReset = document.querySelector(".button.reset"); 

// Counter 
let count = 0;

// Aggiornare il display 
function updateDisplay() {
    display.textContent = count;
    changeColor();
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
}

updateDisplay();

// Eventi per cambio colore 

const colors = ['blue', 'green', 'red', 'purple', 'orange'];

function changeColor() {


}
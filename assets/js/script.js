// DOM elements
const counterContainer = document.querySelector(".counter-container")

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "0";
counterContainer.appendChild(display);

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
counterContainer.appendChild(buttonContainer);

const buttonMinus = document.createElement("button");
buttonMinus.classList.add("button", "minus");
buttonMinus.textContent = "-";
buttonContainer.appendChild(buttonMinus);

buttonReset = document.createElement("button");
buttonReset.classList.add("button", "reset");
buttonReset.textContent = "RESET";
buttonContainer.appendChild(buttonReset);

buttonPlus = document.createElement("button");
buttonPlus.classList.add("button", "plus");
buttonPlus.textContent = "+";
buttonContainer.appendChild(buttonPlus)

let count = 0;
let currentColorIndex = 0;

// Update the display
function updateDisplay() {
    display.textContent = count;
}

// Counter increase / decrease events
buttonPlus.addEventListener("click", incrementCounter);
buttonPlus.addEventListener("touchstart", function(e) {
    e.preventDefault();
    incrementCounter();
});

buttonMinus.addEventListener("click", decrementCounter);
buttonMinus.addEventListener("touchstart", function(e) {
    e.preventDefault();
    decrementCounter();
});

buttonReset.addEventListener("click", reset);
buttonReset.addEventListener("touchstart", function(e) {
    e.preventDefault();
    reset();
});

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

// Events for background colors and shadows
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
    [buttonMinus, buttonPlus, buttonReset].forEach(button => {
        button.style.boxShadow = `0 0.2em ${color}`;
    });
}

changeBackgroundColor();
updateDisplay();
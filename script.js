// addition function
const addition = (num1, num2) => num1 + num2;

//subtration function
const subtration = (num1, num2) => num1 - num2;

// multiplication function
const multiplication = (num1, num2) => num1 * num2

// division function
const division = (num1, num2) => num1/num2;

// operate function takes operator and two digits and calls the appropriate operator functions
function operate (num1, num2, operator) {
    if (operator === "+") {
        return addition(num1, num2);
    }
    if (operator === "-") {
        return subtration(num1, num2);
    }
    if (operator === "*") {
        return multiplication(num1, num2);
    }
    if (operator === "/") {
        return division(num1, num2);
    }
}

//function receives value from button and updates display accordingly
const buttons = document.querySelectorAll(".digit, .decimal");
const display = document.querySelector(".display");

Array.from(buttons).forEach(button => button.addEventListener("click", updateDisplay));

function updateDisplay(event) {
    const displayCurrent = document.querySelector(".display").textContent;
    const button = event.target;
    display.textContent = displayCurrent + button.value;
}

//function attached to "clear" button and reverts display to en empty string
function clearDisplay() {
    display.textContent = "";
}

//this function will get the input and operator from user and call the operate function
function performOperation() {
}
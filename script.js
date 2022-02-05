let num1 = "";
let num2 = "";
let operator = "";

const numbers = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const inputField = document.querySelector(".inputField");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const sign = document.querySelector(".sign");

numbers.forEach(number => number.addEventListener("click", updateInput));
operators.forEach(operator => operator.addEventListener("click", getOperator));
clear.addEventListener("click", clearFields);
equals.addEventListener("click", operate);

//retreives value from buttons pressed and puts it into input field
function updateInput(event) {
    let inputValue = event.target.value;
    const currentInput = document.querySelector(".inputField").textContent;
    inputField.textContent = currentInput + inputValue;
}

function updateDisplay() {
    const currentInput = document.querySelector(".inputField").textContent;
    display.textContent = currentInput;
}

function getOperator (event) {
    const currentInput = document.querySelector(".inputField").textContent;
    operator = event.target.value;
    updateDisplay();
    setParameters();
    clearInput();
}

function setParameters() {
    const currentInput = document.querySelector(".inputField").textContent;
    if (num1 === "") {
        num1 = currentInput;
    }
    if (num1 != null) {
        num2 = currentInput;
    }
    if (num1 != null && num2 != null) {
        let result = operate(num1, num2, operator);
        console.log(result);
        inputField.textContent = result;
    }
    // if (num1 != null && num2 != null) {
    //     operate(num1, num2, operator);
    //     clearParameters();
    // }
}

function clearInput() {
    inputField.textContent = "";
}



//function attached to "clear" button and reverts display to en empty string
function clearFields() {
    display.textContent = "";
    inputField.textContent = "";
}

function clearParameters() {
    num1 = "";
    num2 = "";
}

//this function will get the input and operator from user and call the operate function
function performOperation() {
   
}

// addition function
const addition = (num1, num2) => num1 + num2;

//subtration function
const subtration = (num1, num2) => num1 - num2;

// multiplication function
const multiplication = (num1, num2) => num1 * num2

// division function
const division = (num1, num2) => num2 === 0 ? "nice try" : num1/num2 

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
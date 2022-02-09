let num1 = "";
let num2 = "";
let operator1 = "";
let operator2 = "";

const numbers = document.querySelectorAll(".digit");
const previousInput = document.querySelector(".display");
const currentInput = document.querySelector(".inputField");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const sign = document.querySelector(".sign");


numbers.forEach(number => number.addEventListener("click", (event) => {
    handleNumber(event);
    updateDisplay(event);
}));

operators.forEach(operator => operator.addEventListener("click",(event) => {
    handleOperator(event)
    updateDisplay(event);
}));

clear.addEventListener("click", clearFields);
equals.addEventListener("click", operate);


function handleNumber(number) {
    value = number.target.value;
    value.toString();
    console.log(value);
    if (num1 && !operator1 && !num2) {
        num1 = num1.concat(value);
        console.log(num1);
    }
    else if (!num1 && !operator1 && !num2) {
        num1 = value;
        console.log(num1);
    }
    else if (num1 && operator1 && !num2) {
        num2 = value;
    }
    else if (num1 && operator1 && num2) {
        num2 = num2.concat(value);
    } 
}

function handleOperator (operator) {
    operator = operator.target.value
    operator.toString();
    if (!operator1) {
        operator1 = operator;
    }
    else if (operator1 !== null) {
        operator2 = operator;
    }
}

//retreives value from buttons pressed and puts it into input field
function updateDisplay(event) {
    let inputValue = event.target.value.toString();
    currentInput.textContent = currentInput.textContent + inputValue.toString();
}

// function updateDisplay() {
//     const currentInput = document.querySelector(".inputField").textContent;
//     const currentDisplay = document.querySelector(".display").textContent;
//     display.textContent = currentDisplay + currentInput;
// }



function clearInput() {
    inputField.textContent = "";
}


//function attached to "clear" button and reverts display to en empty string
function clearFields() {
    currentInput.textContent = "";
    num1 = "";
    num2 = "";
    operator1 = "";
    operator2 = "";
}

function clearParameters() {
    return expression = [];
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
function operate (expression) {
    
    if (expression.includes("+")); {
        solution = addition(expression[0], expression[2]);
    }
    if (expression.includes("-")) {
        solution = subtration(expression[0], expression[2]);
    }
    if (expression.includes("x")) {
        solution = multiplication(expression[0], expression[2]);
    }
    if (expression.includes("/")) {
        solution = division(expression[0], expression[2]);
    }
    console.log(solution);
    clearInput();
    updateDisplay(solution)
}
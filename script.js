let num1 = "";
let num2 = "";
let operator1 = "";
let operator2 = "";
let solution = "";

const numbers = document.querySelectorAll(".digit, .zero, .decimal");
const currentInput = document.querySelector(".inputField");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

numbers.forEach(number => number.addEventListener("click", (e) => {
    handleNumber(e);
    updateDisplay(e);
}));

operators.forEach(operator => operator.addEventListener("click",(event) => {
    handleOperator(event);
    updateDisplay(event);
}));

clear.addEventListener("click", clearFields);
equals.addEventListener("click", operate);

//gets the value from the number button and assigns it to the correct parameter
function handleNumber(number) {
    value = number.target.value;
    if ((currentInput.textContent.includes(".") && value == ".")) {
        return;
    }
    if (!num1 && !operator1 && !num2) {
        num1 = value;
    }
    else if (num1 && !operator1 && !num2) {
        num1 = num1.toString();
        num1 = num1.concat(value);
    }
    else if (num1 && operator1 && !num2) {
        num2 = value;
    }
    else if (num1 && operator1 && num2) {
        num2 = num2.toString();
        num2 = num2.concat(value);
    }
}

//gets operator value from button and assigns to the correct parameter
function handleOperator (operator) {
    operator = operator.target.value
    operator.toString()
    if (!operator1) {
        operator1 = operator;
    }
    else if (operator1 !== null) {
        operate();
        operator2 = operator;
        operator1 = operator2;
        operator2 = null;
        num2 = null;
        num1 = solution;
    }
}

//retreives value from buttons pressed and puts it into input field
function updateDisplay(event) {
    let inputValue = event.target.value.toString();
    if ((currentInput.textContent.includes(".") && inputValue == ".")) {
        return;
    }
    if ((currentInput.textContent == "") && (inputValue === "." )) {
        inputValue = "0.";
    }   
    currentInput.textContent = currentInput.textContent + inputValue.toString();
}

//removes what is written in display in order to display the solution
function clearInput() {
    currentInput.textContent = "";
}

//function attached to "clear" button and reverts display and parameters to empty strings
function clearFields() {
    currentInput.textContent = "";
    num1 = "";
    num2 = "";
    operator1 = "";
    operator2 = "";
    solution = "";
}

//runs at the end of operate to revert parameters back to normal
function clearParameters() {
    num1 = null;
    num2 = null;
    operator1 = null;
    operator2 = null;
}

// addition function
const addition = (num1, num2) => num1 + num2;

//subtration function
const subtraction = (num1, num2) => num1 - num2;

// multiplication function
const multiplication = (num1, num2) => num1 * num2

// division function
const division = (num1, num2) => num2 === 0 ? "nice try" : num1/num2 

// operate function takes operator and two digits and calls the appropriate operator functions
function operate() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator1 == "+") {
        solution = addition(num1, num2);
    }
    else if (operator1 == "-") {
        solution = subtraction(num1, num2);
    }
    else if (operator1 == "x") {
        solution = multiplication(num1, num2);
    }
    else if (operator1 == "/") {
        solution = division(num1, num2);
    }
    clearInput();
    clearParameters();
    updateSolution(solution);
    num1 = solution;
    return solution;
}

//function sends the solution to the display
function updateSolution(value) {
    value = value.toString();
    if (value.length > 10) {
        value = value.substring(0, 10);
    }
    currentInput.textContent = value;
}

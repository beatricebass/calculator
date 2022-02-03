// addition function
function addition(num1, num2) {
    return num1 + num2;
}

//addition arrow function
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
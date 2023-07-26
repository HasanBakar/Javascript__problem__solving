/*
Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/

function calculator(number1, number2, operator) {
    let result;
    switch (operator) {
        case "+":
             result = number1 + number2;
            break;
        case "-":
             result = number1 - number2;
            break;
        case "*":
             result = number1 * number2;
            break;
        case "/":
             result = number1 / number2;
            break;
        case "+":
             result = number1 + number2;
            break;
        case "+":
             result = number1 + number2;
            break;
    
        default:
            console.log("Invalid operator");
            return;
    }
      return result;
}

console.log( "Simple minus: ",calculator(12, 2, "-"));
console.log( "Simple Multiply operation: ",calculator(12, 2, "*"));
console.log( "Simple Divide operation: ",calculator(12, 2, "/"));
console.log( "Simple plus operation: ",calculator(12, 2, "+"));
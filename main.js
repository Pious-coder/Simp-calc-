alert(`Hi, I am Detorlar Mubarak 
I'm a Frontend web developer. I built this simple calculator, how about you try it out 😅 yeah?`);

console.log('alert');



//Program for a simple calculator

const operator = prompt("Enter operator (either +,-,* or /):");

const number1 = parseFloat(prompt("Enter first number:"));
const number2 = parseFloat(
  prompt(`Enter second number: ${number1} ${operator}`)
);

let result;

if (operator == "+") {
  result = number1 + number2;
  alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
} else if (operator == "-") {
  result = number1 - number2;
  alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
} else if (operator == "*") {
  result = number1 * number2;
  alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
} else if (operator == "/") {
  result = number1 / number2;
  alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
} else {
  alert("Invalid Operator");
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
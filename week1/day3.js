/*
 *  Day 3 - Exercise 1: Simple Calculator
 *  Create a calculator that performs basic operations.
 */

let num1 = 10;
let num2 = 5;

// Addition
sum = num1 + num2;
console.log(`Sum: ${sum}`);

// Subtraction
difference = num1 - num2;
console.log(`Difference: ${difference}`);

// Multiplication
product = num1 * num2;
console.log(`Product: ${product}`);

// Division (Handles Division by 0)
// used !== for strict inequality and avoids type conversion (coercion)
quotient = num1 !== 0 ? num1 / num2 : "Undefined";
console.log(`Quotient: ${quotient}`);

/*
 *  Day 3 - Exercise 2: Even or Odd Checker
 *  Determine if a number is even or odd.
 */

let number = 3;
// used === for strict equality and avoids type conversion (coercion)
result = number % 2 === 0 ? "even" : "odd";
console.log(`The number ${number} is ${result}`);

/*
 *  Day 3 - Exercise 3: Number Comparison
 *  Compare two numbers and determine their relationship.
 */

let no1 = 23;
let no2 = 30;
console.log(`Is ${no1} less than ${no2}? ${no1 < no2}`);
console.log(`Is ${no1} less than or equal to ${no2}? ${no1 <= no2}`);
console.log(`Is ${no1} greater than ${no2}? ${no1 > no2}`);
console.log(`Is ${no1} greater than or equal to ${no2}? ${no1 >= no2}`);
console.log(`Is ${no1} equal to ${no2}? ${no1 == no2}`);
console.log(`Is ${no1} not equal to ${no2}? ${no1 != no2}`);
console.log(`Is ${no1} strictly equal to ${no2}? ${no1 === no2}`);
console.log(`Is ${no1} strictly not equal to ${no2}? ${no1 !== no2}`);
console.log(`The highest number is ${no1 > no2 ? no1 : no2}`);
console.log(`The lowest number is ${no1 < no2 ? no1 : no2}`);
console.log(`The ${no1} and ${no2} are ${no1 === no2 ? "equal" : "not equal"}`);
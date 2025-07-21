/*
 *  // Day 15 - Exercise 1: Callback Function Practice
 *  Write a function that takes another function as a parameter.
 */

// Different callback functions
function doubleNumber(number) {
  return `Doubled: ${number} * 2 = ${number * 2}`;
}

function squareNumber(number) {
  return `Squared: ${number} * ${number} = ${number * number}`;
}

function incrementNumber(number) {
  return `Incremented: ${number} + 1 = ${number + 1}`;
}

// Main function that takes a number and a callback
function transformNumber(number, callback) {
  console.log(callback(number));
}

// Testing with different callbacks
const number1 = 10;

transformNumber(number1, doubleNumber);
transformNumber(number1, squareNumber);
transformNumber(number1, incrementNumber);

/*
 *  // Day 15 - Exercise 2: Custom Filter Function
 *  Create a function that filters an array based on a callback function.
 */

// Different filter criteria as callback functions
function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isGreaterThanFive(num) {
  return num > 5;
}

// Main function that filters an array based on a callback
function filterArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Testing with different filters
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\nEven numbers:", filterArray(numbers2, isEven));
console.log("Odd numbers:", filterArray(numbers2, isOdd));
console.log("Greater than 5:", filterArray(numbers2, isGreaterThanFive));

/*
 *  // Day 15 - Exercise 3: Array Transformer
 *  Build a function that applies a transformation to each element of an array.
 */

// Different callback functions
function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

function increment(num) {
  return num + 1;
}

// Main function that transforms each element using a callback
function transformArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// Testing with different filters
const numbers = [1, 2, 3, 4, 5];

console.log("\nDoubled:", transformArray(numbers, double));
console.log("Squared:", transformArray(numbers, square));
console.log("Incremented:", transformArray(numbers, increment));

/**
 * Loop Type	Use When...
 * for	        You need indexes or want full control
 * for...of	    You just need the values
 * for...in	    You’re working with object keys
 */

/*
 *  // Day 10 - Exercise 1: Array Sum Calculator
 *  Calculate the sum of all numbers in an array.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let number of numbers) {
  console.log(
    `The number to be added: ${number} | Running total: ${(sum += number)}`
  );
}
console.log(`Final Sum: ${sum}`);

/*
 *  // Day 10 - Exercise 2: Name List Processor
 *  Process an array of names with their indices.
 */

const names = ["Cedrick", "Rj", "Harold", "Paulo", "Borgy"];

// Use for...of to display each name
for (let name of names) {
  console.log(name);
}

// Use traditional for loop to display names with indices
for (let index = 0; index < names.length; index++) {
  console.log(`Index ${index}: ${names[index]}`);
}

/*
 *  // Day 10 - Exercise 3: Number Filter
 *  Find all numbers greater than 10 in an array.
 */

const mixedNumbers = [20, 1, 50, 12, 7, 8, 16, 30, 5, 2, 100];
let filteredNumbers = [];

for (let idx = 0; idx < mixedNumbers.length; idx++) {
  if (mixedNumbers[idx] > 10) {
    filteredNumbers.push(mixedNumbers[idx]);
  }
}
console.log(`Original Arrays: ${mixedNumbers}`);
console.log(`Filtered Arrays: ${filteredNumbers}`);

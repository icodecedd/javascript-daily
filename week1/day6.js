/*
 *  Day 6 - Exercise 1: Input Validator
 *  Use a do-while loop to keep asking for input until valid.
 */

// pretend these are entered by user the user
let inputs = ["1234", "admin", "letmein", "password123"];
let attempts = 0;
let index = 0;
let input;

do {
  input = inputs[index];
  console.log(`Attempt ${attempts + 1}: "${input}"`);
  index++;
  attempts++;
} while (input !== "password123");

console.log(`Access granted after ${attempts} attempt(s).`);

/*
 *  Day 6 - Exercise 2: Even Number Filter
 *  Print even numbers from 1 to 50, skipping multiples of 10.
 */

for (let num = 1; num <= 50; num++) {
  if (num % 10 === 0) {
    continue;
  }
  if (num % 2 === 0) {
    console.log(num);
  }
}

/*
 *  Day 6 - Exercise 3: Star Pattern
 *  Create a triangle pattern using nested loops.
 */

for (let row = 1; row <= 5; row++) {
  let stars = "";
  for (let col = 1; col <= row; col++) {
    stars += "*";
  }
  console.log(stars);
}

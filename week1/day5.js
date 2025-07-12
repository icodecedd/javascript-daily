/*
 *  Day 5 - Exercise 1: Number Printer
 *  Print numbers from 1 to 20 using a for loop.
 */

let total = 0;

for (let no = 1; no <= 20; no++) {
  total += 1;
  console.log(`${no}`);
}
console.log(`The total numbers printed: ${total}`);

/*
 *  Day 5 - Exercise 2: Sum Calculator
 *  Calculate the sum of numbers from 1 to 100 using a while loop.
 */

let track = 1;
let sum = 0;
let addedNumbers = 0;

while (track <= 100) {
  sum += track;
  addedNumbers += 1;
  track += 1;
}

console.log(`The final sum: ${sum}`);
console.log(`The added numbers: ${addedNumbers}`);

/*
 *  Day 5 - Exercise 3: Multiplication Table
 *  Create a multiplication table for any number.
 */

let chooseNumber = 10;

for (let num = 1; num <= 10; num++) {
  console.log(`${chooseNumber} x ${num} = ${chooseNumber * num}`);
}

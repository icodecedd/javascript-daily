/*
 *  // Day 12 - Exercise 1: Sum Calculator with Reduce
 *  Use reduce() to calculate the sum of all numbers.
 */

const numbers = [10, 11, 12, 13, 14, 15];

console.log("Using reduce():");
const sumReduce = numbers.reduce((sum, num, index) => {
  console.log(`Step ${index + 1}: ${sum} + ${num} = ${sum + num}`);
  return sum + num;
}, 0);

console.log(`Total Sum (reduce): ${sumReduce}\n`);

console.log("Using tradinal for()");
let sumLoop = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log(
    `Step ${i + 1}: ${sumLoop} + ${numbers[i]} = ${sumLoop + numbers[i]}`
  );
  sumLoop += numbers[i];
}
console.log(`Total Sum (for loop): ${sumLoop}`);
/*
 *  // Day 12 - Exercise 2: Number Finder
 *  Find the first number greater than 50 in an array.
 */

console.log("\nUsing find()");
const randomNumbers = [10, 25, 45, 30, 50, 70, 20];

const foundNumber = randomNumbers.find((num) => num > 50);

if (foundNumber !== undefined) {
  const index = randomNumbers.indexOf(foundNumber);
  console.log(`First number greater than 50: ${foundNumber} (Index: ${index})`);
} else {
  console.log("No number greater than 50 found.");
}

/*
 *  // Day 12 - Exercise 3: Array Validator
 *  Check if all numbers in an array are positive.
 */

console.log("\nUsing every() & some()");
const testArrays = [
  [1, 2, 3, 4],
  [-1, -2, -3, -4],
  [1, -2, 3, -4],
  [0, 2, 5, 8],
];

testArrays.forEach((arr, index) => {
  console.log(`\nTest Case ${index + 1}:`, arr);

  // Use every() to check if all numbers are positive
  const allPositive = arr.every((num) => num > 0);

  // Use some() to check if any numbers are negative
  const anyNegative = arr.some((num) => num < 0);

  console.log(`All numbers positive? ${allPositive}`);
  console.log(`Any numbers negative? ${anyNegative}`);
});

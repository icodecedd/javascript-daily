/*
 *  // Day 8 - Exercise 1: Function Conversion
 *  Convert regular functions to arrow functions.
 */

// Regular function
function sumOfTwoNumbers(numOne, numTwo) {
  return `Sum: ${numOne + numTwo}`;
}

// Function expression
const addTwoNumbers = function (numOne, numTwo) {
  return `Sum: ${numOne + numTwo}`;
};

// Arrow function
const getSum = (numOne, numTwo) => `Sum: ${numOne + numTwo}`;

let numOne = 2;
let numTwo = 18;

// Test all three versions
console.log(sumOfTwoNumbers(numOne, numTwo));
console.log(addTwoNumbers(numOne, numTwo));
console.log(getSum(numOne, numTwo));
/*
 *  // Day 8 - Exercise 2: Compound Interest Calculator
 *  Create a function that calculates compound interest.
 */

function calculateCompoundInterest(principal, rate, time, frequency) {
  // Convert percentage into decimal
  let convertedRate = rate / 100;

  // Calculates the compound interest using the formula A = P(1 + r/n)^(nt)
  let amount =
    principal * Math.pow(1 + convertedRate / frequency, frequency * time);

  // Get the actual interest
  let interest = amount - principal;

  return `Final Amount: ${amount.toFixed(2)}\nInterest: ${interest.toFixed(2)}`;
}

// Test with different scenarios
console.log(calculateCompoundInterest(1000, 5, 2, 1)); // Annually
console.log(calculateCompoundInterest(1500, 4.5, 3, 4)); // Quarterly
console.log(calculateCompoundInterest(2000, 6, 5, 12)); // Monthly

/*
 *  // Day 8 - Exercise 3: Palindrome Checker
 *  Write a function that checks if a string is a palindrome.
 */

function isPalindrome(word) {
  // Remove spaces and convert to lowercase
  let cleaned = word.replace(/ /g, "").toLowerCase();

  // Reverse the cleaned string
  let reversed = cleaned.split("").reverse().join("");

  // Compare original and reversed
  return cleaned === reversed;
}

let word = "Was it a car or a cat I saw";
console.log(`Is the word ${word}: ${isPalindrome(word)}`);

/*
 *  // Day 18 - Exercise 1: Email Validator
 *  Validate email addresses using regex.
 */

function validateEmail(email) {
  // regex pattern for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;

  return emailRegex.test(email);
}

const emails = [
  "user@example.com", // valid
  "john.doe@gmail.com", // valid
  "admin@mail.co", // valid
  "invalid-email@", // no domain
  "noatsymbol.com", // missing @
  "bad@domain", // no top-level domain
  "@nodomain.com", // missing username
  "wrong@.com", // missing domain name
];

emails.forEach((email) => {
  if (validateEmail(email)) {
    console.log(`${email} ✅ Valid`);
  } else {
    console.log(`${email} ❌ Invalid`);
  }
});

/*
 *  // Day 18 - Exercise 2: Number Extractor
 *  Extract all numbers from a string using regex.
 */

const mixedText =
  "Order #1203 was placed on 2023-07-24 and includes 3 items costing ₱250, ₱400, and ₱100.";

const numberPattern = /\d+/g; // \d matches digits, + means one or more, g = global match
const numbers = mixedText.match(numberPattern);

console.log("\nOriginal string:");
console.log(mixedText);

console.log("\nExtracted numbers:");
console.log(numbers);

console.log(`\nTotal numbers found: ${numbers.length}`);

/*

 *  // Day 18 - Exercise 3: Text Formatter
 *  Replace spaces with underscores using regex.
 */

const messyText = "This    is   a   string    with  irregular   spacing.";

const cleanedText = messyText.replace(/\s+/g, "_");

console.log("\nBefore formatting:");
console.log(messyText);

console.log("\nAfter formatting:");
console.log(cleanedText);

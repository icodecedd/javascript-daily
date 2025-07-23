/*
 *  // Day 17 - Exercise 1: Safe Division Function
 *  Write a function that safely divides two numbers.
 */

function divideNumbers(num1, num2) {
  try {
    // Validate inputs
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Invalid input: both values must be numbers.");
    }

    // Check for division by zero
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    // Perform division
    return num1 / num2;
  } catch (error) {
    // Return the error message instead of crashing
    return `Error: ${error.message}`;
  }
}

// Test with multiple cases
console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));
console.log(divideNumbers("10", 2));
console.log(divideNumbers(10, "x"));

/*
 *  // Day 17 - Exercise 2: Input Validator with Custom Errors
 *  // Create a function that validates user input and throws custom errors.
 */

function validateEmail(email) {
  try {
    // Check if input is a string
    if (typeof email !== "string") {
      throw new TypeError("Email must be a string.");
    }

    // Check if input is empty
    if (email.trim() === "") {
      throw new Error("Email cannot be empty.");
    }

    // Simple email regex for format checking
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format.");
    }

    // If everything passes
    return "Email is valid!";
  } catch (error) {
    // Handle and return user-friendly error message
    return `Error: ${error.message}`;
  }
}
// Test with multiple cases
console.log("\n" + validateEmail("user@example.com"));
console.log(validateEmail("userexample.com"));
console.log(validateEmail(""));
console.log(validateEmail(12345));

/*
 *  // Day 17 - Exercise 3: Error Logger
 *  Build a function that catches and logs different types of errors.
 */

// Parse user data (from a server or file)
function parseUserData(data) {
  if (typeof data !== "string") {
    throw new TypeError("User data must be a JSON string.");
  }
  return JSON.parse(data); // Could throw SyntaxError if JSON is broken
}

// Get a fruit from a fruit basket
function getFruit(fruitBasket, index) {
  if (index < 0 || index >= fruitBasket.length) {
    throw new RangeError("That fruit index doesn't exist.");
  }
  return fruitBasket[index];
}

// Log errors with timestamp
function logError(error) {
  console.error(
    `[${new Date().toISOString()}] ${error.name}: ${error.message}`
  );
}

try {
  // Example 1: Parse user data
  const user = parseUserData('{"name":"Alice"}');
  console.log("\nUser name:", user.name);

  // Example 2: Get a fruit
  const basket = ["apple", "banana", "mango"];
  console.log("Selected fruit:", getFruit(basket, 1)); // banana
  console.log("Selected fruit:", getFruit(basket, 5)); // Will throw error
} catch (error) {
  logError(error); // Handles both parsing and fruit errors
}

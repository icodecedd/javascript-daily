/*
 *  // Day 7 - Exercise 1: Circle Area Calculator
 *  Write a function that calculates the area of a circle.
 */

function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2); // used Math library for PI and Power
}

let radius = 3;

// Display area of a circle
console.log(`The area of the cicle: ${calculateCircleArea(radius).toFixed(2)}`);

/*
 *  // Day 7 - Exercise 2: Greeting Generator
 *  Create a function that generates personalized greetings.
 */

function getPersonalizedGreeting(name, time) {
  if (!name || name.trim() === "") {
    return "Please enter a valid name.";
  }

  const timeOfDay = time.toLowerCase();

  let greeting;

  if (timeOfDay === "morning") {
    greeting = "Good morning";
  } else if (timeOfDay === "afternoon") {
    greeting = "Good afternoon";
  } else if (timeOfDay === "evening") {
    greeting = "Good evening";
  } else {
    return "Please use 'morning', 'afternoon', or 'evening'.";
  }

  return `${greeting}, ${name.trim()}!`;
}

// Test with different names and times
console.log(getPersonalizedGreeting("Cedrick", "morning"));
console.log(getPersonalizedGreeting("Anna", "afternoon"));
console.log(getPersonalizedGreeting("Miguel", "evening"));
console.log(getPersonalizedGreeting(" ", "evening"));
console.log(getPersonalizedGreeting("John", "night"));
console.log(getPersonalizedGreeting("Jane", "MORNING"));

/*
 *  // Day 7 - Exercise 3: Maximum Finder
 *  Build a function that finds the maximum of three numbers.
 */

function findHighestNumber(numOne, numTwo, numThree) {
  if (numOne === numTwo && numTwo === numThree) {
    return `All numbers are equal: ${numOne}`;
  }

  let highest;

  if (numOne >= numTwo && numOne >= numThree) {
    highest = numOne;
  } else if (numTwo >= numOne && numTwo >= numThree) {
    highest = numTwo;
  } else {
    highest = numThree;
  }

  return `The highest number is ${highest}`;
}

// Test with various number combinations
console.log(findHighestNumber(14, 14, 14));
console.log(findHighestNumber(3, 7, 0));
console.log(findHighestNumber(12, 5, 19));

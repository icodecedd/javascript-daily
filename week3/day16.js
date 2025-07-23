/*
 *  // Day 16 - Exercise 1: Closure Example
 *  Create a function that returns another function (closure).
 */

// Outer function
function outerFunction() {
  let outerVariable = "Hello World!";

  // Inner function
  return function innerFunction() {
    console.log(`${outerVariable} This is Inner Function.\n`);
  };
}
// Call outerFunction, which returns innerFunction
const testClosure = outerFunction();
testClosure(); // Call the returned function

/*
 *  // Day 16 - Exercise 2: Counter with Closures
 *  Build a counter function that maintains its state using closures.
 */

function createCounter() {
  let count = 0; // Private variable

  return function increment() {
    count++;
    return count;
  };
}

const counterA = createCounter(); // Create first counter
console.log("First Counter:");
console.log(counterA());
console.log(counterA());
console.log(counterA());

const counterB = createCounter(); // Create a new independent counter
console.log("\nNew Indepent Counter");
console.log(counterB());
console.log(counterB());

/*
 *  // Day 16 - Exercise 3: Multiple Counter Factory
 *  Write a function that creates multiple independent counters.
 */

function factoryCounter() {
  let counter = 0;

  return {
    incrementCounter() {
      // increments the counter
      counter++;
      return counter;
    },
    decrementCounter() {
      //decrements the counter
      counter--;
      return counter;
    },
    getValue() {
      // returns the counter's value
      return counter;
    },
  };
}

// Test with multiple counters
const firstCounter = factoryCounter();
console.log("\nFirst Counter:");
console.log(firstCounter.incrementCounter());
console.log(firstCounter.incrementCounter());
console.log(firstCounter.decrementCounter());
console.log(firstCounter.getValue()); // 1

const secondCounter = factoryCounter();
console.log("\nSecond Counter:");
console.log(secondCounter.incrementCounter());
console.log(secondCounter.getValue());

const thirdCounter = factoryCounter();
console.log("\nThird Counter:");
console.log(thirdCounter.decrementCounter());
console.log(thirdCounter.decrementCounter());
console.log(thirdCounter.decrementCounter());
console.log(thirdCounter.getValue());

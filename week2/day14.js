/*
 *  // Day 14 - Exercise 1: Car Information System
 *  Create a calculator object with arithmetic methods.
 */

const calculator = {
  lastResult: 0,

  //
  add(a, b) {
    this.lastResult = a + b;
    return this.lastResult;
  },

  subtract(a, b) {
    this.lastResult = a - b;
    return this.lastResult;
  },

  multiply(a, b) {
    this.lastResult = a * b;
    return this.lastResult;
  },

  divide(a, b) {
    if (b === 0) {
      console.log("Error: Division by zero!");
      return null;
    }
    this.lastResult = a / b;
    return this.lastResult;
  },

  displayLastResult() {
    console.log(`Last result: ${this.lastResult}\n`);
  },
};

// --- Test all operations ---
console.log("Add:", calculator.add(10, 5));
console.log("Subtract:", calculator.subtract(10, 5));
console.log("Multiply:", calculator.multiply(10, 5));
console.log("Divide:", calculator.divide(10, 5));
calculator.displayLastResult();

/*
 *  // Day 14 - Exercise 2: Car Information System
 *  Build a bank account object with deposit and withdraw methods.
 */

const bankAccount = {
  owner: "Cedrick Mariano",
  balance: 2000, // initial balance

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  },

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds!");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
  },

  displayBalance() {
    console.log(`Current balance: $${this.balance}`);
  },
};

// --- Test the account ---
bankAccount.displayBalance();
bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.withdraw(2000);

/*
 *  // Day 14 - Exercise 3: Car Information System
 *  Practice extracting properties from objects using destructuring.
 */

const person = {
  name: "Alice",
  age: 25,
  job: "Software Engineer",
  city: "New York",
  hobbies: ["reading", "traveling", "gaming"],
};
console.log("\nDestructuring to extract specific properties");
const { name, age } = person;
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

console.log("\nDestructuring with default values");
const { country = "USA" } = person;
console.log(country); // "USA" (default used because person.country is undefined)

console.log("\nDestructuring in function paramaters");
function greetPerson({ name, job }) {
  console.log(`Hello, my name is ${name} and I work as a ${job}.`);
}

greetPerson(person);

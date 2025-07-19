/*
 *  // Day 11 - Exercise 1: Number Doubler
 *  Use map() to create a new array with doubled numbers.
 */
console.log("Using map()");
const numbers = [1, 2, 3, 4, 5];

numbers.map((number) =>
  console.log(`Original: ${number} -> Doubled: ${number * 2}`)
);

/*
 *  // Day 11 - Exercise 2: Even Number Filter
 *  Filter an array to get only even numbers.
 */
console.log("\nUsing filter()");
const mixedNumbers = [1, 4, 6, 3, 73, 23, 64, 34, 5, 10];
const filteredNumbers = mixedNumbers.filter((number) => number % 2 === 0);

console.log(`Original mixed numbers: ${mixedNumbers.join(", ")}`);
console.log(`Filtered even numbers: ${filteredNumbers.join(", ")}`);
console.log(`Count of even numbers: ${filteredNumbers.length}`);

/*
 *  // Day 11 - Exercise 3: Custom Message Generator
 *  Use forEach() to create custom messages for each array element.
 */

console.log("\nUsing forEach()");
const names = ["Devin", "Cursor", "Lovable", "ChatGPT", "Claude"];
const customMessage = [
  "please develop a secure email authentication system",
  "start building a robust full-stack mobile app using React Native",
  "design a professional wireframe for the admin dashboard",
  "provide a clear and comprehensive explanation of all React hooks",
  "create a detailed and beginner-friendly tutorial on TypeScript",
];

names.forEach((name, index) =>
  console.log(
    `${index + 1}. Hello ${name}, your task is to ${customMessage[index]}.`
  )
);

/*
 *  Day 2 - Exercise 1: String Transformation
 *  Take a sentence and perform various string operations.
 */

let sentence1 = "Learning JavaScript daily for 30 days.";
let sentence2 = "Practice makes progress.";

console.log(sentence1.toUpperCase());
console.log(sentence1.toLowerCase());
console.log(`Length: ${sentence1.length}`);
console.log(`First 8 characters: ${sentence1.slice(0, 8)}`);

let result = sentence1.concat(sentence2.replace("Practice", " Practice"));

console.log(result);
console.log(result.toUpperCase());
console.log(result.toLowerCase());
console.log(`Length: ${result.length}`);
console.log(`Contains "progress"? ${result.includes("progress")}`);

/*
 *  Day 2 - Exercise 2: Name Formatter
 *  Create a full name using template literals and formatting.
 */

let firstName = "Cedrick Joseph";
let lastName = "Mariano";
let fullName = `${firstName} ${lastName}`;
let greeting = `Hi there! I'm ${fullName}, an upcoming third year BSIT student at the 
Polytechnic University of the Philippines - San Juan. Nice to meet you!`;
console.log(greeting);

/*
 *  Day 2 - Exercise 3: String Analysis
 *  Analyze a string for specific characteristics.
 */

let sentence3 = "JavaScript is a powerful programming language.";
let subString = sentence3.substring(0, 5); // can also use "slice" method

console.log(`First 5 characters: ${subString}`);
console.log(`Contains "JavaScript"? ${sentence3.includes("JavaScript")}`);
console.log(`Position of "programming": ${sentence3.indexOf("programming")}`);

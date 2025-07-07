/*
*  Day 1 - Exercise 1: Personal Information
*  Create variables to store your personal information and display them.
*/

let name = "Cedrick";
let age = 20;
let color = "Blue";
let isLikesProgramming = true;
let result = isLikesProgramming ? "I like Programming" : "I don't like Programming";

console.log(`My name is ${name}. I am ${age} years old. My favorite color is ${color} and ${result}.`)

/*
*  Day 1 - Exercise 2: Rectangle Area Calculator
*  Calculate the area of a rectangle and display the result.
*/

let length = 10.5;
let width = 3;
let area = length * width;

console.log(`The area of rectangle is ${area}`)

/*
*  Day 1 - Exercise 3: Age Verification
*  Create a program that checks if someone can vote based on their age.
*/

let personAge = 17;
let isEligible = personAge >= 18 ? "eligible to vote" : "not eligible to vote";

console.log(`This person is ${personAge} years old and is ${isEligible}.`)

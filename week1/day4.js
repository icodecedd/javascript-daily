/*
 *  Day 4 - Exercise 1: Voting Eligibility
 *  Create a comprehensive voting eligibility checker.
 */

let personAge = 17;
let isPersonCitizen = false;

if (personAge >= 18 && isPersonCitizen) {
  console.log("You are eligible to vote, and you are a citizen.");
} else if (personAge >= 18 && !isPersonCitizen) {
  console.log("You are eligible to vote, but you are not a citizen.");
} else if (personAge < 18 && isPersonCitizen) {
  console.log("You are not eligible to vote, but you are a citizen.");
} else {
  console.log("You are not eligible to vote, and you are not a citizen.");
}

/*
 *  Day 4 - Exercise 2: Grade Calculator
 *  Assign letter grades based on numeric scores.
 */

let score = 78;
let letterGrade = "";

if (score >= 90 && score <= 100) {
  letterGrade = "A";
} else if (score >= 80 && score <= 89) {
  letterGrade = "B";
} else if (score >= 70 && score <= 79) {
  letterGrade = "C";
} else if (score >= 60 && score <= 69) {
  letterGrade = "D";
} else if (score >= 0 && score <= 59) {
  letterGrade = "F";
} else {
  letterGrade = "Invalid Score";
}

// Display the numeric score and corresponding letter grade
console.log(`The result of your grade ${score}: ${letterGrade}`);

/*
 *  Day 4 - Exercise 3: Leap Year Checker
 *  Determine if a year is a leap year.
 */

let year = 2004;

// Traditional If/Else Statements
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

// Ternary Operator
let isLeapYear =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;

console.log(isLeapYear);

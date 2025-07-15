/*
 *  // Day 9 - Exercise 1: Movie Collection
 *  Create and manipulate an array of your favorite movies.
 */

// Create an array with at least 5 movies
let movies = [
  "John Wick 4",
  "20th Century Girl",
  "Avatar 2",
  "Pandora",
  "Man in Love",
];

// Access and display the first and last movies
console.log(`The first movie is titled: ${movies[0]}`);
console.log(`The last movie is titled: ${movies[4]}`);

// Display the total number of movies
console.log(`The total number of movies: ${movies.length}`);

// Add a new movie to the beginning and end

//unshift - inserts an element at the beginning
movies.unshift("Your Name");
console.log(movies);

// push - inserts an element at the end
movies.push("18x2 Beyond Youthful Days");
console.log(movies);

/*
 *  // Day 9 - Exercise 2: Array Manipulation
 *  Practice adding and removing elements from arrays.
 */

// Start with an empty array
let anime = [];
console.log(anime);

// Add elements using push(), unshift()\
anime.unshift("Wind Breaker");
console.log(anime);
anime.push("Solo Leveling");
console.log(anime);
anime.unshift("Sakamoto Days");
console.log(anime);
anime.push("Naruto Shippuden");
console.log(anime);
anime.unshift("Classroom of the Elite");
console.log(anime);

// Remove elements using pop(), shift()
anime.shift(anime);
console.log(anime);
anime.pop(anime);
console.log(anime);

/*
 *  // Day 9 - Exercise 3: Largest Number Finder
 *  Create a function that finds the largest number in an array.
 */

// Function should take an array of numbers as parameter
function findLargestNumber(array) {
  largest = -1;

  // Handle empty arrays
  if (array.length === 0) console.log(`This is an empty array.`);

  for (let num = 0; num <= array.length; num++) {
    if (array[num] > largest) largest = array[num];
  }

  // Return the largest number
  return largest;
}

// Test with different arrays
console.log(
  `The largest number in 1, 2, 3, 4, 5, 6, 7 is ${findLargestNumber([
    1, 2, 3, 4, 5, 6, 7,
  ])}`
);
console.log(
  `The largest number in 12, 24, 3, 45, 90 is ${findLargestNumber([
    12, 24, 3, 45, 90,
  ])}`
);
console.log(
  `The largest number in 62, 313, 4, 56 is ${findLargestNumber([
    62, 313, 4, 56,
  ])}`
);

/*
 *  // Day 13 - Exercise 1: Person Profile
 *  Create a person object with various properties.
 */

const firstPerson = {
  name: "Alice Johnson",
  age: 28,
  city: "New York",
  occupation: "Software Engineer",
};

// Access properties using dot notation
const nameDot = firstPerson.name;
const ageDot = firstPerson.age;

// Access properties using bracket notation
const cityBracket = firstPerson["city"];
const occupationBracket = firstPerson["occupation"];

console.log("Person Information:");
console.log(`Name: ${nameDot}`);
console.log(`Age: ${ageDot}`);
console.log(`City: ${cityBracket}`);
console.log(`Occupation: ${occupationBracket}\n`);

/*
 *  // Day 13 - Exercise 2: Object with Methods
 *  Add methods to a person object.
 */

const secondPerson = {
  name: "John Doe",
  age: 24,
  city: "Paris",
  occupation: "Full Stack Developer",

  // Add a method that introduces the person
  introduce() {
    return `Hi, I'm ${secondPerson.name}, a ${secondPerson.age}-year-old ${secondPerson.occupation} from ${secondPerson.city}.`;
  },

  // Add a method that calculates birth year
  getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - secondPerson.age;
  },
};

console.log(secondPerson.introduce());
console.log(`I was born in ${secondPerson.getBirthYear()}.\n`);

/*
 *  // Day 13 - Exercise 3: Car Information System
 *  Create a car object and access its properties dynamically.
 */
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Blue",
};

function getCarProperty(obj, propName) {
  if (!propName) return undefined;
  const key = propName.trim().toLowerCase(); // normalize user input

  // Map normalized input to the actual property names in the object
  const propMap = {
    make: "make",
    model: "model",
    year: "year",
    color: "color",
  };
  const actualProp = propMap[key];
  return actualProp ? obj[actualProp] : undefined; // bracket notation!
}

// Used forEach to test since there is no promp() method
["make", "model", "year", "color", "mileage"].forEach((test) => {
  const value = getCarProperty(car, test);
  if (value !== undefined) {
    console.log(`Car ${test}: ${value}`);
  } else {
    console.log(`Property "${test}" not found.`);
  }
});

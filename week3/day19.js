/*

 *  // Day 19 - Exercise 1: Current Date and Time Display
 *  Create a function that displays current date and time.
 */

function formatDateAndTime() {
  const now = new Date();

  // Date Formats
  const dateISO = now.toISOString(); // ISO format
  const dateLocale = now.toLocaleDateString(); // Local format
  const dateCustom = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;

  // Time Format
  const time = now.toLocaleTimeString(); // e.g., 10:23:45 AM

  // Day and Month
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = days[now.getDay()];
  const monthName = months[now.getMonth()];

  console.clear(); // Clear the console each second for better display
  console.log(`ISO Date: ${dateISO}`);
  console.log(`Locale Date: ${dateLocale}`);
  console.log(`Custom Date: ${dateCustom}`);
  console.log(`Time: ${time}`);
  console.log(`Day of the Week: ${dayOfWeek}`);
  console.log(`Month Name: ${monthName}`);
}

// Update every second
// setInterval(formatDateAndTime, 1000);

formatDateAndTime();

/*

 *  // Day 19 - Exercise 2: Date Difference Calculator
 *  Calculate the difference between two dates.
 */

function getTimeDifference(date1, date2) {
  const diffInMs = Math.abs(date2 - date1); // absolute difference in milliseconds

  const totalMinutes = Math.floor(diffInMs / (1000 * 60));
  const totalHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  console.log(`\nDate 1: ${date1}`);
  console.log(`Date 2: ${date2}`);
  console.log(`Difference:`);
  console.log(`→ ${totalDays} day(s)`);
  console.log(`→ ${totalHours} hour(s)`);
  console.log(`→ ${totalMinutes} minute(s)`);
}

// Example usage:
const now = new Date(); // current date and time
const futureDate = new Date("2025-08-15T15:30:00"); // you can change this to any date

getTimeDifference(now, futureDate);

/*

 *  // Day 19 - Exercise 3: Date Formatter
 *  Format dates in different international formats.
 */

const today = new Date();

// Extract date components
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
const day = String(today.getDate()).padStart(2, "0");

// US format: MM/DD/YYYY
const usFormat = `${month}/${day}/${year}`;

// European format: DD/MM/YYYY
const euFormat = `${day}/${month}/${year}`;

// ISO format: YYYY-MM-DD
const isoFormat = `${year}-${month}-${day}`;

// Display all formats
console.log("\nUS Format: ", usFormat);
console.log("European Format: ", euFormat);
console.log("ISO Format: ", isoFormat);

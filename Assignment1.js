// Assignment research and come up with examples on Object and Array data types. Show how to access items of the object and of an array.

// Js Objects -> they are  variables that can store both values and functions.
// Values are stored as key:value pairs called properties.
// Example:
let student = {
    name: "Chanya",
    age: 18,
    gender:"Female"
};
// How to access items

// Dot Notation
console.log(student.name);   // Chanya
// Bracket notation
console.log(student["name"]); 

// Js Array-> it stores multiple values in a single variable
let cars = [
  "Porsche",
  "Mazda",
  "BMW"
];
console.log(cars[0]);  // Porsche

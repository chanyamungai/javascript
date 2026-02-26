// Object data type ->
// An Object in js is a data type that stores data in form of key value pairs 
let person = {
    name : "Chanya Mungai",
    Age : 18,
    isRegistered  : true
};

console.log("The details of the person is:",person)

// First method is by use of the square brackets
console.log(person["Age"])

// Second method by use of dot notation
console.log(person.name)

console.log(type(person))

// Array data type
// This refers to a collection of items that are on indexes
fruits=["Mango","Pineapple","Apple","Banana","Melon","Lemon","Grapes"]
console.log("The entire array of fruits is:",fruits)


// To access  the items of an array we use index
console.log(fruits[3])

// You can slice items of an array
console.log(fruits.slice(2,5))

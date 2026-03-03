// read on arrow funcctions with and without parameters
// Arrow functions with parameters
// Arrow functions are mainly used to write functions in a shorter, cleaner way in JavaScript
let greet = (name) => {
    console.log("Hello ", name);
};

greet("Chanya");

// Arrow functions witthout parameter
let sayHello = () => {
    console.log("Hello!");
};

sayHello();

// Moduless in javascript
// Modules is a js file containing variables functions and classes
// There are two main modules 
// 1.export
// 2.import

export function add(a, b) {
    return a + b;
}

// in the other file
import {add} from "./math.js";
console.log(add(4,5));

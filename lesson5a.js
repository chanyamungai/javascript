// Arrow functions 
// This is a function that was introduced in the ECMA Script 6 and they give us the latest /modern way of defining functions in a compact manner
// This are functions which at times the arrow function can be said to be anonymous function- this is because they use the name of the variables they are contained in

const sayHello =() =>{
    console.log("This is an arrow function")
}

sayHello()

console.log("===============")
// Create an arrow function that is able to find the product of three numbers
let product = (x,y,z) =>{
    multiplication=x*y*z
    console.log("The product of the numbers is:",multiplication)
}

product(4,5,6)
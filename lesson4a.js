// Functions with parameters
// Parameters are values that get passed as arguements  when we invoke a function
// They help us create fucntions that are reusable

function greeting(name){
    console.log("Hello",name,"How have yu been")
}
greeting("Chanya Mungai")
greeting("John James")

console.log("==========")

// Below is a function to calculate the sum of two numbers

function addition(number1,number2){
    sum=number1+number2
    console.log("The sum of the numbers is",sum)
}

addition(45,20)
addition(60,20)

// By use of a function that accepts parameters calcultaethe area of triangle whose base is 20cm and height is 12 cm
function triangle(base,height){
    area=(base*height)/2
    console.log("The area of the triangle is:",area)
}
triangle(20,12)

// Find the simple interest given the principle as 50000 rate as 5% and time as 8 years
function simpleinterest(principle,rate,time){
    interest=(principle*rate*time)/100
    console.log("Simple interest:",interest)
}
simpleinterest(50000,5,8)
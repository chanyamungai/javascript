// Arrow functions with parameters
const greet=(name)=>{
    console.log("Hello"+name+"How have you been? I trust that you are good")
}

greet("James");
greet("Chanya");

// Example 2
console.log("==============")
// Below is a function to find the area of a circle
const circlearea =(pi,radius)=>{
    let area= pi*radius*radius
    console.log("The area of the circle is "+ area+ "cm\u00B2")
}
circlearea(3.142,7)
circlearea(3.142,28)

// Come up with your own example of an arrow function that utilises three parameters
console.log("==============")
const boxvolume =(x,y,z)=>{
    let volume=x*y*z
    console.log("The volume of the box is:"+volume+"cm\u00B2")
}

boxvolume(4,7,10)
boxvolume(9,8,4)
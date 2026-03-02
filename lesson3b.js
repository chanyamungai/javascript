// While loop
// Below is a simple syntax of the while loop
// 1.Intialization of a variable
// 2.While keyword
// 3.Condition to be checked
// 4.Body of the while loop
// increment/decrement

let i = 0
while(i<=10){
    console.log(i);
    i++
}

console.log("==================")
// come up with an example of a js map loop
// It creates a new array 

let numbers =[1,2,3]
let doubled = numbers.map(num=>num*2);
console.log(doubled);

const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]
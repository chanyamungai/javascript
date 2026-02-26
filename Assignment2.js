// What is the difference  between json in api, dictionary in python and object  in javascript
// An object in javascript the keys are not in quotation marks unlike dictionary in python has quotation marks in yhe key while a json in api is a data format used to send data between frontend and backend of a website

// How to convert an object in js to dictionary in python
// To convert it you must convert the object to JSON then into python for exmaple :
let student= {
    name : "Chanya",
    Age : 18,
    Gender: "female"
};

// Convert JS object to JSON string
let jsonData=JSON.stringify(student);

console.log(jsonData);

// import json
// json_Data ={"name","Chanya","Age",18,"Gender","Female"}
// Convert json string into python dictionary

// person = json.loads(json_data)
// print(person)

// json.loads() converts  into python dictionary


// What is the use pof triple===in js with example
// it is used to compare values without converting their data types


let distance = 750;

if (distance>=0 && distance <=100) {
    console.log("Pay 5 USD")
}
else if (distance>=101&& distance<=500){
    console.log("Pay 10 USD")
}
else if (distance>=501 && distance<=1000){
    console.log("Pay 20 USD")
}
else if(distance>=1001){
    console.log("Pay 40 USD")
}
else {
    console.log("Invalid input")
}





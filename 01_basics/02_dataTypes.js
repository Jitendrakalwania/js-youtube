"use strict"; // treat all JS code as newer version

//  alert(3+3) // we are using node.js, not browser because if we use the same syntax in browser the result will be = 6 , but here in node.js it shows error

console.log(3
    +3) // code readablity should be hight always so we can right this as console.log(3+3)

    console.log("Jitendra")

    let name = "Jitendra"
    let age = 18
    let isLoggedIn = false
    // let state;
    let state = "null"

    // Here, Jitendra is string data type | 18 is number type of dataType | false is Boolean type of dataType | state here it comes in undefined data type | null so, here null is used when there is no result found instead of zero we use null

// ********Primitive data types**********

    // number => 2 to 53
    // bigint for too big numbers
    // string => "" , ''
    // boolean => true/false or yes/no
    // null => standalone value
    // undefined =>
    // symbol => use of identify uniqueness

    // object

    console.log(typeof undefined); // undefined
    console.log(typeof null); //object

// ********* Refrence (Non primitive)

/*
1. Array => when you have to store multiple values in one variable array is used -
➤ Example:let colors = ["red", "blue", "green"];

➤ Remember rule 🧠

Array = dabba jisme items line me rakhe hote hain
Index 0 se start hota hai
➤ Access kaise kare?
console.log(colors[0]); // red
console.log(colors[1]); // blue


2. Object (Key : Value) => when we have to store details of anything like - (name, age, city) Object is used -

➤ Example:
let person = {
name: "Ravi",
age: 25,
city: "Delhi"
};

➤ Access kaise kare?
console.log(person.name); // Ravi
console.log(person.age); // 25

➤ Remember rule 🧠
Object = form jaisa hota hai
Har cheez ka label (key) hota hai


3. Function => function is like a block code and work only when we give call - 

➤ Example:
function greet(name) {
return "Hi " + name;
}

console.log(greet("Jitendra"));

➤ Output:
Hi Jitendra

➤ Remember rule 🧠
Function = machine
Input do → Output lo  // like a => calculator, washing machine, phone call


🔥 Combo Example (Array + Object + Function)
let users = [
{ name: "Aman", age: 20 },
{ name: "Ravi", age: 25 }
];

function getName(user) {
return user.name;
}

console.log(getName(users[1]));

➤ Output: Ravi
*/
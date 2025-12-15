/* Conversion - sometimes JavaScript need to change data from one type to another like - ice - water in real  life and in JS - String → Number | Number → String | Boolean → Number */

// let score = 33
// let score = "33"
let score = "33abc";
// let score = null
// let score = undefined
// let score = true
// let score = "Jitendra"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);   //Always check this

// Agar tum sirf typeof valueInNumber check karte And -
// 👉 console.log(valueInNumber) check hi nahi karte
// ❗toh tumhe lagega ki value ek valid NUMBER hai
// jabki andar se wo NaN hoti hai ya kuch aur hoti hai 😵

// Golden rule (lock this 🔒)

// typeof sirf category batata hai
// value valid hai ya nahi — ye nahi batata

// Isliye:

// NaN → type = number

// but value = invalid

// ✅ JavaScript blindly convert karta hai
// ✅ typeof pe bharosa karna dangerous ho sakta hai
// ✅ NaN ko hamesha check karna chahiye

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "Jitendra";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Jitendra" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

//**************************************Operations************************************

// Operations mean: 👉 doing something with values (doing maths & actions)

let value = 3;
let negvalue = -value;
// console.log(negvalue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " Jitendra";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + "2" + 2);
console.log(1 + 2 + "2")
const name = "Jitendra";
const repoCount = 50;

// console.log(name + repoCount + "Hello")  this concatinate is outdated use backticks instead of this =>

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);

// one more way to define string is =>

const gameName = new String('Jitendra');

console.log(gameName[0]); 
/*
String {'Jitendra'}
0
: 
"J"
1
: 
"i"
2
: 
"t"
3
: 
"e"
4
: 
"n"
5
: 
"d"
6
: 
"r"
7
: 
"a"
length: 8  */

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));


const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringone = "  jitendra  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://jitendra.com/jitendra%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

/*

1️⃣ What is a String? 🤔
A string is text.
Anything written inside quotes is a string.
Examples:
"Hello"
"jitendra"
"123"
"Hello World!"
❗ Even numbers become text if they are inside quotes:

"10"   // string
10     // number

2️⃣ How to create a String 🧵
You can create strings in 3 ways:

1. Double quotes " "
let name = "Jitendra";

2. Single quotes ' '
let city = 'Jaipur';

3. Backticks ` ` (template strings)
let msg = `Hello Jitendra`;

✔ All three are correct
✔ Beginners mostly use " " or ' '

3️⃣ Why Strings are IMMUTABLE 🧱 (Very Important)
Immutable means:
👉 You cannot change a string once it is created

Example:
let name = "jitendra";
name[0] = "J";

console.log(name); // jitendra ❌ not changed

Why?
➡ JavaScript does not allow changing characters directly

Correct way:
name = "Jitendra"; // new string created

🧠 Rule:
Every string change creates a new string

4️⃣ String Length 📏

To count characters in a string:

let word = "Hello";
console.log(word.length);

Output:5

Spaces are also counted:

"Hello World".length // 11

5️⃣ Accessing Characters (Index) 🔢

Each character has a number (index)
Index starts from 0

let name = "Jitendra";

console.log(name[0]); // J
console.log(name[1]); // i
console.log(name[7]); // a

📌 Last index:
name.length - 1

6️⃣ String Concatenation ➕

Concatenation means joining strings

Using +
let first = "Hello";
let second = "World";

console.log(first + " " + second);

Output:Hello World

Using concat()
let a = "Hello";
let b = a.concat(" ", "World");

console.log(b);

7️⃣ Template Literals (Best Way) 🧠✨

Using backticks ` ` and ${}

let name = "Jitendra";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old`);

✔ Easy
✔ Clean
✔ Recommended

8️⃣ Common String Methods (Very Important) 🛠️
🔹 toUpperCase()
"hello".toUpperCase(); // HELLO

🔹 toLowerCase()
"HELLO".toLowerCase(); // hello

🔹 trim() (You already used this 👏)

Removes spaces from start and end

let str = "  jitendra  ";

console.log(str.trim());

Output:jitendra

❗ Original string does NOT change

🔹 includes()

Checks if word exists

"Hello World".includes("World"); // true
"Hello World".includes("Hi");    // false

🔹 startsWith()
"JavaScript".startsWith("Java"); // true

🔹 endsWith()
"JavaScript".endsWith("Script"); // true

🔹 slice() ✂️ (Cut part of string)
let word = "JavaScript";

console.log(word.slice(0, 4));
Output:Java

🔹 replace()
let text = "I love JS";

console.log(text.replace("JS", "JavaScript"));
Output:I love JavaScript

9️⃣ String Comparison ⚖️
"apple" === "apple"; // true
"Apple" === "apple"; // false (case sensitive)

JavaScript strings are case-sensitive

🔟 Strings + Numbers ⚠️
"10" + 5   // "105"
10 + "5"   // "105"

Because string wins 😄

To fix:

Number("10") + 5 // 15   */

/*

// **** how to convert string into array => ******

1️⃣ Using split() (MOST IMPORTANT)
📌 Meaning
split() cuts a string and puts the pieces into an array.

✂ Example 1: Split by space
let text = "I love JavaScript";
let arr = text.split(" ");

console.log(arr);
✅ Output: ["I", "love", "JavaScript"]

🧠 Rule:
" " → split by space

✂ Example 2: Split by comma
let text = "apple,banana,mango";
let arr = text.split(",");

console.log(arr);
Output: ["apple", "banana", "mango"]

✂ Example 3: Split every character
let name = "jitendra";
let arr = name.split("");

console.log(arr);
Output: ["j","i","t","e","n","d","r","a"]

📌 Empty string "" means:
👉 break each character

2️⃣ Convert String to Array using Spread Operator ...
let word = "hello";
let arr = [...word];

console.log(arr);
Output: ["h","e","l","l","o"]

✔ Clean
✔ Modern
✔ Same as split("")

3️⃣ Convert String to Array using Array.from()
let str = "world";
let arr = Array.from(str);

console.log(arr);
Output: ["w","o","r","l","d"]

4️⃣ Which method should YOU use? 🤔
Task	Best Method
Words	split(" ")
Characters	split("")
Modern way	[...string]
Learning	split() ✅
🧠 Very Easy Memory Trick

String → Array = split()

Space → words

Empty "" → letters

❌ Common Mistake
let arr = "hello"; // ❌ still string

📝 Exam One-Liner

In JavaScript, strings can be converted into arrays using the split() method. 

*/

const gameNametwo = "Jite--ndra"

console.log(gameNametwo.split('-'));
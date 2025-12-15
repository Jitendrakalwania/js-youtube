/* Comparision operstors in JS =>
= =     equal to
! =     not equal to
= = =   equal value and type
! = =   not equal value or type
>       greater than
<       less than
>=      greater than or equal to
<=      less than or equal to
?       ternary operator

➤ Greater than >
5 > 3   // true
3 > 5   // false

➤ Less than <
2 < 4   // true
7 < 3   // false

➤ Greater or equal >=
5 >= 5   // true
6 >= 5   // true
4 >= 5   // false

➤ Less or equal <=
3 <= 3   // true
2 <= 3   // true
5 <= 3   // false


3️⃣ Equality (yahan log sabse zyada confuse hote hain 😵)
🔴 == (loose equality)
5 == 5      // true
5 == "5"    // true  😱
JavaScript bolta hai:
“Type chhodo, value same hai toh true”

🟢 === (strict equality) ⭐ IMPORTANT
5 === 5      // true
5 === "5"    // false ✅
JavaScript bolta hai:
“Value bhi same ho
Type bhi same ho”

Memory trick 🧠
===  safest
Interview + real projects me wahi use hota hai


4️⃣ Not equal !=
5 != 6     // true
5 != "5"   // false
!== ⭐
5 !== "5"   // true

5️⃣ Real life example 🧍‍♂️
let age = 18;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

JS check karta hai:

“Age 18 ya usse zyada hai kya?”

6️⃣ Ab thoda dangerous part ⚠️ (IMPORTANT)
null == 0      // false
null >= 0      // true 😵

Kyu?

== alag rules use karta hai

>= alag rules use karta hai

👉 Isliye hamesha === use karo

7️⃣ Golden rules 🏆

1️⃣ Comparison ka answer → true / false
2️⃣ == avoid karo
3️⃣ === use karo
4️⃣ Different types = danger zone      */


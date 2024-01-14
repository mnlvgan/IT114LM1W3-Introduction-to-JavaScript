/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var x=100;
console.log(x)

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let y;
y = 69;
console.log(y)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const j = 1500;
let i = j; 
console.log(i);

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
let a = 5;
let b = 6;
let c = 8;
let d = 4;
let e = 3;

let zxy = (a+b)*e-c/d;
console.log(zxy)

// Checkpoint 1.2 What operators did you use?
// Answer: +,-,*,/
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
const str1 = "Hello";
const str2 = "World";
const Concatenation = str1 + " " + str2;
console.log(Concatenation);

const length = str1.length;
console.log(length);

// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation and String length property

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
let aa = true;
let bb = false;
console.log(aa && bb);
console.log(aa || bb);
console.log(!aa);
// Checkpoint 1.4 What operators did you use?
// Answer: &&, ||, !

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
console.log(str1 == str2); 
console.log(str1 != str2); 
console.log(str1.length < str2.length); 
console.log(str1.length >= str2.length);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here

//console.log([] === false); 
console.log([] == false); 
//The expression [] == false evaluates to true because, in JavaScript, an empty array ([]) is considered "truthy" when coerced to a boolean, and both [] 
//and false are loosely equal when using the double equals (==) operator but when we use strict equality it will result to false(===)
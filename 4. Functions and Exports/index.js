/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Vincent");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: A function declaration can be used before it's written in the code, whereas a function expression must be defined before it's called

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width) {
    return length * width;
  };

const area = calculateArea(8, 8);
console.log("Area:", area);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function that is passed as an argument to another function and is executed at a later time or after an event
function myCallback() {
    console.log("Callback executed!");
  }

function callWithCallback(callback) {
    callback();
  }

callWithCallback(myCallback);
  
// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. 
// The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(array, modifierFunction) {
    return array.map(modifierFunction);
  }
  
function incrementByOne(number) {
    return number + 1;
  }
  
const numbers = [1, 2, 3, 4, 5];
const modifiedNumbers = modifyArray(numbers, incrementByOne);
  
console.log(modifiedNumbers);
  
// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const math = require('./mathUtils.js');
const sum = math.add(5, 3);
console.log("Sum:", sum);
console.log("PI:", math.PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const isPalindrome = require('./isPalindrome.js');
isPalindrome('radar'); 
isPalindrome('hello');

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: require is used in Node.js to import modules, and module.exports is used to define what is exported from a module. Whether to use require/module.exports or import/export depends on the environment

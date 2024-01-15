/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squared = numbers.map(item => item *item);
console.log(squared);
// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evens = numbers.filter(item => item %2 ===0);
console.log(evens);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((result, item) => result + item, 0);
console.log(sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world', '!!!'];
// Your code here
const upperWords = words.map(item => item.toUpperCase())
console.log(upperWords)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const letters = words.filter(item => item.length>4 )
console.log(letters)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((result, item) => result + item, '');
console.log(concatenatedString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: map transforms each item in a list, filter selects specific items based on a condition, and reduce combines all items into a single result
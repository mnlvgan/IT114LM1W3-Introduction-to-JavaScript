/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
const x = numbers[0];
const y = numbers[4];
const z = numbers[numbers.length - 1];

console.log(x, y, z);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let sum = 0;
let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (numbers[i] < min) {
        min = numbers[i];
    }

    if (numbers[i] > max) {
        max = numbers[i];
    }
}

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: In Python, list elements don't require explicit data type declaration, while in JavaScript, type declaration for array elements may be necessary

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let IT114L = {
    courseCode: "IT114L",
    name: "Web Systems And Technologies Laboratory",
    units: 1,
    noOfStudents: 40
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professorName = "Job Lipat"
console.log(IT114L.professorName)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courses = [
    { courseCode: "HUM039", name: "ETHICS", units: 3 },
    { courseCode: "CS107", name: "Information Management", units: 2 },
    { courseCode: "CS107L", name: "Information Management Laboratory", units: 1},
    { courseCode: "IT114", name: "Web Systems And Techonologies", units: 2},
    { courseCode: "IT114L", name: "Web Systems And Techonologies Laboratory", units: 1},
    { courseCode: "IT132L", name: "Logic Design And Switching", units: 2},
    { courseCode: "IT132L", name: "Logic Design And Switching Laboratory", units: 1},
    { courseCode: "IT133", name: "Technopreneurship", units: 3}
    
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = 0;

for (let i = 0; i < courses.length; i++) {
    totalUnits += courses[i].units;
}

console.log("Total Units:", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: I think the equivalent of objects in Python is the dictionary, as both involve key-value pairs for organizing data

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

const numbersCopy = [...numbers, 100];

console.log("Original Array:", numbers);
console.log("Copied Array with Additional Number:", numbersCopy);


// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { courseCode, units } = { ...IT114L };
console.log(courseCode, units);
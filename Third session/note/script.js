// 1. INTRODUCTION TO LOOPS:
// A loop in JavaScript is used to execute a block of code repeatedly, as long as a specified condition is met.
// In simple terms, loops help us perform repetitive tasks without writing the same code multiple times.
// Example: Without a loop
// Suppose we want to display "Welcome to JavaScript!" five times.

// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");


// This works, but we are repeating the same statement unnecessarily. This can be easier done with a loop.

// 2. Types of Loops in JavaScript
// JavaScript provides several ways to repeat code.


// Loop       | 	Purpose
// for	      | 	 Repeats code, usually when we know how many times it should run.
// while	  | 	 Repeats code while a condition remains true.
// do...while | 	 Executes code at least once before checking the condition.
// for...of	  | 	 Loops through values in an iterable, such as an array or string.
// for...in	  | 	 Loops through enumerable property names (keys) of an object.


// We will begin with the three basic loops: for, while, and do...while.

// 3. The for Loop
// The for loop is commonly used when we know how many times we want to repeat a task.

// Syntax
// for (initialization; condition; update) {
//     // Code to execute
// }


// A for loop contains three important parts:
// 1. Initialization: Creates a variable that controls the loop.
// 2. Condition: Determines whether the loop should continue.
// 3. Update: Changes the variable after each iteration.

// EXAMPLE:
// Display numbers from 1 to 5.
for(let i = 1; i <= 5; i++) {
    console.log(i);
    
}
// Understanding the code
// - let i = 1 means the loop starts counting from 1.
// - i <= 5 means the loop continues while i is less than or equal to 5.
// - i++ means increase i by 1 after each iteration.
// - console.log(i) displays the current value.
// Important: An iteration is one complete execution of the loop's body.

// Countdown
// 1. Display numbers from 5 to 1.
for (let i = 5; i >= 1; i--) {
    console.log(i);
    
}

// 2. Display numbers from 5 to 2.
// for (let i = 5; i >= 2; i-=2) {
//     console.log(i);
    
// }

// 3. Write a for loop that displays odd
//    numbers from 1 to 15.
for (let i = 1; i <= 15; i+=2) {
    console.log(i);
    
}



// 4. Write a for loop that displays even
//    numbers from 0 to 16.
for (let i = 0; i <= 16; i+=2 ) {
    console.log(i);
    
}

// 5. Total 
// Calculate the sum of numbers from 1 to 5.
let total = 0;

for(let i = 1; i <= 5; i++) {
    total = total + i
    console.log(total);
    
}

// SUMMARY
// Explanation:
// - First iteration: 0 + 1 = 1
// - Second iteration: 1 + 2 = 3
// - Third iteration: 3 + 3 = 6
// - Fourth iteration: 6 + 4 = 10
// - Fifth iteration: 10 + 5 = 15
// The variable total keeps the accumulated sum.


// 6.
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");


// Example: With a loop
// trying with a for loop
for (let i = 1; i <= 5; i++) {
    console.log("Welcome to JavaScript!");
    
}


// =============== BREAK AND CONTINUE IN A FOR LOOP
// Using break and continue in a for Loop
// We already know that a for loop executes a block of code repeatedly as long as its condition is true.

// Normally, the loop continues until its condition becomes false.
// However, JavaScript provides two important statements that allow us to change how a loop executes:
// - break — Stops the loop completely.
// - continue — Skips the current iteration and proceeds to the next one.

// 2. The break Statement
// What is break?
// The break statement immediately stops a loop.
// The break statement is used to immediately terminate a loop, even if the loop's condition is still true.
// It is applied using if statement.

// Example 1: Stop the loop when the number reaches 5 for a loop that counts from 1 to 10. 
// for ( let i = 1; i <= 10; i++) {
//     console.log(i);

//     if (i === 5) {
//         break;
//     }

//     // console.log(i);
    
// }

// 3. The continue Statement
// What is continue?
// The continue statement skips the remaining code in the current iteration and moves to the next iteration.
// The continue statement is used to skip the remaining statements in the current iteration without stopping the entire loop.
// In simple terms, continue tells JavaScript:
// Skip the rest of this iteration and proceed to the next one.
// Also applied using if statement

// EXAMPLE:
// Example 1: Skip the loop when the number reaches 8 for a loop that counts from 4 to 13. 
// for (let i = 4; i <= 13; i++) {

//     if (i === 8) {
//         continue;
//     }
    
//     console.log(i);
// }

for (let i = 4; i <= 13; i++) {

    if (i === 8) {
        continue;
    }

    if (i === 11) {
        break;
    }
    
    console.log(i);
}

// =================
// NON PRIMITIVE / COMPLEX DATA TYPES.
// // 1. Arrays
// // 2. objects

// // What is an Array?

// // An array is one of the most important things in programming.
// // Think of an array as a box with many compartments — you can store multiple values inside one variable, instead of making separate variables for each value.
// // Definition:
// // An array is a list-like object used to store multiple values in one variable.
// // Arrays are used to store multiple values or data. They can hold every data type in JavaScript including others arrays
// // After each data in an array you put a comma ,
// // In arrays you also start counting each data type from 0
// //  An array is a container for holding multiple values (of any type) in a single variable.
// // Why Use Arrays?
// // Store a group of related data.

// // Keep things organized.

// // // example
// // let student1 = "Dami"
// // let student2 = "Seyi"
// // let student3 = "Ope"
// // let student4 = "Oscar"
// // let student5 = "Tunde"
// // let student6 = "Victory"
// // let student7 = "Samad"
// // let student8 = "Andy"
// // let student9 = "Bukola"
// // let student10 = "Deji"
// // let student11 = "Tolu"
// // let student12 = "Chidinma"
// // let student13 = "Trinity"
// // let student14 = "TG"

// // WITH ARRAYS
const students = ["Dami", "Seyi", "Ope", "Oscar", "Tunde", "Victory", "Samad", "Andy", "Bukola", "Deji", "Tolu", "Chidinma", "Trinity", "TG"];
console.log(students);

// Key Points About Arrays
// 1. Arrays store ordered lists of items.
// 2. Arrays use index numbers to find items.
// 3. Index starts at 0 (the first item is at index 0)
// 4. Arrays can hold any type of data — numbers, strings, booleans, even other arrays

// EXAMPLE:
// a.  String
const grains = ["rice", "maize", "cowpea", "millet"];
console.log(grains);

// b. Numbers
const numbers = [300, 20, 10, 15.5, 40];
console.log(numbers);

// c. Mixed data - string, number, boolean.
const mixedData = ["Father figure", "Reverend", "Mr Bean", 20, true, false, 40];
console.log(mixedData);


// How to access elements in our array by their index
// using grains array
console.log(grains[0]);
console.log(grains[1]);
console.log(grains[2]);
console.log(grains[3]);


// We can also change elements in an array by accessing their index
grains[0] = "sorghum";
console.log(grains);


// ITERATING THROUGH ARRAYS
// Iterating means going through the elements one at a time.
// A for loop uses indexes to access the elements:
const waterBrands = ["eva", "aquafina", "nestle", "voss", "nirvana", "cway"];

for (let i = 0; i < waterBrands.length; i++) {
    console.log(waterBrands[i]);
    
}

for (const w of waterBrands) {
    console.log(w);
    
}


// The for...in loop
// for...in loops through an object’s enumerable property keys. When used with a simple array, it gives us the indexes as strings.
// Syntax:
// for (const key in object) {
//     // Code to repeat
// }

for (const w in waterBrands) {
    console.log(w); //gives us the index of the array items.
    
}

// Alternatively:
for (const w in waterBrands) {
    console.log(waterBrands[w]);
    
}

// Prefer for...of when you want array values. for...in is generally used with objects because it can also include other enumerable properties.



// Array Properties and Array Methods
// Arrays have properties (like information about the array) and methods (functions you can use on arrays).

// | Method/property/operator | Purpose                              |
// |--------------------------|--------------------------------------|
// | `length`                 | Counts elements                      |
// | `push()`                 | Adds to the end                      |
// | `pop()`                  | Removes the last element             |
// | `unshift()`              | Adds to the beginning                |
// | `shift()`                | Removes the first element            |
// | `includes()`             | Checks if an element exists          |
// | `indexOf()`              | Finds an element’s first index       |
// | `lastIndexOf()`          | Finds an element’s last index        |
// | `join()`                 | Joins elements into a string         |
// | `at()`                   | Gets an element by index             |
// | `copyWithin()`           | Copies elements within the array     |
// | `splice()`               | Adds, removes or replaces elements   |
// | `delete`                 | Removes an element, leaving a gap    |


// | Method/property/operator | Changes the original array? |
// |--------------------------|-----------------------------|
// | `length`                 | No, when read               |
// | `push()`                 | Yes                         |
// | `pop()`                  | Yes                         |
// | `unshift()`              | Yes                         |
// | `shift()`                | Yes                         |  
// | `includes()`             | No                          |
// | `indexOf()`              | No                          |
// | `lastIndexOf()`          | No                          |
// | `join()`                 | No                          |
// | `at()`                   | No                          |
// | `copyWithin()`           | Yes                         |
// | `splice()`               | Yes                         |
// | `delete`                 | Yes                         |


// IMPORTANT ARRAY PROPERTY
// 1. length: tells you how many items or elements are in the array.

// The length property
// length tells us how many elements an array contains.
const players = ["Ronaldo", "Messi", "Neymar", "Damidinho", "Bruno"];
console.log(players.length);

// We can also use the length property to get to the index/value of the last item in the array
// index
console.log(players.length - 1);

// value
// console.log(players[players.length - 1]);
// or
// console.log(players[4]);


// 2. .push(): adds element to the end of an array
// USING players above
players.push("Saka");
console.log(players);


// 3. .pop(): this removes an item from the end of an array. it removes the last item in an array
players.pop();
console.log(players);

// 4. .unshift(): adds an item to the beginning of an array
players.unshift("Jude");
console.log(players);


// 5. .shift(): removes an item from the beginning of an array
players.shift();
console.log(players);

//  6. indexOf(): find the position of an item
const i = players.indexOf("Ronaldo");
console.log(i);

console.log(players.indexOf("Messi"));


// 7. lastIndexOf(): finds the index of a given element
players.unshift("Bruno")
console.log(players.lastIndexOf("Bruno"));


// 8. at(): finds the element with the given index
console.log(players.at(0));


// 9. delete
// // Removes an element but leaves an empty slot in the array. The array’s length stays the same.
delete players[4];

console.log(players);



// 10. splice()
// is one of the most powerful (and sometimes confusing) array methods
// because it can:
// Remove items from an array
// Add new items to an array
// Replace items in an array

// syntax
// array.splice(startIndex, deleteCount, item1, item2, ...)

// Parameters
// start: The index where the change begins.
// deleteCount: How many elements to remove.
// item1, item2: Optional elements to insert.

// i. Remove an element:
players.splice(1, 2);
console.log(players);

// ii. Add an element/s:
players.splice(0, 0, "Yamal", "Suarez", "JT");
console.log(players);

// Replace an element:
players.splice(2, 1, "Haaland");
console.log(players);


// 11. copyWithin() copies part of an array to another position inside the same array.
// It does NOT create a new array.
// It changes the original array.

//  Basic Syntax
// array.copyWithin(target, start, end)

// target → Where to paste the copied items
// start → Where to start copying from
// end (optional) → Where to stop copying (not included)
// Example 1:
const clubs = ["Arsenal", "ManU", "ManCity", "Barca", "Madrid", "Juventus", "Chelsea", "PSG", "liverpool"];
console.log(clubs.copyWithin(1, 6, 7));

// Example 2
const biscuits = ["speedy", "oreos", "digestive", "peppersnacks", "cabin", "crackers"];
console.log(biscuits.copyWithin(4, 0, 2));


// 12. slice(): Copy Part of an Array
// Definition: Returns a new array with a portion of the original array.
// syntax
// array.slice(start, end)
const churches = ["Deeper", "Covenant", "RCCG", "Winners", "CAC", "MFM", "Cele", "Cherubim", "Foursquare"];

let newArray = churches.slice(5, 8);
console.log(newArray);


// THE SPREAD OPERATOR AND ARRAY DESTRUCTURING
// The spread operator (...) expands an array into individual values. Array destructuring extracts values from an array into variables.

// 1. Spread Operator (...)
// Think of spread as unpacking the items in an array.

// It "spreads out" the elements of an array (or object) into individual items.


// Why It’s Useful:

// Makes copying arrays simple.

// Makes combining arrays simple.

// Works greatly with function calls that take multiple arguments.

// syntax
// const newArray = [...oldArray]
// const combined = [...array1, ...array2]

// EXAMPLE:
// i. simple operation
const schools = ["Tech Studio", "UNILAG", "OAU", "OOU"];
console.log(schools);
console.log(...schools);

// ii. Copy an array
const org = ["WHO", "AU", "UN", "UNESCO", "UNICEF", "NBA"];
const orgCopy = [...org];
console.log(orgCopy);


// iii. Combine arrays
const skills = ["patience", "communication", "flexibility", "adaptibility", "teamwork"];

const skillsTwo = ["logical thinking", "problem-solving", "relationship-building"];

const skillset = [...skills, ...skillsTwo];
console.log(skillset);


// iv. Add items while creating a new array
const bodmas = ["bracket", "of", "division", "multiplication", "addition", "subtraction"];

const presidents = ["obasanjo", "goodluck", "tinubu", "trump"];

const combination = [...bodmas, ...presidents, "mountains", "plains", "forests", "swamp"];

console.log(combination);


// 2. Array Destructuring
// Array destructuring lets us take values from an array and store them in variables, based on their positions.

// Without destructuring:
const states = ["Ogun", "Lagos", "Adamawa", "Oyo"];
// console.log(states[0]);
// console.log(states[1]);
// console.log(states[2]);
// console.log(states[3]);


// With destructuring:
// Extracting all items
const [firstState, secondState, thirdState, fourthState] = states;
console.log(firstState);
console.log(secondState);
console.log(thirdState);
console.log(fourthState);


// B. Skip an item
const countries = ["Nigeria", "Greece", "Spain", "Italy", "Turkey"];
const [ , secondCountry, thirdCountry, fourthCountry, , fifthCountry = "Jamaica"] = countries;
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);
console.log(fifthCountry);



// C. Set a default value
const names = ["Bukola"];
const [firstName, secondName = "Guest"] = names;
console.log(firstName);
console.log(secondName);


// D. Without a default
const [oldName, newName] = ["Bukola"];
console.log(newName);


// 3. Using Rest with Destructuring
// Inside a destructuring pattern, ... is called rest syntax. It collects the remaining items into a new array.
const hobby = ["talking", "chess", "sleeping", "looking for trouble", "gaming"];
const [firstHobby, ...otherHobbies] = hobby;
console.log(firstHobby);
console.log(otherHobbies);


// | Syntax            | What it does                                |
// |-------------------|---------------------------------------------|
// | `[...fruits]`     | Spreads items into a new array          |
// | `const [first, ...others] = fruits` | Collects** remaining items into an array |
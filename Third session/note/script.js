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

// 20th October 2026
// JavaScript Home Task: Arrays, Spread and Destructuring Solution

// Instructions

// - Create a folder named `javascript-array-practice`.
// - Inside the folder, create `index.html` and `script.js`.
// - Connect `script.js` to `index.html`.
// - Complete all tasks in `script.js`. Use comments to separate and number your answers.
// - Use `console.log()` to display your results in the browser console.
// - Revise your class notes and be ready to explain your code.
// - Upload your completed work to a GitHub repository named `javascript-array-practice`. Ensure it contains both files.
// - Use a meaningful commit message, such as `Complete JavaScript array home task`.
// - Share your **GitHub repository link** for review.

// 1. Create and Access an Array

// Create an array named `foodItems` containing `"Rice"`, `"Beans"`, `"Yam"`, `"Bread"` and `"Plantain"`.
const foodItems = ["Rice", "Beans", "Yam", "Bread", "Plantain"];

console.log(foodItems[0]);
console.log(foodItems[2]);
console.log(foodItems.length);
console.log(foodItems.length - 1); //this returns index result
console.log(foodItems[foodItems.length - 1]);

// first by reassigning array item value
// foodItems[2] = "Potato";
// console.log(foodItems);
// or using splice 
const replace = foodItems.splice(2, 1, "Potato");
console.log(replace);
console.log(foodItems.splice(2, 1, "Potato"));
console.log(foodItems);
// - Display the entire array.
// - Display the first and third items using their indexes.
// - Display the number of items using `length`.
// - Display the last item using `foodItems.length - 1`.
// - Replace `"Yam"` with `"Potato"` and display the updated array.

//  2. Add and Remove Items
// Create an array named `shoppingList` containing `"Milk"`, `"Sugar"` and `"Bread"`.
const shoppingList = ["Milk", "Sugar", "Bread"];
shoppingList.push("Eggs");
console.log(shoppingList);
shoppingList.unshift("Butter");
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);
shoppingList.shift();
console.log(shoppingList);
// Perform these operations in order, displaying the array after each operation:

// - Add `"Eggs"` to the end using `push()`.
// - Add `"Butter"` to the beginning using `unshift()`.
// - Remove the last item using `pop()`.
// - Remove the first item using `shift()`.


//  3. Find Items
// Create this array:
const colors = ["Red", "Blue", "Green", "Blue", "Yellow"];
console.log(colors.indexOf("Blue"));
console.log(colors.lastIndexOf("Blue"));
// console.log(colors.indexOf("Purple"));
// at (-1) can work like length -1
console.log(colors.at(-1));
// - Use `indexOf()` to find the first index of `"Blue"`.
// - Use `lastIndexOf()` to find the last index of `"Blue"`.
// - Find the index of `"Purple"`. Explain the result in a comment.
// - Use `at(-1)` to display the last item.


//  4. Loop Through an Array
// Create an array named `phoneBrands` containing five phone brands.
const phoneBrandss = ["iphone", "itel", "infinix", "nokia", "visafone"];
for (let i = 0; i < phoneBrandss.length; i++) {
    console.log(phoneBrandss[i]);
    
}

for (const p of phoneBrandss) { //consollogs the value
    console.log(p);
    
}

for (const p in phoneBrandss) { //returns index
    console.log(p);
    
}

for (const p in phoneBrandss) { //console log the value.
    console.log(phoneBrandss[p]);
    
}
// - Use a regular `for` loop to display each brand.
// - Use a `for...of` loop to display each brand.
// - Use a `for...in` loop to display the indexes.



// 5. Remove Items with `splice()`
// Create this array:
const animals = ["Dog", "Cat", "Goat", "Lion", "Elephant"];
console.log(animals.splice(1, 2));
console.log(animals);
// Use `splice()` to remove `"Cat"` and `"Goat"` in one operation. Display the updated array.


// 6. Add and Replace with `splice()`
// Create this array:
const courses = ["HTML", "CSS", "JavaScript"];
courses.splice(2, 0, "Git")
console.log(courses);
courses.splice(0, 1, "Web Fundamentals");
console.log(courses);
// - Use `splice()` to insert `"Git"` between `"CSS"` and `"JavaScript"` without removing anything.
// - Then use `splice()` to replace `"HTML"` with `"Web Fundamentals"`.
// - Display the array after each operation.


// 7. Copy Part of an Array
// Create this array:
const cities = ["Lagos", "Abuja", "Ibadan", "Kano", "Enugu"];
const selectedCities = cities.slice(1, 4);
console.log(selectedCities);
console.log(cities);
// - Use `slice()` to create a new array named `selectedCities` containing `"Abuja"`, `"Ibadan"` and `"Kano"`.
// - Display both arrays.
// - In a comment, state whether `slice()` changed `cities`.


// 8. Practise `copyWithin()`
// Create this array:
const letters = ["A", "B", "C", "D", "E"];
letters.copyWithin(3, 0, 2);
console.log(letters);
console.log(letters.length);
// Use `copyWithin()` to copy `"A"` and `"B"` into the positions currently occupied by `"D"` and `"E"`.
// - Display the updated array.
// - Display its length.
// - State in a comment whether `copyWithin()` created a new array.



// 9. Understand `delete`
// Create this array:
const drinks = ["Water", "Juice", "Tea", "Coffee"];
delete drinks[1];
console.log(drinks);
console.log(drinks.length);
// - Use `delete` to remove the item at index `1`.
// - Display the array.
// - Display its length.
// - Explain in a comment how this differs from removing an item with `splice()`.



// 10. Copy an Array with Spread
// Create an array named `subjects` containing `"English"`, `"Mathematics"` and `"Biology"`.
const subjects = ["English", "Mathematics", "Biology"];
const subjectsCopy = [...subjects];
console.log(subjects);
console.log(subjectsCopy);
subjectsCopy.push("Chemistry");
console.log(subjectsCopy);
console.log(subjects);
// - Use spread to create a copy named `subjectsCopy`.
// - Add `"Chemistry"` to the end of `subjectsCopy`.
// - Display both arrays.
// - Explain in a comment whether adding to the copy changed the original array.



// 11. Combine Arrays with Spread
// Create these arrays:
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];
const technologies = [...frontend, ...backend];
console.log(technologies);
technologies.push("Git");
console.log(technologies);
// Use spread to create an array named `technologies` containing:
// - All items from `frontend`.
// - All items from `backend`.
// - `"Git"` as the final item.
// Display `technologies`.



// 12. Extract and Skip Values
// Create this array:
// javascript
const fruitss = ["Apple", "Banana", "Mango", "Orange"];
const [firstFruit, , thirdFruit, fourthFruit] = fruitss;
console.log(firstFruit);
console.log(thirdFruit);
console.log(fourthFruit);

// Use array destructuring to:
// - Store `"Apple"` in `firstFruit`.
// - Skip `"Banana"`.
// - Store `"Mango"` in `thirdFruit`.
// - Store `"Orange"` in `fourthFruit`.
// Display the three variables.


// 13. Use a Default Value
// Create this array:
const users = ["Amina"];
const [firstUser, secondUser = "Guest"] = users;
console.log(firstUser);
console.log(secondUser);
// - Use destructuring to create `firstUser` and `secondUser`.
// - Give `secondUser` a default value of `"Guest"`.
// - Display both variables.
// - Explain in a comment what `secondUser` would contain without the default value.



// 14. Collect Remaining Items with Rest
// Create this array:
const hobbies = ["Reading", "Cooking", "Dancing", "Gaming"];
const [firstHobby1, ...otherHobbies2] = hobbies;
console.log(firstHobby);
console.log(otherHobbies);


// Use destructuring and rest syntax to:
// - Store `"Reading"` in `firstHobby`.
// - Collect the remaining items in an array named `otherHobbies`.
// Display both variables.


// 15. Combined Challenge: Class Register
// Create this array:
const classRegister = ["Ayo", "Bisi", "Chika", "David"];
const updatedRegister = [...classRegister];
console.log(updatedRegister);
updatedRegister.push("  Esther");
console.log(updatedRegister);
updatedRegister.splice(1, 1, "Bukola");
console.log(updatedRegister);
const [firstStudent, ...otherStudents] = updatedRegister;
console.log(firstStudent);
console.log(otherStudents);

for (const u of updatedRegister) {
    console.log(u);
    
}

console.log(classRegister);
console.log(updatedRegister);
// 1. Use spread to copy it into a new array named `updatedRegister`.
// 2. Add `"Esther"` to the end of `updatedRegister`.
// 3. Use `splice()` to replace `"Bisi"` with `"Bukola"` in `updatedRegister`.
// 4. Use destructuring to extract the first student into `firstStudent` and collect the remaining students into `otherStudents` using rest syntax.
// 5. Display `firstStudent` and `otherStudents`.
// 6. Use a `for...of` loop to display each name in `updatedRegister`.
// 7. Display both registers to show that `classRegister` remains unchanged.

// FUNCTIONS

// Functions in javaScript are blocks of reusable codes designed to perform a specific task.

// Function is a section of reusable code. that is you declare a code once, use it whenever you want . Call the function to execute that code.

// It is like a recipe, maybe a recipe to bake banana bread, you can always reuse that recipe even after years, thats how functions works.

// For example, a function can:
// - Display a greeting.
// - Calculate a total.
// - Check whether someone can vote.
// - Process information supplied by a user.
// Instead of writing the same code repeatedly, we can write a function once and use it whenever we need it.

// Why Use Functions?
// Reusability: Once a function is defined, it can be used repeatedly without rewriting the code.

// Organization: Functions help in organizing code into logical sections, making it easier to read and maintain.

// Modularity: Functions enable modular programming, allowing you to break down complex tasks into simpler sub-tasks.

// TYPES OF FUNCTIONS
// A. FUNCTION DECLARATION
// B. FUNCTION EXPRESSION
// C. ARROW FUNCTION


// A. Function Declarations
// A function declaration defines a function using the function keyword and a name.

// Syntax
// function functionName() {
//     // Code to run
// }


// EXAMPLE: Write a function named greet and display the message "Welcome to Functions in JavaScript."

// function greet() {
//     console.log("Welcome to Functions in JavaScript.");
    
// }

// This creates the function, but the code inside it has not run yet.
// To run it, we call the function:

// greet();

function greet() {
    console.log("Welcome to Functions in JavaScript.");
    
}
greet();

// The example above shows that one can call a function declaration before or after an assignment. It is called hoisting. 
// HOISTING: is the ability to invoke or call a function from above where the function was created... and only function declaration accepts hoisting

// | Part       |            Meaning                  |
// |------------|-------------------------------------|
// | `function` | Keyword used to define the function |
// | `greet`    | Name of the function                |
// | `()`       | Holds parameters when needed        |
// | `{}`       | Contains the function’s code        |
// | `greet()`  | Calls the function                  |


// We can call the same function several times:
// Write a function with the name myQuote and display "This is my word; I rule!".

function myQuote() {
    console.log("This is my word; I rule!");
    
}
myQuote();
myQuote();
myQuote();
myQuote();
myQuote();

// Practice task
// 1. Create a function named introduceYourself.
// 2. Inside it, display your name and your favourite subject.
// 3. Call the function twice.


// Parameters and Arguments
// Functions become more useful when they can receive different values.
// A parameter is a variable listed inside the parentheses when defining a function.
// An argument is the actual value supplied when calling the function.

// Example:
// Write a function named greetStudent with studentName as parameter and two names of your choice as argument.

// Syntax
// function greetStudent(parameter) {
//     console.log();
    
// }
// greetStudent(argument);
// single parameter
function greetStudent(studentName) {
    console.log(studentName);
    
}
greetStudent("IB");
greetStudent("Tobi");

// multiple parameters
// Write a function with the name describeStudent with name and course as paramters, and display ""the name" is learning JavaScript." with your choice arguments.

function describeStudent (name, course) {
    console.log(`${name} is learning ${course}.`);
    
}
describeStudent("Oreoluwa", "JavaScript");

// Arguments match parameters by position:
function describeStudent (course, name) {
    console.log(`${name} is learning ${course}.`);
    
}
describeStudent("Oreoluwa", "JavaScript");


// Missing arguments and default parameters
// If no argument is supplied, a parameter normally receives undefined:
// function theCity (city) {
//     console.log(`I live in ${city}`);
    
// }
// theCity(); //result is undefined.


// A default parameter provides a value when an argument is missing or is undefined:
// function theCity (city = "Ibadan") {
//     console.log(`I live in ${city}`);
    
// }
// theCity(); 

// multiple arguments are more flexible and can be easily manipulated, unlike a default value that is just one. 
function theCity (city) {
    console.log(`I live in ${city}`);
    
}
theCity("Lagos"); 
theCity("Ibadan"); 
theCity("PH"); 
theCity("Ota"); 
theCity("Benin");

// B. Function Expressions
// A function expression creates a function as part of an expression, commonly by assigning it to a variable.
// Syntax
// const functionName = function () {
//     // Code to run
// };

// EXAMPLE:
// Task: Create and Call a Function Expression
// 1. Create a function expression and assign it to a constant named sayHello.
// 2. Inside the function, display "Hello!" using console.log().
// 3. Call the function using sayHello().

// normal function declaration format
// function sayHello () {
//     console.log("Hello!");
    
// }

// sayHello();

// function expression
const sayHello = function () {
    console.log("Hello!");
    
}

sayHello();


// Task: Create a Welcome Function Expression
// 1. Create a function expression and assign it to a constant named welcomeStudent.
// 2. Inside the function, display "Welcome to JavaScript class!" using console.log().
// 3. Call the function using welcomeStudent().
// normal function declaration
// function welcomeStudent () {
//     console.log("Welcome to JavaScript Class");
    
// }
// welcomeStudent();

// VERSUS
// function expression
const welcomeStudent = function () {
    console.log("Welcome to JavaScript Class");
    
}
welcomeStudent();


// Task: Calculate the Total Cost Using a Function Expression
// 1. Create a function expression and assign it to a constant named calculateTotal.
// 2. Give the function two parameters: price and quantity.
// 3. Inside the function, return price * quantity.
// 4. Call the function with 2000 and 3, and display the returned value using console.log().
// function dclaration
// function calculateTotal (price, quantity) {
//     return price * quantity;
// }

// const ttotal = calculateTotal(2000, 3);
// console.log(ttotal);

// versus
// function expression
const calculateTotal = function (price, quantity) {
    return price * quantity;
}

const ttotal = calculateTotal(2000, 3);
console.log(ttotal);

// Class Task 4:
// 1. Create a function expression named displayCourse.
//    Display "I am learning web development."
//    Call the function.

// 2. Create a function expression named divideNumbers.
//    Accept two numbers and return their quotient.
//    Display the returned result.

// C. Arrow Functions
// An arrow function is another way to write a function expression. It uses =>.

// SYNTAX:
// const functionName = () => {
//     // Code to run
// };

// EXAMPLE:
// Task: Create an Arrow Function
// 1. Create an arrow function and assign it to a constant named greet.
// 2. Inside the function, display "Hello!" using console.log().
// 3. Call the function using greet().

// normal function expression
// const greet = function () {
//     console.log("Hello!");
    
// }
// greet();

// versus
// arrow function
const greett = () => {
    console.log("Hello!");
    
}
greett();


// Task: Greet a Student Using an Arrow Function
// 1. Create an arrow function and assign it to a constant named greetStudent.
// 2. Give the function a parameter named name.
// 3. Use a template literal to display "Hello, " followed by the name and an exclamation mark.
// 4. Call the function with "Zainab".
// function expression
// const greettStudent = function (name) {
//     console.log(`Hello, ${name}`);
    
// }
// greettStudent("Zainab");
// versus
// arrow function
// const greettStudent = (name) => {
//     console.log(`Hello, ${name}.`);
    
// }
// greettStudent("Tayo");


// With exactly one simple parameter, the parentheses are optional:
const greettStudent = name => {
    console.log(`Hello, ${name}.`);
    
}
greettStudent("Luke");

// TAKE NOTE: With no parameters or multiple parameters, use parentheses.



// Implicit return
// When an arrow function returns a single expression, we can remove the curly braces and return keyword:

// EXAMPLE:
// Task: Add Two Numbers Using an Arrow Function
// 1. Create an arrow function and assign it to a constant named add.
// 2. Give the function two parameters: a and b.
// 3. Use an implicit return to return their sum, without curly braces or the return keyword.
// 4. Call the function with 4 and 6, and display the result using console.log().
// arrow function
// const addd = (a, b) => {
//     return a + b;
// }
// console.log(addd(34, 16));

// versus
// arrow function with implicit return
const addd = (a, b) => a + b;
console.log(addd(34, 34));

// Important: If you use braces, include return when you want to return a value.

// JavaScript Home Task: Functions

// Instructions

// Create a folder named javascript-functions-practice.

// Inside it, create index.html and script.js.

// Connect script.js to index.html.

// Complete all tasks in script.js, using comments to number and separate your answers.

// Use the browser console to check your results.

// Where a task asks you to return a value, use return inside the function and display the result outside it.

// Revise your class notes and be ready to explain your code.

// Upload your assignment to a GitHub repository with a relatable name like javascript-functions-practice.

// Use a meaningful commit message and share your GitHub repository link for review.

// 1. Create and Reuse a Function

// Create a function declaration named displayReminder.

// Inside it, display "Remember to practise JavaScript every day!".

// Call the function three times.

// 2. Use a Parameter

// Create a function declaration named welcomeLearner with a parameter named learnerName.

// Display "Welcome, [learnerName]!" using a template literal.

// Call it with "Amina" and then "David".

// Pass each name directly as an argument; you do not need to declare name variables outside the function.

// 3. Use Multiple Parameters

// Create a function declaration named describeProduct with two parameters: productName and price.

// Display a message such as "A Notebook costs ₦1500.".

// Call it with "Notebook" and 1500.

// Call it again with "School Bag" and 12000.

// Supply the arguments in the correct order.

// 4. Set a Default Parameter

// Create a function declaration named showCity with a parameter named city.

// Give city a default value of "Lagos".

// Inside the function, display "Your selected city is [city].".

// Call it without an argument.

// Call it with "Abuja".

// Call it with undefined.

// In a comment, explain when the default value is used.

// 5. Return and Reuse a Result

// Create a function declaration named calculateSubtotal with parameters price and quantity.

// Return price * quantity.

// Call it with 2500 and 4.

// Store the returned value in a variable named subtotal.

// Display subtotal.

// Add a delivery fee of 1500 to subtotal and display the final total.

// 6. Return a Decision

// Create a function declaration named checkPass with a parameter named score.

// If score is below 50, return "Try again.".

// After the if block, return "You passed!".

// Do not use else.

// Call the function with 35, 50 and 80, displaying each returned result.

// 7. Return a Boolean

// Create a function declaration named isPositive with a parameter named number.

// Return true if the number is greater than 0.

// Otherwise, return false.

// Display the returned results for 8, -3 and 0.

// 8. Create a Function Expression

// Create a function expression and assign it to a constant named displayStudyTip.

// Inside it, display "Practise a little every day.".

// Call the function twice.

// 9. Calculate with a Function Expression

// Create a function expression and assign it to a constant named calculateBalance.

// Give it two parameters: amountPaid and totalCost.

// Return amountPaid - totalCost.

// Call it with 10000 and 7500.

// Store the returned value in balance and display it.

// 10. Create an Arrow Function

// Create an arrow function and assign it to a constant named introduceLearner.

// Give it two parameters: learnerName and courseName.

// Display "[learnerName] is studying [courseName].".

// Call it with "Bola" and "JavaScript".

// 11. Use an Implicit Return

// Create an arrow function named squareNumber.

// Give it one parameter named number.

// Use an implicit return to return number * number.

// Do not use curly braces or the return keyword.

// Display the results of calling it with 5 and 9.

// 12. Use an Explicit Return

// Create an arrow function named calculateDiscount.

// Give it two parameters: price and discountAmount.

// Use curly braces and the return keyword to return price - discountAmount.

// Call it with 8000 and 1000.

// Store the returned value in discountedPrice and display it.

// 13. Practise All Three Function Styles

// Write three functions that each accept two numbers and return their product:

// A function declaration named multiplyDeclaration.

// A function expression assigned to multiplyExpression.

// An arrow function assigned to multiplyArrow, using an implicit return.

// Call each function with 6 and 4, displaying each result.

// 14. Explore Hoisting

// Write a call to showMessage() above its function declaration.

// Below the call, declare showMessage and make it display "Function declarations can be called before their definition.".

// Run your code.

// Explain in a comment why the call works.

// 15. Compare Displaying and Returning

// Create these two function declarations:

// displayDouble(number): displays number * 2 using console.log() but has no return statement.

// returnDouble(number): returns number * 2.

// Then:

// Call displayDouble(5) and store its returned value in firstResult.

// Call returnDouble(5) and store its returned value in secondResult.

// Display firstResult and secondResult.

// Explain in a comment why firstResult contains undefined, even though the first function displayed 10.

// 21 October 2026. // 1. Create and Reuse a Function
// Create a function declaration named displayReminder.
function displayReminder () {
    console.log("Remember to practise JavaScript every day!");
    
}
displayReminder();
displayReminder();
displayReminder();
// Inside it, display "Remember to practise JavaScript every day!".
// Call the function three times.



// 2. Use a Parameter
// Create a function declaration named welcomeLearner with a parameter named learnerName.
function welcomeLearner (learnerName) {
console.log(`Welcome, ${learnerName}`);

}
welcomeLearner("Amina");
welcomeLearner("David");
// Display "Welcome, [learnerName]!" using a template literal.
// Call it with "Amina" and then "David".
// Pass each name directly as an argument; you do not need to declare name variables outside the function.



// 3. Use Multiple Parameters
// Create a function declaration named describeProduct with two parameters: productName and price.
function describeProduct (productName, price) {
    console.log(`A ${productName} costs ${price}.`);

}
describeProduct("Notebook", 1500);
describeProduct("School Bag" , 12000);
// Display a message such as "A Notebook costs ₦1500.".

// Call it with "Notebook" and 1500.
// Call it again with "School Bag" and 12000.
// Supply the arguments in the correct order.



// 4. Set a Default Parameter
// Create a function declaration named showCity with a parameter named city.
function showCity (city = "Lagos") {
    console.log(`Your selected city is ${city}.`);
    
}
showCity();
showCity("Abuja");
// Give city a default value of "Lagos".
// Inside the function, display "Your selected city is [city].".
// Call it without an argument.
// Call it with "Abuja".
// In a comment, explain when the default value is used.



// 5. Return and Reuse a Result
// Create a function declaration named calculateSubtotal with parameters price and quantity.
function calculateSubtotal (price, quantity) {
    return price * quantity;

}
const subtotal = calculateSubtotal(2500, 4);
console.log(subtotal);
console.log(subtotal + 1500);
// Return price * quantity.
// Call it with 2500 and 4.
// Store the returned value in a variable named subtotal.
// Display subtotal.
// Add a delivery fee of 1500 to subtotal and display the final total.



// 6. Return a Decision
// Create a function declaration named checkPass with a parameter named score.
function checkPass (score) {
    if (score < 50) {
        return "Try again.";
    }
    return "You passed!";
}
console.log(checkPass(35));
console.log(checkPass(50));
console.log(checkPass(80));

// If score is below 50, return "Try again.".
// After the if block, return "You passed!".
// Do not use else.
// Call the function with 35, 50 and 80, displaying each returned result.



// 7. Return a Boolean
// Create a function declaration named isPositive with a parameter named number.
function isPositive (number) {
    if (number > 0) {
        return true;
    }
    return false;
}
console.log(isPositive(8));
console.log(isPositive(-3));
console.log(isPositive(0));

// Return true if the number is greater than 0.
// Otherwise, return false.
// Display the returned results for 8, -3 and 0.



// 8. Create a Function Expression
// Create a function expression and assign it to a constant named displayStudyTip.
const displayStudyTip = function (){
    console.log("Practise a little every day.");
    
}
displayStudyTip();
displayStudyTip();

// Inside it, display "Practise a little every day.".
// Call the function twice.



// 9. Calculate with a Function Expression
// Create a function expression and assign it to a constant named calculateBalance.
const calculateBalance = function (amountPaid, totalCost) {
    return amountPaid - totalCost;

}
let balance = calculateBalance(10000, 7500);
console.log(balance);
// Give it two parameters: amountPaid and totalCost.
// Return amountPaid - totalCost.
// Call it with 10000 and 7500.
// Store the returned value in balance and display it.


// 10. Create an Arrow Function
// Create an arrow function and assign it to a constant named introduceLearner.
const introduceLearner = (learnerName, courseName) => {
    console.log(`${learnerName} is studying ${courseName}.`);
    
}
introduceLearner("Bola", "JavaScript");
// Give it two parameters: learnerName and courseName.
// Display "[learnerName] is studying [courseName].".
// Call it with "Bola" and "JavaScript".



// 11. Use an Implicit Return
// Create an arrow function named squareNumber.
const squareNumber = number => number * number;
console.log(squareNumber(5));
console.log(squareNumber(9));
// Give it one parameter named number.
// Use an implicit return to return number * number.
// Do not use curly braces or the return keyword.
// Display the results of calling it with 5 and 9.



// 12. Use an Explicit Return
// Create an arrow function named calculateDiscount.
const calculateDiscount = (price, discountAmount) => {
    return price - discountAmount;

}
const discountedPrice = calculateDiscount(8000, 1000);
console.log(discountedPrice);
// Give it two parameters: price and discountAmount.
// Use curly braces and the return keyword to return price - discountAmount.
// Call it with 8000 and 1000.
// Store the returned value in discountedPrice and display it.



// 13. Practise All Three Function Styles
// Write three functions that each accept two numbers and return their product:

// A function declaration named multiplyDeclaration.

// A function expression assigned to multiplyExpression.

// An arrow function assigned to multiplyArrow, using an implicit return.

// Call each function with 6 and 4, displaying each result.
// LET ME SEE YOUR WORK FOR THIS.


// 14. Explore Hoisting
// Write a call to showMessage() above its function declaration.
showMessage();

function showMessage() {
    console.log("Function declarations can be called before their definition.");
    
}
// Below the call, declare showMessage and make it display "Function declarations can be called before their definition.".
// Run your code.
// Explain in a comment why the call works.



// 15. Compare Displaying and Returning
// Create these two function declarations:

// displayDouble(number): displays number * 2 using console.log() but has no return statement.

// returnDouble(number): returns number * 2.

// Then:

// Call displayDouble(5) and store its returned value in firstResult.

// Call returnDouble(5) and store its returned value in secondResult.

// Display firstResult and secondResult.

// Explain in a comment why firstResult contains undefined, even though the first function displayed 10.
// LET ME SEE YOUR WORK FOR THIS.

// VARIABLE SCOPE
// Scope determines where a variable can be accessed in your code.

// We will focus on:
// - Global scope.
// - Function scope.
// - Block scope.

// A. Global scope
// A variable declared outside functions and blocks can be accessed by code within its scope, including functions defined there.

// EXAMPLE:
// Task: Access a Global Variable
// 1. Create a variable named schoolName outside any function and assign it "Tech Studio Academy".
// 2. Create a function named displaySchool that displays schoolName using console.log().
// 3. Call displaySchool.
// 4. Display schoolName again outside the function using console.log().
// 5. Explain why you can access schoolName both inside and outside the function.

const schoolName = "Tech Studio Academy"; //starts here outer scope

function displaySchool () { //Inner scope starts here
    console.log(schoolName);
    
}
displaySchool(); //inner scope ends here

console.log(schoolName);  //outer scope ends here


// B. Function scope
// A variable declared inside a function is local to that function. Code outside the function cannot access it.

// EXAMPLE:
//Task: Create a Local Variable
// 1. Create a function named `introduceStudent`.
// 2. Inside the function, create a variable named `studentName` using `const` and assign it `"Bola"`.
// 3. Display `studentName` inside the function using `console.log()`.
// 4. Call `introduceStudent`.
// 5. Explain why `studentName` is a local variable.

function introduceStudent () {
    const studentNaame = "Bola";
    console.log(studentNaame);
    
}
introduceStudent();
// console.log(studentNaame); //cannot be called outside of the function because it is local to the function.


// Function parameters are also local to the function:
// Task: Understand Parameter Scope
// 1. Create a function named greet that accepts a parameter named name.
// 2. Inside the function, display name using console.log().
// 3. Call greet with "Ada".
// 4. Outside the function, try to display name using console.log().
// 5. Explain why the function’s name parameter is only accessible inside the function.
function greet (nname) {
    console.log(nname);
    
}
greet("Ada"); 
// console.log(nname);
// When we have a parameter/parameters in a function, they cannot be displayed using console log outside of the function becuase they are local to the function.


// C. Block scope
// A block is code enclosed in {}, such as the body of an if statement.
// Variables declared with let or const inside a block can only be accessed within that block and its nested code.
// EXAMPLE: 
// 1.
if (true) {
    const message = "Learning is fun";
    // console.log();
    
}
// console.log(message); Did not work because we declared the variable inside of the if statement.

// 2. 
// Display numbers 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++){
    console.log(i);
    
}
// console.log(i); 


// A nested scope can access an outer variable
// EXAMPLE:
// Task: Calculate an Order Total
// 1. Create a global variable named deliveryFee using const and assign it 1000.
// 2. Create a function named calculateOrderTotal that accepts a parameter named price.
// 3. Inside the function, create a local variable named total that stores price + deliveryFee.
// 4. Return total.
// 5. Call the function with 5000 and display the returned value using console.log().
// 6. Identify the global variable, local variable, and parameter in your code.

const deliveryFee = 1000; //outer starts here

function calculateOrderTotal (price) { //inner scope 
    const tootal = price + deliveryFee;
    return tootal;
    
}

const final = calculateOrderTotal(5000, deliveryFee);
console.log(final); //outer ends here

// CLASS TASK: // 1. Declare a variable named course outside a function.
//    Create a function that displays course.
//    Call the function.

// 2. Declare studentName inside a function.
//    Display it inside the function.
//    Then try displaying it outside.
//    Explain the error, then comment out the failing line.

// 3. Declare a variable using let inside an if block.
//    Try accessing it outside the block.
//    Explain what happens, then comment out the failing line.

// CALLBACK FUNCTIONS
// A callback function is a function passed to another function as an argument so that the receiving function can call it.

// Functions are values in JavaScript. We can store them in variables and pass them to other functions.

// EXAMPLE:
// Task: Pass a Function as a Callback
// 1. Create a function named sayHello that displays "Hello!" using console.log().
// 2. Create a function named runTask that accepts a parameter named callback.
// 3. Inside runTask, call callback.
// 4. Call runTask and pass sayHello as its argument. Pass the function’s name without parentheses.
function sayyHello() {
    console.log("Hi!");
    
}

function runTask(callback){
    callback();
}
runTask(sayyHello);

// Step by step
// 1. sayyHello is passed to runTask.
// 2. The parameter callback receives that function.
// 3. callback() calls the function.
// 4. "Hello!" appears in the console.
// The parameter name callback is a normal variable name, not a special keyword.
// Use the function name without parentheses when passing an existing function as a callback.


// EXAMPLE 2:
// Task: Display a Success Message Using a Callback
// 1. Create a function named showSuccess that displays "Task completed successfully!" using console.log().
// 2. Create a function named completeTask that accepts a parameter named callback.
// 3. Inside completeTask, call callback.
// 4. Call completeTask and pass showSuccess as its argument. Pass the function name without parentheses.

function showSuccess () {
    console.log("Task completed successfully!");
    
}
// showSuccess();

function completeTask(callback){
callback();
}
completeTask(showSuccess);


// Passing a value to a callback

// Task: Welcome a Student Using a Callback
// 1. Create a function named greetStudent that accepts a parameter named name.
// 2. Inside the function, use console.log() to display a welcome message containing the name.
// 3. Create a function named processStudent that accepts two parameters: name and callback.
// 4. Inside processStudent, call callback and pass name to it.
// 5. Call processStudent with "Bola" and greetStudent. Pass greetStudent without parentheses.
function greetStudent(name){
console.log(`Glad to have you here, ${name}`);

}
// greetStudent("Bola");

function processStudent(name, callback){
    callback(name);

}
processStudent("Bola", greetStudent);


// Using an arrow function as a callback
// We can write the callback directly inside the call:

// EXAMPLE:
// Task: Greet a Student Using an Arrow Function Callback
// 1. Create a function named processStudent that accepts two parameters: name and callback.
// 2. Inside processStudent, call callback and pass name to it.
// 3. Call processStudent with "Tunde" as the first argument.
// 4. As the second argument, write an arrow function directly inside the parentheses of the processStudent call, after the comma.
// 5. The arrow function should accept a parameter named name.
// 6. Inside the arrow function, use console.log() and a template literal to display a greeting containing the name.
function processStudent (name, callback) {
    callback(name);

}
processStudent("Tunde", name => {
    console.log(`Have a great stay, ${name}`);
    
});

// Note: name => is valid without parentheses because the arrow function has just one ordinary parameter.

// STEPS
// 1. Define processStudent:
// function processStudent(name, callback)
// It accepts a name and a function to call.


// 2. Call processStudent:
// processStudent("Tunde", name => { ... })
// "Tunde" goes into name, and the arrow function goes into callback.


// 3. Run the callback:
// callback(name);
// This calls the arrow function and passes "Tunde" to it.


// 4. Display the message:
// The arrow function receives "Tunde" through its own name parameter and displays:


// FURTHER EXERCISE
// 1. Create a function named displayMessage.
//    It should display "Keep practising!".
// 2. Create a function named executeTask.
//    It should accept a callback and call it.
// 3. Pass displayMessage to executeTask.
// function displayMessage(){
//     console.log("Keep practising!");
    
// }

// function executeTask(callback) {
//     callback();

// }
// executeTask(displayMessage);

// OR
// WITH ONE PARAMETER
// function displayMessage(nickname){
//     console.log(`Keep practising, ${nickname}!`);
    
// }

// function executeTask(nickname, callback) {
//     callback(nickname);

// }
// executeTask("Reverend Father", displayMessage);

// OR
// function executeTask (nickname, callback){
// callback(nickname);

// }
// executeTask("Father Figure", nickname => {
//     console.log(`Keep practising, ${nickname}!`);
    
// });

// OR
// TWO PARAMETERS IN ARROW FUNCTION
function executeTask (nickname, location, callback){
callback(nickname, location);

}
executeTask("Father Figure", "Ibadan", (nickname, location) => {
    console.log(`Keep practising, ${nickname} from ${location} !`);
    
});

// HIGHER ORDER ARRAY METHODS
// Higher-order array methods: forEach(), map(), filter(), find(), and reduce().

// These methods help us work with arrays by passing a function into an array method. That function is called a callback function.

// | Method      | What do we want to do? | Return value |
// |-------------|------------------------|--------------|
// | `forEach()` | Perform an action for each item | `undefined` |
// | `map()`     | Transform every item   | A new array |
// | `filter()`  | Collect all matching items | A new array |
// | `find()` | Get the first matching item | An item, or `undefined` |
// | `reduce()` | Combine items into one result | The accumulated result |


// 1. forEach() — perform an action for each item.

// Use forEach() when you want to do something with every array item, such as displaying each student’s name.
// EXAMPLE:
// EXAMPLE 1: Welcome Each Student
// 1. Create an array named girls containing "Bolu", "Nkechi", and "Tito".
// 2. Use forEach() to loop through the array.
// 3. Write an arrow function directly inside forEach() as the callback,
//    with a parameter named g.
// 4. Use a template literal to display "Welcome, [g]!"
//    for each student.
const girls = ["Bolu", "Nkechi", "Tito"];
girls.forEach(name => {
    console.log(`Welcome, ${name}`);
    
});
// console.log(girls);
// console.log(girls[0]);
// console.log(girls[1]);
// console.log(girls[2]);


// EXAMPLE 2: Display Products
// Create an array named products containing:
// "Laptop", "Mouse", "Keyboard", "Monitor".
//
// Use forEach() to display each product in this format:
// Product: Laptop
//
// Then use forEach() with the index parameter to display:
// 1. Laptop
// 2. Mouse
// and so on.
const products = [ "Laptop", "Mouse", "Keyboard", "Monitor"];
products.forEach(gadget => {
    console.log(`Product: ${gadget}`);
    
});


//2. map() — transform every item

// Use map() when you want a new array containing a transformed version of each original item.
// Task: Increase Prices Using map()
// 1. Create an array named prices containing 1000, 2000, and 3000.
// 2. Use map() with an arrow function callback to add 500 to each price. Use the return keyword inside the callback.
// 3. Store the new array in a variable named updatedPrices.
// 4. Display updatedPrices using console.log().
// 5. Display the original prices array to confirm that it has not changed.
const pricess = [1000, 2000, 3000];
const updatedPrices = pricess.map(p => {
    return p + 500;
});
console.log(updatedPrices);
console.log(pricess);


// 3. filter() — collect all matching items

// Use filter() when you want a new array containing every item that passes a condition.
// Task: Find Passing Scores Using filter()
// 1. Create an array named scores containing 35, 70, 48, 90, and 65.
// 2. Use filter() with an arrow function callback to keep only scores that are 50 or above. Use the return keyword inside the callback.
// 3. Store the new array in a variable named passingScores.
// 4. Display passingScores using console.log().
// const scoores = [35, 70, 48, 90, 65];
// const passingScore = scoores.filter(n => {
//     return n >= 50;
// });
// console.log(passingScore);


// 4. find() — get the first matching item

// Use find() when you need the first item that passes a condition.
const scoores = [35, 70, 48, 90, 65];
const passingScore = scoores.find(n => {
    return n >= 50;
});
console.log(passingScore);


// 5. reduce() — combine items into one result

// Use reduce() when you want to combine array items into a result, such as a shopping total.

// Task: Calculate the Total Price Using reduce()
// Create an array named pricex containing 1000, 2000, and 3000.
// Use reduce() with an arrow function callback that accepts two parameters: accumulator and price.
// Inside the callback, use return to return accumulator + price.
// Set the initial value of the accumulator to 0 by passing 0 as the second argument to reduce().
// Store the result in a variable named total.
// Display total using console.log().

const pricex = [1000, 2000, 3000];
const tots = pricex.reduce((accumulator, price) => {
    return accumulator + price;
}, 0);
console.log(tots);

// - accumulator holds the running result.
// - price receives the current item.
// - return accumulator + price supplies the accumulator for the next call.
// - 0 is the initial accumulator value.

// |Callback call|Accumulator|Current price|Returned result|
// |-------------|-----------|-------------|---------------|
// | First       | `0`       | `1000`      | `1000`        |
// | Second      | `1000`    | `2000`      | `3000`        |
// | Third       | `3000`    | `3000`      | `6000`        |

// After the last item, reduce() returns 6000.

// JavaScript Home Task: Scope, Callbacks and Array Methods

// Instructions

// Create a folder named javascript-scope-and-callbacks.

// Inside it, create index.html and script.js, and connect the files.

// Complete all tasks in script.js. Number and separate your answers using comments.

// Use console.log() to display your results.

// For tasks involving scope errors, test the failing line, then comment it out so the remaining code can run.

// Revise your notes and be ready to explain your code.

// Upload your completed work to a GitHub repository named javascript-scope-and-callbacks.

// Use a meaningful commit message and share your GitHub repository link for review.

// 1. Access an Outer Variable

// Declare a variable named academyName outside any function and assign it "Tech Studio Academy".

// Create a function named showAcademy that displays academyName.

// Call the function.

// Display academyName outside the function.

// Explain in a comment why both statements can access it.

// 2. Create a Local Variable

// Create a function named displayFavouriteFood.

// Inside it, declare favouriteFood using const and assign it "Jollof Rice".

// Display the variable inside the function.

// Call the function.

// Try displaying favouriteFood outside the function.

// Explain the error in a comment, then comment out the failing line.

// 3. Practise Parameter Scope

// Create a function named displayCity with a parameter named cityName.

// Inside the function, display cityName.

// Call the function with "Lagos" directly as its argument.

// Do not declare a variable named cityName outside the function.

// Try displaying cityName outside the function.

// Explain the error, then comment out the failing line.

// 4. Practise Block Scope

// Write an if (true) statement.

// Inside its block, declare studyMessage using let and assign it "Keep learning!".

// Display studyMessage inside the block.

// Try displaying it outside the block.

// Explain what happens, then comment out the failing line.

// 5. Calculate a Total Using an Outer Variable

// Declare serviceCharge outside any function using const and assign it 500.

// Create a function named calculateBill with a parameter named mealPrice.

// Inside the function, declare a local variable named totalBill containing mealPrice + serviceCharge.

// Return totalBill.

// Call the function with 3500 and display the returned result.

// Identify the outer variable, parameter and local variable in comments.

// 6. Pass a Function as a Callback

// Create a function named showReminder that displays "Submit your assignment!".

// Create a function named runReminder that accepts a parameter named callback.

// Inside runReminder, call callback.

// Call runReminder, passing showReminder without parentheses.

// 7. Pass a Value to a Callback

// Create a function named welcomeMember with a parameter named memberName.

// Make it display "Welcome to the club, [memberName]!".

// Create a function named processMember with parameters name and callback.

// Inside processMember, call callback and pass name to it.

// Call processMember with "Zainab" and welcomeMember.

// 8. Use an Inline Arrow Callback

// Create a function named processDelivery with three parameters: customerName, city and callback.

// Inside it, call callback, passing customerName and city in that order.

// Call processDelivery with "Ayo", "Ibadan" and an arrow function written directly as the third argument.

// The arrow function should receive the two values and display:

// Ayo, your order is going to Ibadan.
// 9. Display Items with forEach()

// Create this array:

// const courses = ["HTML", "CSS", "JavaScript", "React"];
// Use forEach() to display each course in this format:

// Course: HTML
// Then use another forEach() with the index parameter to display a numbered list:

// 1. HTML
// 2. CSS
// 3. JavaScript
// 4. React
// 10. Transform Values with map()

// Create this array:

// const numbers = [3, 6, 9, 12];
// Use map() to create a new array containing each number multiplied by 2.

// Use an arrow callback with curly braces and an explicit return.

// Store the new array in doubledNumbers.

// Display both arrays to confirm that the original remains unchanged.

// 11. Select Items with filter()

// Create this array:

// const ages = [12, 18, 25, 16, 30, 17];
// Use filter() to collect all ages that are 18 or above.

// Store the result in adultAges.

// Display adultAges.

// 12. Find the First Match

// Create this array:

// const names = ["Ada", "Bola", "Chiamaka", "Tunde", "Oluwaseun"];
// Use find() to get the first name containing more than five characters.

// Store the result in firstLongName and display it.

// Hint: check the name’s length.

// Use another find() to search for a name containing more than 20 characters.

// Display the result and explain it in a comment.

// 13. Calculate a Total with reduce()

// Create this array:

// const expenses = [1500, 2500, 1000, 3000];
// Use reduce() to calculate the total.

// Give the callback parameters the names accumulator and expense.

// Return accumulator + expense.

// Set the initial accumulator value to 0.

// Store the result in totalExpenses and display it.

// Explain the purpose of the accumulator in a comment.

// 14. Compare filter() and find()

// Create this array:

// const scores = [40, 75, 60, 30, 90];
// Use filter() to collect all scores that are 60 or above.

// Use find() to get the first score that is 60 or above.

// Display both results.

// Explain the difference between the two results in a comment.

// 15. Combined Challenge: Shopping Prices

// Create this array:

// const prices = [1000, 2500, 4000, 1500, 5000];
// Using the original prices array separately for each operation:

// Use forEach() to display each price with a numbered label, such as "1. ₦1000".

// Use map() to create increasedPrices, adding 500 to every price.

// Use filter() to create affordablePrices, containing prices of 2500 or below.

// Use find() to get the first price above 3000.

// Use reduce() with an initial value of 0 to calculate the total of all prices.

// Display every result and the original array.
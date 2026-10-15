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
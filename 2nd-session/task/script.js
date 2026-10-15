// JavaScript Class Task: Numbers and Math Methods

// Create a file named `numbers-task.js`. Complete the tasks below and display each result using `console.log()`.

// 1. Practise mathematical operators

// Declare these variables:

// js
// const firstNumber = 25;
// const secondNumber = 4;

// Use mathematical operators to:

// 1. Add the two numbers.
// 2. Subtract `secondNumber` from `firstNumber`.
// 3. Multiply the two numbers.
// 4. Divide `firstNumber` by `secondNumber`.
// 5. Find the remainder when `firstNumber` is divided by `secondNumber`.
// 6. Raise `secondNumber` to the power of `3`.

// solution
const firstNumber=25;
const secondNumber=4;

const add= firstNumber + secondNumber;
console.log(add);

const subtract= firstNumber - secondNumber;
console.log(subtract);


const multiply= firstNumber * secondNumber;
console.log(multiply);


const divide= firstNumber / secondNumber;
console.log(divide);


const remnant= firstNumber % secondNumber;
console.log(remnant);


const raise= secondNumber ** 3;
console.log(raise);



// 2. Increase and decrease numbers

// js
// let score = 10;


// 1. Increase `score` by `1` using `++` and display it.
// 2. Increase the updated score by `5` using `+=` and display it.
// 3. Decrease the updated score by `1` using `--` and display it.
// 4. Decrease the updated score by `3` using `-=` and display it.

// solution
let score= 10;
score++;
console.log(score);

score +=5;
console.log(score);

score--;
console.log(score);

score-=3;
console.log(score);


// 3. Practice Math methods

// js
// const price = 18.75;
// const negativeNumber = -45;


// 1. Round `price` to the nearest whole number.
// 2. Round `price` down.
// 3. Round `price` up.
// 4. Remove the decimal part of `price`.
// 5. Find the absolute value of `negativeNumber` using `Math.abs()`.
// 6. Find the greatest number among `12`, `45`, and `7`.
// 7. Find the smallest number among `12`, `45`, and `7`.
// 8. Calculate `5` raised to the power of `2` using `Math.pow()`.
// 9. Find the square root of `81`.
// 10. Generate a random number using `Math.random()`.

const price = 18.75;

const negativeNumber = -45;

console.log(Math.round(price));

console.log(Math.floor(price));

console.log(Math.ceil(price));

console.log(Math.trunc(price));

console.log(Math.abs(negativeNumber));


const quantity= 12;
const quantity2= 45;
const quantity3= 7;
const quantity4=5;
const quantity5=81;
console.log(Math.max(quantity, quantity2, quantity3));
console.log(Math.min(quantity, quantity2, quantity3));

console.log(Math.pow(quantity4, 2));
console.log(Math.sqrt(quantity5));
console.log(Math.random());


// 4. Predict, then check

// Write your predicted answers as comments before running:

// js
// console.log(5 + 2 * 3);
// console.log((5 + 2) * 3);


// a. result
// 11


// b. result
// 21

// Explain why the results are different.
// The results are diffrent because  the () takes precedence over * 


// Reminder: Multiplication, division, and remainder have equal precedence and are evaluated from left to right. Addition and subtraction also have equal precedence and are evaluated from left to right.


const valthree="4"
const valfour=6
const valfive=3
console.log(valfive - (valthree + valfour));

console.log(true + 0);

// 14th of october 2026

// CLASS TASK: Create a programme that checks a parcel’s weight.

// Delivery charges:
// -----------------------------------------------
// Weight	                   |     Charge.      |
// -----------------------------------------------
// Above 0 kg and up to 2 kg  |    ₦1,500        |
// Above 2 kg and up to 5 kg  |    ₦3,000        |
// Above 5 kg	               |    ₦5,000        |
// -----------------------------------------------
// Task: Use if, else if, and else to display the correct charge. Display "Invalid weight" if the weight is zero or negative.

const weight=1
if (weight <0) {
    console.log('unknown weight');
    
}else if(weight < 3 ){
    console.log('₦1,500');
    
}else if(weight < 6 ){
    console.log('₦3,500');
    
}else {
    console.log('₦5,000');
    
}
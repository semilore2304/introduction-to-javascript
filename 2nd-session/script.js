// NUMBER
// 13TH OCTOBER 2026
// NUMBER DATA TYPES
// What is the Number Data Type?
// The Number data type is used to store numeric values in JavaScript.
// These values can be used for:

//  Counting

//  Measuring

// Calculations

// Prices

// Ages

// Scores


// HOW TO DECLARE A NUMBER DATA TYPE:
const number = 20;
console.log(number);

// Types of numbers
// 1. whole number (integers)
const numberTwo = 89;
console.log(numberTwo);

// 2. Decimal Numbers (Floating points)
let numberThree = 15.5;
console.log(numberThree);

 // 3. negative numbers
 const numberFour = -36;
 console.log(numberFour);


 // MATHEMATICAL OPERATORS
// 1. SUBTRACTION/MINUS (-)
// 2. ADDITION/PLUS (+)
// 3. DIVISION (/)
// 4. MULTIPLICATION/TIMES (*)
// 5. MODULUS/REMAINDER (%)
// 6. EXPONENTIAL/RAISE TO POWER (**)
// 7. INCREMENT (++)
// 8. DECREMENT (--)


// 1. SUBTRACTION/MINUS (-)
// EXAMPLE:
const subtraction = numberTwo - number;
console.log(subtraction);

// 2. ADDITION/PLUS (+)
// EXAMPLE:
const add = number + numberTwo;
console.log(add);

// 3. DIVISION (/)
// EXAMPLE:
const division = numberTwo / number;
console.log(division);

// 5. MODULUS/REMAINDER (%)
// EXAMPLE:
const rem = numberTwo % number;
console.log(rem);

 // 6. EXPONENTIAL/RAISE TO POWER (**)
//  EXAMPLE:
const expo = number ** 2;
console.log(expo);

// 7. INCREMENT (++) (same as + 1)
// EXAMPLE:
let numberFive = 49;
numberFive++;
console.log(numberFive);

// increase by more than 1 - "+=number"
let numberSix = 34;
numberSix +=2;
console.log(numberSix);

let numberSeven = 51;
numberSeven +=5;
console.log(numberSeven);


// 8. DECREMENT (--) (same as - 1)
let numberEight = 60;
numberEight--;
console.log(numberEight);


// decrease by more than 1 - "-=number"
let numberNine = 74;
numberNine-=8;
console.log(numberNine);


// ===== OPERATOR PRECEDENCE====
// 1. parenthesis: anything in a () will be done first
// 2. exponence: will come next **
// 3. multiplication
// 4 division 
// 5 modulo
// 6. addition 
// 7. subtraction

// EXAMPLE:
let rest = 2 + 3 * (4 / 2);
console.log(rest);



//====== JavaScript Math Methods =====
// What is the Math Object?
// JavaScript provides a built-in object called Math that contains properties and methods for performing mathematical operations.

// You do not create it — it already exists.
// You use it like this:

// Syntax
// Math.methodName()

// TYPES:
// 1. Math.round()
// Rounds a number to the nearest whole number.
const numm = 23.45;
console.log(Math.round(numm));


// 2. Math.floor()
// Always rounds down to the nearest whole number.
const nummTwo = 2.765;
console.log(Math.floor(nummTwo));


 // 3. Math.ceil()
// Always rounds up to the nearest whole number.
const nummThree = 4.384;
console.log(Math.ceil(nummThree));

// 4. Math.trunc()
// Removes the decimal part (no rounding).
const nummFour = 13.657;
console.log(Math.trunc(nummFour));

// 5. Math.random()
// Generates a random number between:
// 0  (inclusive)
// 1  (exclusive)
const nummFive = Math.random();
console.log(nummFive);

// 6. Math.max()
// selects greater/greatest number
// EXAMPLE:
const nummSix = 40;
const nummSeven = 31;
const nummEight = 120;
console.log(Math.max(nummSix, nummSeven, nummEight));

// 7. Math.min()
// selects lesser/least number
// EXAMPLE:
console.log(Math.min(nummSix, nummSeven, nummEight));

// 8. Math.pow()
// Raises a number to a power.
// EXAMPLE:
const nummNine = 10
console.log(Math.pow(nummNine, 3));

// 9.  Math.sqrt()
// Finds square root.
// EXAMPLE:
const nummTen = 64;
console.log(Math.sqrt(nummTen));

// Make a Number Positive — Math.abs()
const nummm = -71;
console.log(Math.abs(nummm));

// TYPE COERCION AND TYPE CONVERSION
// ----------------------------------------------------
// TYPE COERCION:
// Type coercion happens when JavaScript automatically converts a value from one data type to another during an operation.
const valOne = "5";
const valTwo = 2;
console.log(valOne + valTwo);
// Here, JavaScript converts 2 into a string and joins the two values.


// A. When one operand is a string, + joins the values as strings.
// Order matters because these operations happen from left to right:
const valThree = "4";
const valFour = 6;
const valFive = 3;
console.log(valFive * (valThree + valFour));
console.log((valThree + valFour) / valFive);
console.log(valThree * (valFour + valFive));

// Operators such as -, *, and / convert numeric strings into numbers.
const valSix = 2;
console.log(valThree - valSix);


// B. If the string cannot be converted into a valid number, the result of its multiplication is NaN, meaning Not a Number:
const wordd = "Hi" ;
console.log(wordd * valSix);

//  Booleans in arithmetic
// C. During numeric conversion, true becomes 1 and false becomes 0.
console.log(true + 3);

// Explicit type conversion
// When you deliberately convert a value, it is called explicit conversion.
const nm = 436; //number
const nmTwo = "322" //string

// To perform addition, convert `nmTwo` into a number() function using Number():
console.log(nm + nmTwo);
// i. Number() — converts a value into a number.
console.log(Number(nmTwo) + nm);

// ii. String() — converts a value into a string.
console.log(String(nm) + nmTwo);

// iii. Boolean() — converts a value into true or false.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));


// ======JavaScript Number Methods======

// JavaScript Number methods are built-in functions used to work
// with numeric values, such as formatting numbers or converting
// them into strings.
// We have instance and static methods

// INSTANCE METHODS:
// Examples:
// Note: These four methods below return strings.
// They do not change the original number.
// 1. toFixed() — formats a number with a specified number of decimal places. toFixed(2) is perfect for working with money. This targets decimal values.
// EXAMPLE:
const fix = 156.7895;
console.log(fix.toFixed(2));
console.log(fix.toFixed(3));

// 2. toPrecision() — formats a number with a specified number of significant digits. This targets all number values.
// EXAMPLE:
const pre =  156.7895;
console.log(pre.toPrecision(4));

// 3. toString() — converts a number into a string.
// EXAMPLE:
const str = 284;
console.log(str.toString());
console.log(str.toString() + pre); // str is converted to string here.
console.log(str + pre); //str not converted to string 

// 4. toExponential() — expresses a number in exponential notation. toExponential() writes a number in exponential notation and returns a string. 
// EXAMPLE: 
const nuum = 6500;
console.log(nuum.toExponential());
console.log(nuum.toExponential(5));

// 5. Number method - Number() function already discussed above.

// valueOf() Method
// valueOf() returns a number as a number.
console.log(nuum.valueOf());

// // =====COMPARISON OPERATORS========== 
// // Every single comparison operator returns a BOOLEAN. it is used to compare two items basically
// // there are types of comparison operators

// // types of comparison operators
// // 1. GREATER THAN (>) eg. (x > y):  : compares two variables or values and returns a boolean
// // 2. LESS THAN (<) eg. (x < y) : compares two variables or values and returns a boolean
// // 3. GREATER THAN OR EQUALS TO (>=) eg. (x >= y) : compares two variables or values and returns a boolean
// // 4. LESS THAN OR EQUALS TO (<=) eg. (x <= y) : compares two variables or values and returns a boolean
// // 5. STRICTLY EQUALS TO (===) eg. (x === y): This checks for both an equality in data type as well as the value "10" === 10
// // 6. LOOSELY EQUALS TO (==) eg. (x == y): This checks for just an equality in just the value
// // 7. NOT EQUAL (!=) eg. (x != y):  to check if two variables are not equal, it returns a boolean
// // 8. Strict not equal (!==) "10" !== 10 

// 1. GREATER THAN (>)
// EXAMPLE:
const great = 234;
const gre = 455;
console.log(great > gre);

// 2. LESS THAN (<)
// EXAMPLE:
console.log(great < gre);

// 3. GREATER THAN OR EQUALS TO
// EXAMPLE:
console.log(gre >= great);

// 4. LESS THAN OR EQUALS TO (<=) 
// EXAMPLE:
console.log(great <= gre);

// 5. STRICTLY EQUALS TO (===)
// EXAMPLE:
console.log(great === gre);
const gr = 455;
console.log(gr === gre);

// 6. LOOSELY EQUALS TO (==) 
// EXAMPLE:
console.log(gr == gre);

// 7. LOOSELY NOT EQUAL (!=)
console.log(great != gr);

// 8. Strict not equal (!==) 
console.log(gre !== great);


// LOGICAL OPERATOR
// // Logical operators are used to combine or manipulate boolean values (true or false)

// // Quick overview — the three operators

// // && — AND

// // || — OR

// // ! — NOT (negation)


// // 1. AND — &&: Definition: A && B is true only if both A and B are true.

// // Truth table (boolean form)

// // true && true → true

// // true && false → false

// // false && true → false

// // false && false → false

// EXAMPLE:
//i. true && true → true
const a = 34;
const b = 20;
const c = 11;
const d = 20;
const t = a > b;
const u = c < d;
const v = t && u;
console.log(v);

const e = 34;
const f = 65;
const g = 74;
const h = 65;
console.log(f === h && e < f);

// ii. true && false → false
console.log(e < f && f !== h);
console.log(a > b && c > d);

// iii. false && true → false
console.log(f !== h && e < f);
console.log(c > d && a > b);

// iv. false && false → false
console.log(f != h && c > f);
console.log(c > d && a < b);


// || — OR
// Definition: A || B is true if at least one of A or B is true.

// Truth table (boolean form)
// true and false
console.log(e < f || f !== h);
console.log(a > b || c > d);

// false and true
console.log(f !== h || e < f);
console.log(c > d || a > b);

// iv. false && false → false
console.log(f != h || c > f);
console.log(c > d || a < b);


// ! — NOT (negation)
// Definition: !A converts A to boolean (if needed) and returns its inverse.
let fatherFigure = true;
console.log(!fatherFigure);

let fatherFig = false;
console.log(!fatherFig);


// // OPERATOR PRECEDENCE & GROUPING
// // Precedence (higher first):
// // ! (NOT)

// // && (AND)

// // || (OR)


// // ======= Conditional Statements in JavaScript ====
// // Conditional statements let you control the flow of a program by making decisions based on certain conditions. They check conditions (which are true or false) and run specific blocks of code depending on the outcome.

// // Types of Conditional Statements in JavaScript
// // if statement

// // if...else statement

// // else...if statement

// // Ternary operator (? :) — shorthand conditional

// // switch statement


// 1. if statement: Definition: Runs a block of code only if the condition is true.
// EXAMPLE: 
let song3 = "Buga Won";
if (song3 === "Buga Won") {
    console.log("That is Kizz Daniel's track.");
    
}

let song4 = "Day by day";
if (song4 !== "Buga Won") {
    console.log("Not Kizz Daniel's track.");
    
}

// 2. if...else statement
// // Definition: Runs one block if condition is true, another block if false.
// // syntax
// // if (condition) {
// //   // runs if condition is true
// // } else {
// //   // runs if condition is false
// // }
// Syntax
// if (condition) {
//    code to run if the condition is true
// }

// EXAMPLE:
// with conole.log
let aged = 18;
if (aged >= 18) {
    console.log("You are an adult");
    
} else {
    console.log("You are still a child");
    
}

// with msg
let agedd = 15;
let msg;
if (agedd >= 18) {
    msg = "You are a verified adult."
} else {
    msg = "You are still a small child."
}
console.log(msg);

 
let isRaining = true;
if (isRaining) {
    console.log("Take an umbrella.");
    
} else {
    console.log("You don't need an umbrella.");
    
}


// 3  else...if statement

// Definition: Allows checking multiple conditions, one after the other.
// syntax
// if (condition1) {
//   // code if condition1 is true
// } else if (condition2) {
//   // code if condition2 is true
// } else {
//   // code if none are true
// }

// EXAMPLE: 
let score = 20;
if (score > 40 && score <= 49) {
    console.log("Grade D");
    
} else if (score >= 50 && score <= 59){
    console.log("Grade C");

} else if (score >= 60 && score <= 69){
    console.log("Grade B");
    
} else if (score >= 70 && score <= 100) {
    console.log("Gradwe A");
    
} else {
    console.log("Grade F");
    
}
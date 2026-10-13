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
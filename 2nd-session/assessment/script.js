// TASK 1

let batteryLevel= 80;
let msg;
if (batteryLevel < 20) {
    msg="Low battery! please charge your device"
}
console.log(msg);

// it shows undefined

// TASK 2
const ticketPrice = "2500";
const ticketCount = 3;
let budget = 10000;

const totalCost= (ticketCount * Number(ticketPrice));
console.log(totalCost.toFixed(2));
if (budget >= 7500) {
    console.log("Booking affordable");   
} else {
    console.log("Not enough money");  
}


// TASK 3
const measurement=7.68;
console.log(Math.round(measurement));
console.log(Math.floor(measurement));
console.log(Math.ceil(measurement));

const no=28;
const no2=93;
const no3=16;
console.log(Math.max(no, no2, no3));
console.log(Math.min(no, no2, no3));

// TASK 4
const hasLibraryCard = true;
const hasGuestPass = false;
const isSuspended = false;
let canEnter= (hasLibraryCard || hasGuestPass) && !isSuspended;
console.log(canEnter);
if (canEnter) {
    console.log("Access granted");
    
} else {
    console.log("Access denied");
    
}


// TASK 5
let distance= 4;
if (distance >=0 && distance <=5 ) {
    console.log("Delivery: ₦500");
    
} else if(distance >= 6 && distance <= 15 ){
    console.log("Delivery: ₦1,000");
    
} else {
    console.log("Delivery unavailable");
    
}



// 1.Number.isFinite()
// Checks if a value is a real, normal number (not infinity, negative infinity, or text).
// Example:
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false

//

// 2.Number.isInteger()
// Checks if a number is a **whole number** (has no decimals).
// Example:
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false


// 3.Number.isNaN()
// Checks if a value is literally "Not-a-Number" (like the result of a failed math operation, such as `0 / 0`).
// Note: Unlike the global `isNaN()`, this strict version won't mistakenly say strings are NaN.
// Example
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN("Hello")); // false (because it's a string, not a NaN type)


// 4.Number.isSafeInteger()
// Checks if a number is a whole number that fits safely within JavaScript's precise range for math (between $-2^{53} - 1$ and $2^{53} - 1$). If numbers get too astronomically huge, JavaScript can lose accuracy.
// Example:
 console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254741999)); // false (too big to track safely)


// 5.Number.parseInt()
//  Reads a string from left to right and pulls out a whole number. It stops reading as soon as it hits a letter or decimal point.
// Example:
console.log(Number.parseInt("42px")); // 42
 console.log(Number.parseInt("3.145")); // 3


//  6.Number.parseFloat()
// Similar to 'parseInt', but it keeps decimals(floating-point numbers) instead of rounding them down to a whole number.
// Example:
 console.log(Number.parseFloat("3.14abc")); // 3.14
 console.log(Number.parseFloat("100")); // 100



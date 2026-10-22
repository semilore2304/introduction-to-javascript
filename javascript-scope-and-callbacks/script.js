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


// Display every result and the original array.

const academyName="Tech Studio Academy"
function showAcademy() {
    console.log(academyName);
    
}
showAcademy()
console.log(academyName);


// 2. Create a Local Variable

// Create a function named displayFavouriteFood.

// Inside it, declare favouriteFood using const and assign it "Jollof Rice".

// Display the variable inside the function.

// Call the function.

// Try displaying favouriteFood outside the function.

// Explain the error in a comment, then comment out the failing line.


function displayFavouriteFood() {
    const favouriteFood="Jollof Rice"
    console.log(favouriteFood);
    
}
displayFavouriteFood();
// console.log(favouriteFood);


// 3. Practise Parameter Scope

// Create a function named displayCity with a parameter named cityName.

// Inside the function, display cityName.

// Call the function with "Lagos" directly as its argument.

// Do not declare a variable named cityName outside the function.

// Try displaying cityName outside the function.

// Explain the error, then comment out the failing line.

function displayCity(displayCityName) {
    console.log(displayCityName);
    
}
displayCity("Lagos");
// console.log(cityName);

// 4. Practise Block Scope

// Write an if (true) statement.

// Inside its block, declare studyMessage using let and assign it "Keep learning!".

// Display studyMessage inside the block.

// Try displaying it outside the block.

// Explain what happens, then comment out the failing line.

if (true) {
   let studyMessage= "keep Learning"; 
   console.log(studyMessage);
   
}
// console.log(studyMessage);


// 5. Calculate a Total Using an Outer Variable

// Declare serviceCharge outside any function using const and assign it 500.

// Create a function named calculateBill with a parameter named mealPrice.

// Inside the function, declare a local variable named totalBill containing mealPrice + serviceCharge.

// Return totalBill.

// Call the function with 3500 and display the returned result.

// Identify the outer variable, parameter and local variable in comments.


const serviceCharge=500;
function calculateBill(mealprice) {
    totalBill = mealprice + serviceCharge
}
calculateBill(3500)
console.log(totalBill);

// 6. Pass a Function as a Callback

// Create a function named showReminder that displays "Submit your assignment!".

// Create a function named runReminder that accepts a parameter named callback.

// Inside runReminder, call callback.

// Call runReminder, passing showReminder without parentheses.

function showReminder() {
    console.log("Submit Your Assignment!");
    
}
showReminder()
function runReminder(assignment){
    assignment()
}
runReminder(showReminder)


// 7. Pass a Value to a Callback

// Create a function named welcomeMember with a parameter named memberName.

// Make it display "Welcome to the club, [memberName]!".

// Create a function named processMember with parameters name and callback.

// Inside processMember, call callback and pass name to it.

// Call processMember with "Zainab" and welcomeMember.

function welcomeMember(memberName) {
    console.log(`Welcome to the club,${memberName}`);
    
}
welcomeMember("saka");
function processMember(memberName,club){
   club(memberName)
}
processMember("Zainab", welcomeMember)


// 8. Use an Inline Arrow Callback

// Create a function named processDelivery with three parameters: customerName, city and callback.

// Inside it, call callback, passing customerName and city in that order.

// Call processDelivery with "Ayo", "Ibadan" and an arrow function written directly as the third argument.

// The arrow function should receive the two values and display:

// Ayo, your order is going to Ibadan.



function processDelivery(customerName, city, logistics) {
    logistics(customerName, city)
}
processDelivery("Ayo","Ibadan", (customerName,city) =>{console.log(`${customerName}, your order is going to ${city}`);
}) 


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

const courses = ["HTML", "CSS", "JavaScript", "React"];
courses.forEach(subjects => {
    console.log(`course: ${subjects}`);
    
});

courses.forEach((fullstack, no)=> {
    console.log(`${no + 1}: ${fullstack}`);
    
})


// 10. Transform Values with map()

// Create this array:

// const numbers = [3, 6, 9, 12];
// Use map() to create a new array containing each number multiplied by 2.

// Use an arrow callback with curly braces and an explicit return.

// Store the new array in doubledNumbers.

// Display both arrays to confirm that the original remains unchanged.



const numbers = [3, 6, 9, 12];
doubledNumbers=numbers.map(multiply => {
    return multiply * 2
});
console.log(doubledNumbers);
console.log(numbers);


// const firstNo=6, secondNo=12,thirdNo=18,fourthNo=24;
// console.log(firstNo);
// console.log(secondNo);
// console.log(thirdNo);
// console.log(fourthNo);


// 11. Select Items with filter()

// Create this array:

// const ages = [12, 18, 25, 16, 30, 17];
// Use filter() to collect all ages that are 18 or above.

// Store the result in adultAges.

// Display adultAges.

const ages = [12, 18, 25, 16, 30, 17];
const adultAges= ages.filter(a => {
    return a >= 18;
})
console.log(adultAges);


// 12. Find the First Match

// Create this array:

// const names = ["Ada", "Bola", "Chiamaka", "Tunde", "Oluwaseun"];
// Use find() to get the first name containing more than five characters.

// Store the result in firstLongName and display it.

// Hint: check the name’s length.

// Use another find() to search for a name containing more than 20 characters.

// Display the result and explain it in a comment.


const names = ["Ada", "Bola", "Chiamaka", "Tunde", "Oluwaseun"];

const firstLongName = names.find(n => {
    return n.length >5 
})
const firstLongName2 = names.find(n => {
    return n.length >20 
})
console.log(firstLongName);

console.log(firstLongName2);


// 13. Calculate a Total with reduce()

// Create this array:

// const expenses = [1500, 2500, 1000, 3000];
// Use reduce() to calculate the total.

// Give the callback parameters the names accumulator and expense.

// Return accumulator + expense.

// Set the initial accumulator value to 0.

// Store the result in totalExpenses and display it.

// Explain the purpose of the accumulator in a comment.


const expenses = [1500, 2500, 1000, 3000];
const total= expenses.reduce((accumulator, price)=>{
  return accumulator + price}, 0)
console.log(total);


// 14. Compare filter() and find()

// Create this array:

// const scores = [40, 75, 60, 30, 90];
// Use filter() to collect all scores that are 60 or above.

// Use find() to get the first score that is 60 or above.

// Display both results.

// Explain the difference between the two results in a comment.


const scores = [40, 75, 60, 30, 90];
console.log(scores.filter(s => {
    return s >=60
}));

console.log(scores.find(s => {
    return s >=60
}));




// 15. Combined Challenge: Shopping Prices

// Create this array:

// const prices = [1000, 2500, 4000, 1500, 5000];
// Using the original prices array separately for each operation:

// Use forEach() to display each price with a numbered label, such as "1. ₦1000".

// Use map() to create increasedPrices, adding 500 to every price.

// Use filter() to create affordablePrices, containing prices of 2500 or below.

// Use find() to get the first price above 3000.

// Use reduce() with an initial value of 0 to calculate the total of all prices.
const prices = [1000, 2500, 4000, 1500, 5000];

prices.forEach((p,num) => [
    console.log(`${num + 1}: ${p}`)
    
])
const increasedPrices=prices.map(p => {
    return p + 500
})
console.log(increasedPrices);

const affordablePrices=prices.filter(p => {
    return p <=2500
})
console.log(affordablePrices);

const firstPrices=prices.find(p => {
    return p >3000
})
console.log(firstPrices);

const totalPrices=prices.reduce((accumulator,prices) => {
    return accumulator + prices
},0)
console.log(totalPrices);

const personn={
    name:"oyin",
    greet:function() {
      console.log(`Hello! ${personn.name}`);
        
    }
}
console.log(personn.name);
personn.greet()

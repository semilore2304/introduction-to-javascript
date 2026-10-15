// Javascript Home Assignment: Decision-Making Programmes1

// Task 1: Movie Ticket Eligibility (Ternary Operator)
// A cinema wants a programme that determines whether a customer qualifies for a discounted movie ticket.

// Customers aged 12 or below qualify for a children's discount.

// Instructions:

// Create a variable called customerAge.


// Assign an age to the variable.


// Use a ternary operator to determine whether the customer qualifies for a discount.


// Store the result in ticketMessage.


// Display either "Children's discount applied!" or "Regular ticket price applies."


// Bonus: Use prompt() to collect the customer's age and validate it before applying the ternary operator.

// ANSWER OF TASK1

// let customersAge= prompt("Enter your age:");
// let ticketMessage = customersAge <= 12 ? "Children's discount applied" : "Regular ticket price applies";
// console.log(ticketMessage);




// Task 2: Restaurant Food Ordering System (Switch Statement)

// A restaurant wants a programme that allows customers to select meals from its menu.

// Food option

// Price


// "rice"

//  ₦3,500

 
// "beans"

//  ₦2,500

 
// "yam"

//  ₦3,000

 
// "spaghetti"

//  ₦4,000

 
// Instructions:

// Use prompt() to ask the customer to enter a food option.


// Use a switch statement to determine the selected meal's price.


// Display the selected meal and its price.


// If the customer enters an option not on the menu, display "Sorry, this meal is unavailable."


// Use break appropriately after each case.


// Sample output:

// Welcome to FreshBite Restaurant!
// Selected Meal: Rice
// Price: ₦3500
// Thank you for your order!
// Bonus: Use .toLowerCase() to ensure that inputs such as "Rice" and "RICE" are accepted.

// 2ND TASK
// const greeting="Welcome to FreshBite Restaurant!";
// console.log(greeting);

// const foodOption=prompt("Enter a food option.")
// let price="";
// let selectedMeal="";

// const normalOption= foodOption.toLowerCase() || foodOption.toUpperCase(); 
// switch (normalOption) {
//     case 'rice':
//     selectedMeal= "Rice"
//     price= "₦3,500"
//     break;
    
//     case 'beans':
//     selectedMeal="Beans"
//     price= "₦2,500";
//     break;

//     case 'yam':
//     selectedMeal="Yam"
//     price= "₦3,000"
//     break;

//     case "spaghetti":
//     selectedMeal= "Spaghetti"
//     price= "₦4,000"
//     break;

//     default:
//     console.log("Sorry, this meal is unavailable");
//     break;
// }

// console.log(selectedMeal);
// console.log(price);

// if (price!=='') {
//     console.log('Thank you for your order!');
    
// }


// Task 3: Student Scholarship Checker (Combining Conditions)

// A school offers scholarships based on examination performance and attendance.

// A student qualifies for a scholarship if:

// Their examination score is at least 80.


// Their attendance percentage is at least 90.


// Instructions:

// Use prompt() to collect the student's name, examination score and attendance percentage.


// Convert the score and attendance values to numbers.


// Use logical operators and if...else to check whether the student meets both requirements.


// Display "Congratulations! You qualify for a scholarship." if both conditions are met.


// Otherwise, display "You do not qualify for a scholarship."


// Validate both numeric inputs to ensure they are between 0 and 100, and reject empty or invalid entries.




// In addition to completing the programming tasks, all students are expected to carefully read and revise their JavaScript class notes, paying particular attention to the topics covered so far.


// 3RD Task
// const StuName=prompt('Enter Your Name');
// const score=Number(prompt('Student score'));
// const attendance=Number(prompt('Attendance percentage'));
// console.log(StuName);
// console.log(score);
// console.log(attendance);

// if (StuName === null ) {
//     console.log("No input provided");
    
// }else if(score<0 || score >100){
//     console.log("invalid exam score");
    
// }else if( attendance<0 || attendance >100){
//     console.log("Invalid entry");
    
// }else {
//     const scholarships= score >= 80 && attendance >= 90;
//     if (scholarships) {
//         console.log("Congratulations! You qualify for a scholarship.");
        
    
//     }else {
//         console.log("You do not qualify for a scholarship.");
//     }
    
// }

// CORRECTION OF ASSIGNMENT: 15TH OCTOBER 2026
// TASK 1: let customerAge = 11;

// let ticketMessage = customerAge <= 12 
// ? "Children's discount applied!" 
// : "Regular ticket price applies."

// console.log(ticketMessage);

// TASK 2without prompt : let meals = "yam";
// let welcomeMessage = "Welcome to FreshBite Restaurant!"
// let thanksMessage = "Thank you for your order!"

// switch (meals) {
//     case "rice":
//         console.log(welcomeMessage);
//         console.log("Selected meal: Rice");
//         console.log("Price: ₦3,500"); 
//         console.log(thanksMessage);   
//         break;

//     case "beans":
//         console.log(welcomeMessage);
//         console.log("Selected meal: Rice");
//         console.log("Price: ₦2,500");    
//         console.log(thanksMessage);
//         break;

//     case "yam":
//         console.log(welcomeMessage);
//         console.log("Selected meal: Rice");
//         console.log("Price: ₦3,000");    
//         console.log(thanksMessage);
//         break;

//     case "spaghetti":
//         console.log(welcomeMessage);
//         console.log("Selected meal: Rice");
//         console.log("Price: ₦4,000"); 
//         console.log(thanksMessage);
           
//         break;

//     default:
//         console.log("Sorry, this meal is unavailable.");
//         break;
// }

// TASK3 without trim - let studentNmae = prompt("Enter student name");
// let examScore = Number(prompt("Enter student exam score"));
// let attendancePercent = Number(prompt("Enter student attendance percentage"))

// if (examScore < 0 || 
//     examScore > 100 || 
//     attendancePercent < 0 ||
//     attendancePercent > 100
// ) {
//     console.log("Invalid exam score or attendence percentage");
    
// } else if (examScore >= 80 && attendancePercent >= 90) {
//     console.log("Congratulations! You qualify for a scholarship.");
    
// } 

// else {
//      console.log("You do not qualify for a scholarship.");
     
// }



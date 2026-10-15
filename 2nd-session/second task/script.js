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

const weight=4.455627
if (weight <= 0 || weight >= 15.5) {
    console.log('Invalid weight');
    
}else if(weight <=2 ){
    console.log('₦1,500');
    
}else if(weight <=5 ){
    console.log('₦3,500');
    
}else {
    console.log('₦5,000');
    
}

// Task 1: Collect Student Information
// Using prompt(), ask the user to enter:
// 1. Student's full name.
// 2. Student's examination score (between 0 and 100).
// Instructions:
// - Store the student's name in a variable called studentName.
// - Store the examination score in a variable called score.
// - Use Number() to convert the score to a number.


let studentName= 'Micheal Okiki';
let examScore= '53.4';
console.log(Number(examScore));


// Task 2: Determine the Student's Grade
// Using if...else if...else, determine the student's grade according to the following criteria:
// Score	Grade	Remark
// 70–100	A	Excellent
// 60–69	B	Very Good
// 50–59	C	Good
// 40–49	D	Fair
// 0–39	F	Fail
// Requirements:
// 1. Create variables called grade and remark.
// 2. Use conditional statements to assign the appropriate values.
// 3. Ensure that the correct grade is assigned based on the student's score.

const grade=53.5
if (grade <0 || grade > 100) {
    console.log('Invalid Score');
    
}else if(grade <40){
    console.log('F  Fail');
    
} else if(grade <45){
    console.log('E Poor');

} else if(grade <50){
    console.log('D Fair');

} else if(grade <60){
    console.log('C Good');

}  else if(grade <70){
    console.log('B Very Good');
    
}else {
    console.log('A Excellent');
    
}

// Task 3: Determine Pass or Fail
// Using a separate if...else statement:
// - If the student's score is 40 or above, display "Congratulations! You passed."
// - Otherwise, display "Unfortunately, you failed. Please try again."
// Store the result in a variable called status.


if (grade >=40) {
    console.log( "Congratulations! You passed.");
    
} else {
   console.log("Unfortunately, you failed. Please try again.");
    
}
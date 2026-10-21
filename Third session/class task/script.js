// for( let i=4; i<=13; i++){
    
//     if (i===8) {
//         continue;
       
        
//     }
     
//     if (i===6) {
//         break;
//     }
//     console.log(i);
     
// }

// // TASK 1
// for (let i=1; i<=10; i++){
//     console.log(i);
    
// }

// // TASK 2
// for (let i=10; i>=1; i--){
//     console.log(i);
    
// }

// // TASK 3
// for (let i=1; i<=15; i+=2){
//     console.log(i);
    
// }

// // TASK 4
// for (let i=1; i<=5; i++){
//     console.log("I love JavaScript");
    
// }

// // TASK 5
// for (let i=2; i<=20; i+=2){
//     console.log(i);
    
// }

// // TASK 6
// let sum=0;
// for (let i=1; i<=10; i+=2){
//     sum= sum + i;
//     console.log(sum);
// }

// // TASK 7
// for(let i=1; i<=10; i++){
//     if (i===6) {
//         break;
//     }
//     console.log(i);
    
// }

// // TASK 8
// for(let i=1; i<=10; i++){
//     if (i===5) {
//         continue;
//     }
//     console.log(i);
    
// }

// // TASK 9
// for(let i=1; i<=15; i++){
//      if (i % 2 === 0) {
//         continue;
//     }
//     if (i===11) {
//         break;
//     }
//     console.log(i);
    
// }

// FUNCTION
// function introduceYourSelf() {
//     console.log("I go by the Name Emmanuel and my favourite subject is Tailwind CSS");
    
// }
// introduceYourSelf()
// introduceYourSelf()

// Practice Task 2
// 1. Create a function named greetUser with a parameter called name.
//    Display "Good morning, [name]!".
//    Call it with two different names.

// 2. Create a function named multiplyNumbers.
//    It should accept two parameters and display their product.

// 3. Create a function named welcomeVisitor.
//    Give its name parameter a default value of "Visitor".
//    Call it with a name and then without an argument.

// function greetUser(name) {
//     console.log(`Good morning, ${name}`);
    
// }
// greetUser("Wahab")
// greetUser("Isaac")

// function multiplyNumbers(age,year) {
//     console.log(`I am currently ${age} years old and was birthed on the ${year}`);
    
// }
// multiplyNumbers(42,"23/01/1974")

// function welcomeVisitor(visitor) {
//     console.log(`Give a warm welcome to ${visitor}`);
    
// }
// welcomeVisitor("Faruq")
// welcomeVisitor("Moses")
// welcomeVisitor("Gabriel")
// welcomeVisitor("Harold")

// function subtractNumbers(firstNo, secondNo) {
//     return firstNo - secondNo
// }

// subtractNumbers(18,6)
// console.log(subtractNumbers(18,6));

// function calculateArea(length, width) {
//     return length * width
// }

// console.log(calculateArea(8,3));


// function isEven(num) {
//     if (num % 2===0) {
//       return true  
//     }
//     return false
// }
// console.log(isEven(5));

// const displayCourse = function() {
//     console.log("I am learning web development");
    
// }
// displayCourse()

// const divideNumbers = function(fNo, sNo) {
//     return fNo / sNo
// }
// console.log(divideNumbers(45,5));


// CLASS TASK: // 1. Declare a variable named course outside a function.
//    Create a function that displays course.
//    Call the function.

const course='psychology';
function displaycourse() {
    console.log(course);
    
}
displaycourse();


// 2. Declare studentName inside a function.
//    Display it inside the function.
//    Then try displaying it outside.
//    Explain the error, then comment out the failing line.

function welStudent() {
    const studentName="Peter"
    console.log(studentName);
    
}
welStudent();
// console.log(studentName); Error:studentName undefined


// 3. Declare a variable using let inside an if block.
//    Try accessing it outside the block.
//    Explain what happens, then comment out the failing line.

if (true) {
    let schoolName= "Tech Studio Academy is Fun"; 
    console.log(schoolName);
    
}
// console.log(schoolName); undefined



// 4. Calculate an Employee’s Total Pay
// 1. Create a global variable named bonus using const and assign it 5000.

const bonus = 5000;

// 2. Create a function named calculateTotalPay that accepts a parameter named salary.
// 3. Inside the function, create a local variable named totalPay that stores the sum of salary and the outer variable bonus.
// 4. Return totalPay.

function calculateTotalPay(salary) {
    const totalPay= salary + bonus
    return totalPay
}
// 5. Call calculateTotalPay with 50000 and display the returned value using console.log().

console.log(calculateTotalPay(50000));

// 6. Explain why the function can access bonus even though it was declared outside the function.
// it can be accessed because the outside variable is connected with the one inside

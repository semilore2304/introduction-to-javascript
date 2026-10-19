// // Weekend Task


// // 1. Countdown:
// //    Display numbers from 20 down to 1.
// for (let i=20; i>=1; i--){
//     console.log(i);
    
// }

// //  2. Odd and Even Numbers:
// //   a. Display odd numbers from 11 to 25.
// //   b. Use a separate loop to display even numbers from 10 to 30.

// for (let i=11; i<=25; i++){
//     if (i % 2 ===0) {
//         continue;
//     }
    
//     console.log(i);
// }

// for (let i=10;i<=30; i++){
//     if (i % 2 ===1) {
//         continue;
//     }
//     console.log(i);
    
// }

// 3. Calculate a Total:
//    Calculate the sum of numbers from 1 to 20.
//    Display the final total after the loop ends.

// tot = 0
// for (let i=1; i<=20; i++){
//     tot = tot +i;
//     console.log(tot);
    
// }
//  console.log(tot);

// 4. break and continue:
//    Count from 1 to 15.
//    Use continue to skip 4.
//    Use break to stop at 12, without displaying 12.

// console.log("FINAL TOTAL:"+tot);
//     for (let i=1; i<=15; i++){
//         if (i===4) {
//             continue;
//         }
//         if (i===12) {
//             break
//         }
//         console.log(i);
        
//     }

// 5. Loop Through a String:
//    Create a variable containing "JavaScript".
//    Use a for loop to display each character separately.

// nscript="Javascript";
// for (let i=0; i<nscript.length; i++){
    
//    console.log(nscript[i]);   
// }
// console.log(nscript);


// PART B — while Loop

// 6. Countdown:
//    Display numbers from 15 down to 5.

// for (let i=15; i>=5; i--){
//     console.log(i);
// }

// 7. Calculate a Total:
//    Calculate the sum of even numbers from 2 to 20.
//    Hint: Start your counter at 2 and increase it by 2.
//    Display the final total after the loop ends

// sum=0
// for (let i=2;i<=20; i++){
//     if (i % 2 ===1) {
//         continue;
//     }
//     sum +=i;
//     console.log(sum);
    
// }
// console.log(`FINAL TOTAL:${sum}` );

// 8. break and continue:
//    Count from 1 to 10.
//    Use continue to skip 5.
//    Use break to stop at 9, without displaying 9.
//    Ensure your counter increases when you skip 5.

//  for (let i=1; i<=10; i++){
//      if (i===5) {
//      continue;
//      }
//      if (i===9) {
//       break
//      }
//      console.log(i);
        
//     }

// 9. Password Checker:
//    Use prompt() to keep asking for a password
//    until the user enters "learn123".
//    After the loop, display "Access granted!" using alert().
//    Assume the user does not click Cancel.

    // let password = prompt("Enter password");
    // while (password !== "learn123"){

    //     password= prompt("Enter password")
        
    // }
    // alert("Access granted")
    // console.log(password);
    

// PART C — do...while Loop

// 10. Display a Message:
//     Display "I am learning JavaScript!" five times.


let i=1
do {
    console.log("I am learning JavaScript!");
    i++;
} while (i<=5);

// for (let i=1; i<=5; i++){
//     console.log("I am learning JavaScript!");
    
// }
    

// 11. Secret Word:
//     Use prompt() to ask for a secret word.
//     Repeat until the user enters "coding".
//     After the loop, display "Correct word!" using alert().
//     Assume the user does not click Cancel.

// let seCode;
// do {
//     seCode = prompt("Enter secret word");
    
//     if (seCode !== 'coding' && seCode !== null) {
//         alert('Incorrect word');
//     }
// } while (seCode !== 'coding');

// alert('Correct word');

    


// 12. A False Condition:
//     Create a variable named isLearning and assign it false.
//     Use a do...while loop to display "Keep learning!"
//     and repeat while isLearning is true.
//     In a comment, explain how many times the message appears.

// const isLearning= false;
// do {
//     console.log("Keep learning!");
    
// } while (isLearning === false);

// PART D — for...of Loop

// 13. Loop Through a String:
//     Create a variable containing your first name.
//     Display each character separately.

// name=EMMANUEL
// for (let i=1; i<=name.length; i++){
//     console.log(name.lenght[i]);
// }

// 14. Loop Through an Array:
//     Create an array containing five phone brands.
//     Display each brand using a for...of loop.

// let phones= ["Infinix","Samsung","Redmi","iphone","Huawei"]
// for (let index of phones) {
//     console.log(index);
// }

// 15. Calculate a Total:
//     Create an array named prices containing:
//     1500, 2000, 3500, 1000, 2500.
//     Use a for...of loop to calculate the total.
//     Display only the final total after the loop ends.

// let prices=[1500, 2000, 3500, 1000, 2500]
// total=0;
// for (let index of prices){
//       total= index + total
    
// }
// console.log(total);

// PART E — Conditional Statements

// 16. if...else — Check Voting Eligibility:
//     Ask the user to enter their age using prompt().
//     Convert the input to a number.
//     If they are 18 or older, display "Eligible to vote".
//     Otherwise, display "Not eligible to vote".
//     Assume the user enters a valid age.

// let age= Number(prompt("Input your age"))
// if (age >= 18) {
//     alert("Eligible to vote")
//     console.log("Eligible to vote");
// } else {
//     alert("Not eligible to vote")
//     console.log("Not eligible to vote");
    
// }

// 17. Nested if...else — Student Discount:
//     Create a variable named isStudent and assign it true.
//     Create a variable named purchaseAmount and assign it 6000.
//
//     If the customer is a student:
//       Use a nested if...else to check their purchase amount.
//       - If it is at least 5000, display:
//         "You get a 10% discount!"
//       - Otherwise, display:
//         "Spend at least ₦5,000 to get a discount."
//
//     If the customer is not a student:
//       Display "This discount is for students only."
//
//     Test your code with:
//     a. isStudent = true, purchaseAmount = 6000.
//     b. isStudent = true, purchaseAmount = 3000.
//     c. isStudent = false, purchaseAmount = 6000.

// const isStudent= false;
// const purchaseAmount=6000;
// if (isStudent===false) {
//      alert("This discount is for students only.")
//     console.log("You get a 10% discount!");
    
// }else if(purchaseAmount >=5000){
//    alert("You get a 10% discount!")
// } else {
//     alert( "Spend at least ₦5,000 to get a discount.")
//     console.log( "Spend at least ₦5,000 to get a discount.");
    
// }

// 18. Ternary Operator — Check a Score:
//     Create a variable named score and assign it 65.
//     Use a ternary operator to check whether score is at least 50.
//     Store "Passed" or "Failed" in a variable named result.
//     Display result in the console.
//     Test your code with scores of 65, 40, and 50.


let score=65;
let result= score>=50 ?"Passed":"Failed"
console.log(result);

// OR

// let score=60;
// score >= 50 ? console.log("Passed")
//  :console.log("Failed");
 


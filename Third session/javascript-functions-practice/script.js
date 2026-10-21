function displayReminder() {
    console.log("Remember to practise JavaScript every day!");
    
}
displayReminder()
displayReminder()
displayReminder()

function welcomeLearner(learnerName) {
    console.log(`Welcome, ${learnerName}!`);
    
}

welcomeLearner("Amina")
welcomeLearner("David")

function describeProduct(productName,price) {
    console.log(`A ${productName} costs ₦${price}.`);  
}
describeProduct( "Notebook",1500)
describeProduct( "Schoolbag",12000)

function showCity(city="Lagos") {
   console.log(`Your selected city is ${city}`); 
}

showCity()
showCity("Abuja")
// showCity(shs);

function calculateSubtotal(price,quantity) {
    return  price * quantity
   
}
const subtotal= calculateSubtotal(2500, 4)
const deliveryFee=1500
console.log(subtotal + deliveryFee);

function checkPass(score = 80) {
   if (score < 50) {
    return "Try again"
   } 
   return "You passed"
}
console.log(checkPass());
console.log(checkPass(50));
console.log(checkPass(35));

 
function isPositive(number = -3) {
    if (number > 0) {
        return true
    }
    return false
}
console.log(isPositive());

const displayStudyTip = function () {
    console.log("Practice a little every day.");
    
}
displayStudyTip()
displayStudyTip()

const calculateBalance = function (amountPaid,totalCost) {
    return amountPaid - totalCost
}
const balance = calculateBalance(10000,7500)
console.log(balance);

const introduceLearner = (learnerName,courseName)=>{
    console.log(`${learnerName } is studying ${courseName}`); 
}
introduceLearner('Bola','Javascript')

const multiplyExpression = function (fNo,sNo){
    return fNo * sNo
}
console.log(multiplyExpression(6,5));

// scope
// function greet(nname) {
//     console.log(nname);
    
// }
// greet("Ada")
// console.log(nname);


function showSuccess() {
    
    if (true) {
        ;
        
    }
    
}
showSuccess()

function completeTask(callback) {
    callback();
}
completeTask(showSuccess)
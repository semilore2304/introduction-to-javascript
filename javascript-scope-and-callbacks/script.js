const academyName="Tech Studio Academy"
function showAcademy() {
    console.log(academyName);
    
}
showAcademy()
console.log("Tech Studio Academy");

function displayFavouriteFood() {
    const favouriteFood="Jollof Rice"
    console.log(favouriteFood);
    
}
displayFavouriteFood();
// console.log(favouriteFood);

function displayCity(displayCityName) {
    console.log(displayCityName);
    
}
displayCity("Lagos");
// console.log(cityName);



if (true) {
   let studyMessage= "keep Learning"; 
   console.log(studyMessage);
   
}
// console.log(studyMessage);

const serviceCharge=500;
function calculateBill(mealprice) {
    totalBill = mealprice + serviceCharge
}
calculateBill(3500)
console.log(totalBill);

function showReminder() {
    console.log("Submit Your Assignment!");
    
}
showReminder()
function runReminder(assignment){
    assignment()
}
runReminder(showReminder)


function welcomeMember(memberName) {
    console.log(`Welcome to the club,${memberName}`);
    
}
welcomeMember("saka");

function processMember(memberName,club){
   club(memberName)
}
processMember("Zainab", welcomeMember)
function processDelivery(customerName, city, logistics) {
    logistics(customerName, city)
}
processDelivery("Ayo","Ibadan", (customerName,city) =>{console.log(`${customerName}, your order is going to ${city}`);
}) 

const courses = ["HTML", "CSS", "JavaScript", "React"];
courses.forEach(subjects => {
    console.log(`course: ${subjects}`);
    
});

courses.forEach((fullstack, no)=> {
    console.log(`${no + 1}: ${fullstack}`);
    
})

const numbers = [3, 6, 9, 12];
doubledNumbers=numbers.map(multiply => {
    return multiply * 2
});
console.log(doubledNumbers);

// const firstNo=6, secondNo=12,thirdNo=18,fourthNo=24;
// console.log(firstNo);
// console.log(secondNo);
// console.log(thirdNo);
// console.log(fourthNo);

const ages = [12, 18, 25, 16, 30, 17];
const adultAges= ages.filter(a => {
    return a >= 18;
})
console.log(adultAges);

const names = ["Ada", "Bola", "Chiamaka", "Tunde", "Oluwaseun"];

const firstLongName = names.find(n => {
    return n.length >5 
})
const firstLongName2 = names.find(n => {
    return n.length >20 
})
console.log(firstLongName);

console.log(firstLongName2);

const expenses = [1500, 2500, 1000, 3000];
const total= expenses.reduce((accumulator, price)=>{
  return accumulator + price}, 0)
console.log(total);


const scores = [40, 75, 60, 30, 90];
console.log(scores.filter(s => {
    return s >=60
}));

console.log(scores.find(s => {
    return s >=60
}));

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

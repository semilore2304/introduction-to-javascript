const word='Welcome to our coding club';
console.log(word);

console.log(word.includes('coding'));

console.log(word.startsWith('Welcome'));
console.log(word.endsWith('club'));
console.log(word.substring(15,21));

let statement='Books are useful. Books are exciting.'
console.log(statement);
console.log(statement.replace("Books", "Stories"));
console.log(statement.replaceAll("Books", "Stories"));

const color='red,blue,green'
console.log(color.split(','));

const sum='42';
console.log(sum.padStart(4, '0'));

const num='42';
console.log(num.padEnd(4, '*'));

let firstMotto=' Happy';
let secondMotto='Learning';
console.log(firstMotto.concat(' ',secondMotto));



const result= firstMotto.concat(' ',secondMotto)
console.log(result.charAt(0));
console.log(result.repeat(2));
console.log(result.trimStart());

// 2nd class task

const fOne='Good'
const fTwo='morning'
const greeting= fOne + ' ' + fTwo
console.log(greeting);

const fName='Chidi';
const greet='welcome';
const visitorName= greet + ' ' +fName
console.log(visitorName)
;
   
const customerName = "Zainab";
const ticketCount = 3;
const eventName = "Music Night"
//    Zainab booked 3 tickets for Music Night.
const bookMessage= customerName + ' booked ' + ticketCount + ' tickets for ' + eventName + '.'
console.log(bookMessage);

const secondMessage= customerName.concat(" booked ", ticketCount, " tickets for ", eventName, '.' )
console.log(secondMessage);

// 3rd task
const oruko='Micheal'
const age= 40;
const course='Economics'
// hi i go by the name micheal currently at the age of 40 studied economics

const intro1=`Hi i go by the name ${oruko}, currently at the age of ${age}, studied ${course} at OOU`
console.log(intro1);

const productName='Table Bottle';
const price=6000;
const quantity=200;

// the current price of is naira per packs and we have about packs that can be supplied by Dami
console.log(`The current price of ${productName} is ${price} naira per pack and we have about ${quantity} packs that can be supplied by Micheal within the next 24 hours, so the total is ${price * quantity} naira.`);


// Welcome to Ivory Fine Dining, where every one of our 20 meals tells a story. Savor the passion in every bite and the warmth of good company. Sit back, relax, and let us make your dining experience unforgettable.
const restName='Ivory Fine Dining';
const type= 20;
console.log(`Welcome to ${restName}, where every one of our ${type} meals tells a different story.Savor the passion in every bite and the warmth of good company.`);



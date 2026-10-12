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
const greeting= fone + ' ' + ftwo
console.log(greeting);

const fname='Chidi';
const greet='welcome';
const visitorName= greet + ' ' +fname
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
    
    

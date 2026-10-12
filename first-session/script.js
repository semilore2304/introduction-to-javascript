console.log("Emmanuel");

document.getElementById('vent').textContent = "Emmanuel"

console.log('I am learning javascript');


console.log('Build Interactive Websites');
document.getElementById('java').textContent='Build Interactive Websites'


console.log('Create Server-Side Applications');
document.getElementById('server').textContent='Create Server-Side Applications'


console.log('Develop mobile app');
document.getElementById('app').textContent='Develop mobile app'

var beach='string'


// console.log() writes a message behind the scenes in the developer console for testing, while document.getElementById().textContent pushes text updates directly to the user's screen.
// The screen demonstrate three major uses of JavaScript: making web pages interactive, running backend server code, and building mobile apps.

// console.log("Bukola");

// document.getElementById('my-name').textContent = "Bukola"


// Task 1
// 1. Display "I am learning JavaScript." in the console.
// 2. Display three things JavaScript can do on a website in the console.
// 3. Add a comment explaining your code.

console.log('I am learning Javascript');

console.log('Open and close a navigation menu.');
console.log('Change text or images.');
console.log('Show or hide content.');

// Using console.log, I displayed a simple sentence and three things javascript can do on a website in the browser's console. 

// VARIABLES AND NAMING CONVENTIONS
// variables: Containers for holding values in js. It is a named place for storing a value.


// Ways of declaring variables
// These below are three declarators:
// var
// let
// const

// 1.  var: oldest way of declaring variables, rarely in use anymore
// syntax
// declarator variablename = value

var fullstackClass = "August Cohort";
console.log(fullstackClass);


// 2. let: Used in place of var for declaring variables that can be reassigned. Use let when you expect to assign a different value later.
let bottle = "water";
console.log(bottle);

// console.log("Emmanuel");
let studentName = "Emmanuel";
console.log(studentName);

// You can change/reassign the value of the variable. When changing the value, do not write let again.

let city = "Lagos";
city = "Abuja";
console.log(city);


// 3. const: It is used to declare variables that are not subject to change. Use const when you do not expect to reassign the variable. 
// const day = "Thursday";
// day = "Friday";
// console.log(day);



// NAMING RULES FOR VARIABLES/VARIABLE NAME

// 1. A JavaScript variable name can begin with:
// - A letter: a–z or A–Z
// - An underscore: _
// - A dollar sign: $

let age = 32;
console.log(age);

let Band = "A";
console.log(Band);

let _food = "Rice";
console.log(_food);

let $currency = "Dollar";
console.log($currency);

//  2. Cannot begin with a number. but numbers can appear after the first character.
// let 4book = "Folktale";
let book4 = "Folktale"
console.log(book4);

// 3. Cannot use reserved keywords (let, if, for, etc.)
// let let = "let me take a nap."


// 4. Should be meaningful and descriptive
const studentScore = 60;
console.log(studentScore);


// 5. Are case-sensitive.
// Javascript is case-sensitive. For example, myStudent and MyStudent are separate variable names.

let myStudent = "IB";
console.log(myStudent);

let MyStudent = "Fawaz";
console.log(MyStudent);

// The different casings we can use for variables:
// a. camelcasing: yourHouseIsBeautiful
let newHouse = "Palace";
console.log(newHouse);

let newYabaHouse = "Bungalow";
console.log(newYabaHouse);


// b. pascalcasing: YourHouseIsBeautiful
let FatherFigure = "Dami";
console.log(FatherFigure);

let TheFatherFigure = "Dami Again";
console.log(TheFatherFigure);


// c. snakecasing: your_house_is_beautiful
let new_state = "New Jersey";
console.log(new_state);

const firstName="Emmanuel";
console.log(firstName);


const lastName="Ogunrinde";
console.log(lastName);


const country="Nigeria";
console.log(country);

let currentScore=20;
currentScore=35;
console.log(currentScore);

// studentName
// score1st
// total_price

// Because studentName is a camelcasing while StudentName is pascalcasing in which js sees it as a different variablename

// JAVASCRIPT DATA TYPES 
// A data type describes the kind of value you are working with. 
// For this lesson, we will group JavaScript values into:
// - Primitive data types
// - Complex data types, also called non-primitive types

// 1. Primitive Data Types
// Primitive values represent individual values, such as text, a number, or a boolean.
// JavaScript has seven primitive data types:

// | Type      | Example |
// |-----------|----------------|
// | String    | `"Bukola"`     |
// | Number    | `25`           |
// | Boolean   | `true`         |
// | Undefined | `undefined`.   |
// | Null      | `null`         |
// | BigInt    | `123n`         |
// | Symbol    | `Symbol("id")` |

// We will focus on the first five.


// // Complex Data Types
// Complex values can group several pieces of information.
// “Complex” does not mean difficult. Here, it means that the value can contain other values.
// JavaScript’s non-primitive type is object. We will study:
// - Arrays — special objects used for lists.
// - Objects — used for related details with named properties.


// A. Strings
// A string represents text. Write strings inside single quotes, double quotes, or backticks.

let fig = "three";
console.log(fig);

let fig2 = 'four';
console.log(fig2);

let fig3 = `five`;
console.log(fig3);


// NOTE: Numbers inside quotation marks are also strings:
let num = "5";
console.log(num);

// Phone numbers are usually stored as strings to preserve their leading zeros:
let phoneNum = "090 1234 5678";
console.log(phoneNum);


// B. NUMBERS
// Numbers include whole numbers, decimals, and negative values.
// Do not add quotation marks when you want a number.
const num1 = 57;
console.log(num1);

const num2 = 34.5;
console.log(num2);

const num3 = -31;
console.log(num3);


//  C. Booleans
// A boolean has one of two values:
// true
// false

// Booleans are useful for yes-or-no information.
// Do not add quotation marks when you want a boolean.
let isFatherFigure = false;
console.log(isFatherFigure);

let isNotPresent = true;
console.log(isNotPresent);

// These two are different:
// This is a boolean
let isFullstack = true;
console.log(isFullstack); 

// This is a string
let isDataAnalysis = "false";
console.log(isDataAnalysis);

// D. NULL
// null represents an intentional absence of a value.
let selectedProduct = null;
console.log(selectedProduct);

// This could mean that the user has not selected a product.

// E. UNDEFINED
// A variable declared without a value is undefined.
let ticketPrice;
console.log(ticketPrice);


// A useful starting distinction:
// -------------------------------------------------------
// Value	    | Meaning in these examples                |
// -------------------------------------------------------
// null	      | We deliberately assigned an empty value  |
// undefined	| No value has been assigned               |
// -------------------------------------------------------

// COMPLEX/NON-PRIMITIVE DATA TYPES

// F. ARRAYS
// // An array stores a list of values.
// // Arrays use square brackets: [].
const furniture = ["chair", "table", "wardrobe", "bed", "cabinet"]
console.log(furniture);

// Each item has a position called an index. Indexes start at 0.

console.log(furniture[0]);
console.log(furniture[2]);
console.log(furniture[4]);

furniture[0] = "Shelf";
console.log(furniture);

// Why is this allowed with const? We are changing an item inside the array. We are not assigning a different array to fruits.

const stuff = ["food", 20, true, "water"]
console.log(stuff);


// G. OBJECT
// An object stores related information using property names and values.
// Objects use curly braces: {}.
// EXAMPLE:
const student = {
    name: "IB",
    gender: "male",
    nationality: "US",
    language: "English (US)"
}

console.log(student);


// Read a property using dot notation:
console.log(student.gender);
console.log(student.language);

// Change a property:
student.language = "Yoruba";
console.log(student.language);
console.log(student);

// Use an array for a list, and an object for the details of something.


// CHECKING TYPES WITH typeof:
console.log(typeof student);
console.log(typeof furniture);
console.log(typeof ticketPrice);
console.log(typeof selectedProduct);
console.log(typeof isFatherFigure);
console.log(typeof num1);
console.log(typeof fig);


// Two special cases:
// console.log(typeof null); // object
// console.log(typeof []);   // object

// 1. Why does typeof null return "object"?
// console.log(typeof null); // object

// This is a historical mistake in JavaScript that remains for compatibility with existing code.

// null is a primitive value, not an object. It represents an intentional absence of a value.
// const selectedProject = null;

// To check whether a value is null, use:
console.log(selectedProduct === null);

// -----
// [] is an empty array. Arrays are a special kind of object in JavaScript, so this result is correct.
// To check specifically whether a value is an array, use Array.isArray():

const veggies = ["peas", "carrot", "green beans"]
console.log(typeof veggies);
console.log(Array.isArray(veggies));

// Task 3
// 1. Create one example of each value covered in this lesson.
// 2. Create an array containing four favourite foods.
// 3. Display the first and last foods.
// 4. Display the number of foods.
// 5. Create a student object containing name, age, course, and hasPaid.
// 6. Display the student’s name and course.
// 7. Change the student’s age.
// 8. Use typeof to check a string, number, and boolean.

const name="Daniel";
console.log(name);

const month= 10;
console.log(month);

const aWomanizer=true;
console.log(aWomanizer);

const notAWomanizer=false;
console.log(notAWomanizer);

const color= null;
console.log(color);

let superMall;
console.log(superMall);


const phone=["iphone", "samsung", "infinix", "tecno"]
console.log(phone);


const application={
    name: "dami",
    phone:"09086345721",
    post: "hr"
}
console.log(application);


const food=["rice", "noodles", "porridge", "egg"]
console.log(food);

console.log(food[0]);
console.log(food[3]);

const stuName={
    name:"jamal",
    age:"20",
    course: "economics",
    hasPaid: true,
}

console.log(stuName.name);
console.log(stuName.course);

stuName.age=17;
console.log(stuName.age);

console.log(typeof name);
console.log(typeof month);
console.log(typeof aWomanizer);

// 7.includes()
// Checks whether a string contains a particular text and returns a boolean value.
const brand = "Nike";
console.log(brand.includes("i"));

// We can also specify the index value from which to start a search: 
const fruit = "mango";
console.log(fruit.includes("n", 1));

// 8. replace()
// Takes out value to be replaced and replaces it with another.
const statement = "Hello World!";
console.log(statement.replace("World", "Dear"));

// 9. replaceAll()
// Replaces every occurrence of matching text.
const sentence = "Tola, your namesake Tola is here."
console.log(sentence.replaceAll("Tola", "Fawaz"));

// 10. repeat()
// Helps us to repeat a value
const rating = "*";
console.log(rating.repeat(5));

// 11. split()
// To divide/section values.
const fruits = "apple";
console.log(fruits.split(""));

// 12. startsWith() and endsWith()
// StartsWith(): Checks whether a string begins with particular text.
// EndsWith(): Checks whether a string ends with particular text.
// Both returns a boolean result.
const word1 = "brain drain";
console.log(word1.startsWith("brain"));
console.log(word1.endsWith("drain"));

// 13. padStart() and padEnd()
// padStart() adds padding at the beginning until the string reaches a specified total length.
// Syntax:
// string.padStart(targetLength, paddingText)

// 14. padEnd() works like padStart(), but adds padding at the end.
// string.padEnd(targetLength, paddingText)
const word2 = "chocolate";
console.log(word2.padStart(16, "brownie"));
console.log(word2.padEnd(25, "yummy"));

// 15. charAt()
// charAt() — Get a Character
// charAt() returns the character at a specified index.
// Indexes start at 0, and spaces count.
const msgg = "Tell me more";
console.log(msgg.charAt(9)); //deals with the index to get to the character.
console.log(msgg.indexOf("o")); // deals with the character to get to the index.

// 17. substring() — Extract Part of a String
// substring() extracts text between two indexes.
// string.substring(startIndex, endIndex)
const real = "rule your world";
console.log(real.substring(5, 12));

// 18. concat() — Join Strings
// concat() joins strings together.
const firstWord = "Tech";
const secondWord = "Studio";
console.log(firstWord.concat(" ", secondWord));
// It does not automatically add spaces. We have included a space as another argument.






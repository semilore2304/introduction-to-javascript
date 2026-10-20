// JavaScript Home Task: Arrays, Spread and Destructuring

// Instructions

// - Create a folder named javascript-array-practice.
// - Inside the folder, create index.html and script.js.
// - Connect script.js to index.html.
// - Complete all tasks in script.js. Use comments to separate and number your answers.
// - Use console.log() to display your results in the browser console.
// - Revise your class notes and be ready to explain your code.
// - Upload your completed work to a GitHub repository named javascript-array-practice. Ensure it contains both files.
// - Use a meaningful commit message, such as Complete JavaScript array home task.
// - Share your *GitHub repository link* for review.

// 1. Create and Access an Array

// Create an array named foodItems containing "Rice", "Beans", "Yam", "Bread" and "Plantain".
// - Display the entire array.
// - Display the first and third items using their indexes.
// - Display the number of items using length.
// - Display the last item using foodItems.length - 1.
// - Replace "Yam" with "Potato" and display the updated array.

const foodItems=["Rice", "Beans", "Yam", "Bread", "Plantain"]
console.log(foodItems);
console.log(foodItems[0]);
console.log(foodItems[2]);
console.log(foodItems.length);
console.log(foodItems[foodItems.length - 1]);

foodItems[2]="potato"
console.log(foodItems);

// 2. Add and Remove Items

// Create an array named shoppingList containing "Milk", "Sugar" and "Bread".

// Perform these operations in order, displaying the array after each operation:


// - Add "Eggs" to the end using push().

const shoppingList=["Milk", "Sugar","Bread"]
shoppingList.push("egg")
console.log(shoppingList);

// - Add "Butter" to the beginning using unshift().

shoppingList.unshift("Butter")
console.log(shoppingList);

// - Remove the last item using pop().

shoppingList.pop()
console.log(shoppingList);

// - Remove the first item using shift().

shoppingList.shift()
console.log(shoppingList);


//  3. Find Items

// Create this array:

// const colors = ["Red", "Blue", "Green", "Blue", "Yellow"];

//  3. Find Items

// Create this array:

// const colours = ["Red", "Blue", "Green", "Blue", "Yellow"];

// - Use indexOf() to find the first index of "Blue".
// - Use lastIndexOf() to find the last index of "Blue".
// - Find the index of "Purple". Explain the result in a comment.
// - Use at(-1) to display the last item.

const color=["Red", "Blue", "Green", "Blue", "Yellow"];
console.log(color);


console.log(color.indexOf("Blue"));
console.log(color.lastIndexOf("Blue"));
console.log(color.indexOf("Purple"));

// -1

console.log(color.at(-1));




//  4. Loop Through an Array

// Create an array named phoneBrands containing five phone brands.

// - Use a regular for loop to display each brand.
// - Use a for...of loop to display each brand.
// - Use a for...in loop to display the indexes.


const phoneBrands=["Samsung","Infinix","Vivo","Redmi","Tecno","Iphone"];
for (let i=1; i<phoneBrands; i++){
    console.log(phoneBrands[i]);
    
}
for (let p of phoneBrands){
    console.log(p);
    
}
for (let p in phoneBrands)
    console.log(p);

// 5. Remove Items with splice()

// Create this array:

// const animals = ["Dog", "Cat", "Goat", "Lion", "Elephant"];


// Use splice() to remove "Cat" and "Goat" in one operation. Display the updated array.

const animals = ["Dog", "Cat", "Goat", "Lion", "Elephant"];
animals.splice(1,2)
console.log(animals);



// 6. Add and Replace with splice()

// Create this array:


// const courses = ["HTML", "CSS", "JavaScript"];


// - Use splice() to insert "Git" between "CSS" and "JavaScript" without removing anything.
// - Then use splice() to replace "HTML" with "Web Fundamentals".
// - Display the array after each operation.

const courses = ["HTML", "CSS", "JavaScript"];
console.log(courses.splice(2,0,"Git"));

courses.splice(0,1,"Web Fundamentals")
console.log(courses);


// 7. Copy Part of an Array

// Create this array:


// const cities = ["Lagos", "Abuja", "Ibadan", "Kano", "Enugu"];


// - Use slice() to create a new array named selectedCities containing "Abuja", "Ibadan" and "Kano".
// - Display both arrays.
// - In a comment, state whether slice() changed cities.

 const cities = ["Lagos", "Abuja", "Ibadan", "Kano", "Enugu"];
 const selectedCities=cities.slice(1,4)
 console.log(cities);
 
 console.log(selectedCities);

// NOTE:It did not
 

// 8. Practice copyWithin()

// Create this array:


// const letters = ["A", "B", "C", "D", "E"];


// Use copyWithin() to copy "A" and "B" into the positions currently occupied by "D" and "E".

// - Display the updated array.
// - Display its length.
// - State in a comment whether copyWithin() created a new array.

const letters = ["A", "B", "C", "D", "E"];
letters.copyWithin(3,0,2)
console.log(letters);
console.log(letters.length);

// NOTE:NO it did not create a new array



// 9. Understand delete

// Create this array:


// const drinks = ["Water", "Juice", "Tea", "Coffee"];


// - Use delete to remove the item at index 1.
// - Display the array.
// - Display its length.
// - Explain in a comment how this differs from removing an item with splice().

const drinks = ["Water", "Juice", "Tea", "Coffee"];
delete drinks[1]
console.log(drinks);
console.log(drinks.length);


// delete removes the value thereby leaving the space while splice removes the space and value entirely, it can also be used to replace the value at a particular index.



// 10. Copy an Array with Spread

// Create an array named subjects containing "English", "Mathematics" and "Biology".

// - Use spread to create a copy named subjectsCopy.
// - Add "Chemistry" to the end of subjectsCopy.
// - Display both arrays.
// - Explain in a comment whether adding to the copy changed the original array.

const subjects=["English","Mathematics","Biology"];
const subjectsCopy=[...subjects,"Chemistry"]
console.log(subjects);
console.log(subjectsCopy);

// No it did not change the original array



// 11. Combine Arrays with Spread

// Create these arrays:


// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express", "MongoDB"];


// Use spread to create an array named technologies containing:

// - All items from frontend.
// - All items from backend.
// - "Git" as the final item.

// Display technologies.

 const frontend = ["HTML", "CSS", "JavaScript"];
 const backend = ["Node.js", "Express", "MongoDB"];

 const technologies=[...frontend,...backend,"Git"];
 console.log(technologies);
 

// 12. Extract and Skip Values

// Create this array:

// javascript
// const fruits = ["Apple", "Banana", "Mango", "Orange"];


// Use array destructuring to:

// - Store "Apple" in firstFruit.
// - Skip "Banana".
// - Store "Mango" in thirdFruit.
// - Store "Orange" in fourthFruit.

// Display the three variables

const fruits = ["Apple", "Banana", "Mango", "Orange"];

const [firstFruit,  , thirdFruit, fourthFruit]=fruits

console.log(firstFruit);
console.log(thirdFruit);
console.log(fourthFruit);


// 13. Use a Default Value

// Create this array:

// const users = ["Amina"];

// - Use destructuring to create firstUser and secondUser.
// - Give secondUser a default value of "Guest".
// - Display both variables.
// - Explain in a comment what secondUser would contain without the default value.

const users = ["Amina"];
const [firstUser, secondUser="Guest"]=users
console.log(firstUser);
console.log(secondUser);

// The seconduser would be undefined without the value
 
// 14. Collect Remaining Items with Rest

// Create this array:


// const hobbies = ["Reading", "Cooking", "Dancing", "Gaming"];


// Use destructuring and rest syntax to:

// - Store "Reading" in firstHobby.
// - Collect the remaining items in an array named otherHobbies.

// Display both variables.

const hobbies = ["Reading", "Cooking", "Dancing", "Gaming"];
const [firstHobby, ...otherHobbies]=hobbies
console.log(firstHobby);
console.log(otherHobbies);


    
// 15. Combined Challenge: Class Register

// Create this array:

// const classRegister = ["Ayo", "Bisi", "Chika", "David"];


// 1. Use spread to copy it into a new array named updatedRegister.
// 2. Add "Esther" to the end of updatedRegister.
// 3. Use splice() to replace "Bisi" with "Bukola" in updatedRegister.
// 4. Use destructuring to extract the first student into firstStudent and collect the remaining students into otherStudents using rest syntax.
// 5. Display firstStudent and otherStudents.
// 6. Use a for...of loop to display each name in updatedRegister.
// 7. Display both registers to show that classRegister remains unchanged.

const classRegister = ["Ayo", "Bisi", "Chika", "David"];

const updatedRegister=[...classRegister,"Esther"]
console.log(updatedRegister);

updatedRegister.splice(1,1,"Bukola")
console.log(updatedRegister);

const [firstStudent, ...otherStudents]=updatedRegister

console.log(firstStudent);
console.log(otherStudents);

for (let u of updatedRegister){
    console.log(u);
    
}

console.log(classRegister);

console.log(updatedRegister);



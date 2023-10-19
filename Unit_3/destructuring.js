//  ! Array Destructuring
/* 
    - Syntax is on the left side of assignment operator
    - Great for pulling info out of an array and assigning data to its own variable
*/

const fullName = ['Jane', 'Doe'];

const fName = fullName[0];
const lName = fullName[1];

console.log('First Name: ', fullName[0]);

// const [0, 1] = fullName;
// console.log(0, 1); - using index doesn't work, lol

const [firstName, lastName] = fullName; // making two variables at once, based off array index position
// const above is not making an array, it's making multiple variables
console.log(firstName, lastName);

console.log(`Hello Miss ${lastName}`);

// ! Spread

/* 
    -denoted by three consecutive periods: ...
    -pulls out all elements of an array and gives them to you as a standalone list of elements.

* Concept of the spread operator - not syntax
*/

const copiedFullName = [...fullName];
console.log(copiedFullName); // [ 'Jane', 'Doe']
// duplicates an array, like a test copy, can push(add) new values while keeping a unique/original copy

fullName.push('Miss')
console.log(fullName, copiedFullName);

// edge case

console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));

// ! Rest
const fullName2 = ['Jane', 'Doe', 'Miss', {month: 3, date: 22, year: 1973}, 'testOne', 2, 'testThree', 4, true, false];

const [ fName2, lName2, , , ...otherInfo ] = fullName2;
console.log(fName2); // Jane
console.log(lName2); // Doe
console.log('Additional info ', otherInfo); 

const [,,,birthday] = fullName2;
console.log('birthday: ', birthday);


const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
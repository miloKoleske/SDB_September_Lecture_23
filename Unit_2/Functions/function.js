// ERIC WINEBRENNER WEEK 1

/* 
! Functions
    - Block of code that performs a particular task
    - Simplified programs that fun a task when invoked
*/

/* 
! Function Declaration
    (1)        (2)
    function hi() {
        
        console.log('Hi);
    }

    1: Keyword
    2: Name of the function
        - parens () is for parameter
*/
let x = 1

console.log(x);

function hi() {
    console.log('Hi!');
}
// Being hoisted

/* 

! Function Expressions
    (1)         (2)
    let hey = function hi() {
        console.log('Hi!');
    }

    1: VARIABLE "hey" is representative of function "hi"
    this will be identified as a variable instead of a function
*/

let hey = function hello() {
    console.log('Hi again');
}

// Why use declaration vs. expression?


/* 
! Function Invoking
    function hi() {
        console.log('hi');
    }
    (1)
    hi();

    1. This is how we call, or "invoke" our function
*/

function greetings() {
    console.log('Seasons Greasons');
}

/* hi;
hi();
console.log(hi); // should be invoking greetings, Eric was being silly */

greetings;
greetings();
console.log(greetings); // [function: greetings] -- greetings is a function


// Create a function that, when invoked, lists out the numbers 1-10. Name our function "counting".

function counting() {
    // create a loop
    for(let x = 1; x <= 10; x++) {
        console.log(x)
    }
}

counting();

// Create a function that, when invoked, multiplies x by 5 until it reaches 25. Name our function "multiplying".

function multiplying() {
    for(let y = 1; y <= 25; y *= 5) {
        console.log(y)
    }
}
multiplying();

// given an array, create a function that lists out the values individually. Name the function arrList. 

let arr = ['This', 'is', 'really', 'cool'];

let arrList = function arrList() {
    for (item of arr) {
        console.log(item);
    }
}

arrList();

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden Retriever"
];

// write it declarative 

function callDogs() {
    console.log(dogArray);
    for(dog of dogArray) {
        console.log(dog)
        let results = arr.filter(item => {
            if( item === "This") {
                console.log(`This came back!`)
            }
        });
    }
}

// for of could be used for something like data users on a website, as array can change, and the number of values can change

function callDogs() {
    console.log(dogArray);
    for(dog in dogArray) {
        console.log(dogArray[dog])
        console.log(`${dogArray[dog]} is in spot ${dog}`);
    }
}

callDogs();

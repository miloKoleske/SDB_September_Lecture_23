/* 
    ? Loops

    Loops loop through a block of code a number of times.

    ! If stuck in an accidental infinite loop:
        -ctrl+c, ctrl+z, red stop button for "Code Runner"

*/

/* 
    ? For Loops
        Take in 3 parameters(the things within the () of a statement)
            - initial expression = starting value
            - condition to be met 
            - increment/decrement expression
            
    Structure:
    for ( initial expression; condition ; increment expression ) {
        ...code block of logic to run
    }
*/


//  Start at 0 and increase to 10
for ( i = 0; i <= 10; i++ ) {
    console.log(i);
}
console.log("Finished for loop!");

// Start at 0, increase by 2 to 20
for ( i = 0; i <= 20; i += 10 ) {
    console.log(i);
    console.log("You get a 50% off coupon!")
}

// Start at 10, decrease by 1 until we reach 0
for ( i = 10; i >= 0; i -= 1 ) {
    console.log(i);
}
// You can also write i -= 1 as i --

// If using a straight return (one item is returning for a statement); we don't need to use {}
for ( i = 5; i >= 0; i --) console.log(i);

//  Spell out a word letter for letter 
let firstName = "Michael";

console.log(firstName.length);
for ( let i = 0; i < firstName.length; i++ ) {
    console.log( i, firstName[i]);
}
//  let i makes i fully declared

let firstName2 = "Christian";

console.log(firstName2.length);
for ( let i = 0;)


//  Change the value of a variable with a 'for loop'
let sum = 0;
console.log( `Sum equals ${sum} before the for loop.` )

for ( let i = 1; i <= 5; i++ ) {
    console.log("Before:", sum);
    sum += i;
    console.log("After:", sum);

}

console.log( `Sum equals ${sum} after the for loop.`) 
/* 
    Sum equals 0 before the for loop.
Before: 0
After: 1
Before: 1
After: 3
Before: 3
After: 6
Before: 6
After: 10
Before: 10
After: 15
Sum equals 15 after the for loop.
*/


/* 
    ? For In Loops
    - Loop through the properties of an object

    Structure:
    for ( key in object ) {
        ...code to run
    }

    ^ key is random variable name of our choice, object refers to the variable name of the object we are targeting
*/

let student = { 
    name: "Harry",
    animal: "owl",
    degree: "magic",
    boyWhoLived: true
}

console.log(student.name); // Harry, dot notation
console.log(student["name"]); // Harry, square bracket notation

for ( item in student) {
    console.log(item); // log each key name in the object
    console.log(student[item]); // log each value of each key
}
// Keyword names should pertain to what the object is, generally you'll see item, element

//  Remember: arrays are considered an object by JS. 

let catArray = [
    "tabby",
    "maine coon",
    "rag doll",
    "russian gray"
];

for ( cat in catArray ) {
    console.log(cat); // arrays are organized by a numerical index (0,1,2,3)
    console.log(catArray[cat]);
}

/* 
    ! for in loops can be used on objects and arrays
    but if array index order is important, it's better to use a:
        - for loop
        - for of loop
        - Array.forEach()
*/

/* 
    ? for Of Loops
        - Loops through the values of an iterable object
            - iterable - an object that has iterable properties(stuff it can count/go through)

        Structure:
        for ( variable of iterableData ) {
            ...code to execute/run
        }
        ^ Variable is any word we choose to use, iterableData is the name of any iterable "thing"
        Can loop over arrays, strings, etc.

        ! doesn't go well with objects (unIterable)
*/

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden Retriever"    
];

for ( dog of dogArray ) {
    console.log("For of Loop:" , dog);
}

for ( dogg of dogArray ) {
    // Use an if conditional to make a separate console.log for Husky
    if (dogg === "Husky") {
        console.log(` I think the ${dogg} is yelling because he is a shit.`)
    } else if ( dogg === "Corgi") {
        console.log(` I think the ${dogg} is not yelling but is a shit but at least he's wearing pants.`)
    } else {
        console.log(` The ${dogg} is not yelling but still a shit.`)
    }
}










/* 
    ? For Of Loop
*/






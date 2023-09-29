/* 
    *Ternary Conditional Statement
    - Super cool syntax
    - A shortcut for writing an if, if/else, or else/if statement.
    - (condition) ? true result : false result
    - Ternaries REQUIRE the default/else catch all, has to have both true and false results for condition
*/



// let num = 6; // Yes!
let num = -1; // Nope! Nada!

//  Ternary: 
(num > 0) ? console.log('Yes!') : console.log("Nope!");

//  Instead of:
if ( num > 0 ) {
    console.log("Yes!")
} else {
    console.log('Nada!')
};



//  *Ternary with two conditions vs. Else If statement
// let x = 1; // result in all goodbyes
// let x = -5; // result in all hi
let x = 0; // result in all hellos

//Else if statement
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

//  Ternary
(x == 0) ? console.log("Hello!") : (x < 0) ? console.log("Hi!") : console.log("Goodbye!");

// Other way to write ternary
(x == 0) ? console.log("Hello! v2") 
    : (x < 0) ? console.log("Hi! v2") 
    : console.log("Goodbye v2!");







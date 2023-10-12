/* 
    Scope: essentially, informing functions of where to pull variable values from 
        - Global - all lines of code we have
        - Local - anything tied inside of block/curly brackets

        - When not using a keyword in front of a variable, it will search for it
*/


/* 

*/

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

z = 1;


/* 
    Variable keywords:
        - const: cannot be reassigned. good idea for urls
        - var: scoped to nearest function
        - let: scoped to the nearest enclosing block
            - introduced is ES6
*/

var myVariable = 12;

function varTest() {
    var myVariable = 33;

    if(true) {
        var myVariable = 45;
        console.log(`Var - Within If: ${myVariable}`)
    } // Var - Within If: 45
    console.log(`Var - Outside If: ${myVariable}`)
} // Var - Outside If: 45

varTest();
console.log(`Var - Outside Function: ${myVariable}`); // Var - Outside Function: 12


// * Let 

var letVariable = 12;


function letTest() {
    let letVariable = 33;
    console.log(`let - outside if: ${letVariable}`)
    if(true) {
        let letVariable = 45;
        console.log(` - Within If: ${letVariable}`)
    } 
    console.log(`Var - Outside If: ${letVariable}`)
} 

letTest();
console.log(`Var - Outside Function: ${letVariable}`); 

// Note: code is reading the value of the variable first, then the invoking of the function, and then moves thru the function

// * const 
function constTest() {
    const scope = 1;

    if(true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

constTest()
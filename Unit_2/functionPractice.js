// keyword              function name
    // function            sayHi() {
// all code executed in function is in between '{}'

// if there was something inside of (), that would be arguments or parameters

function sayHi() {
    console.log("hello")
}

// function is just storing code, so won't show up, so call a function

sayHi()

function sum(a,b) {
    console.log(a + b)
}
// passed code is put into '()' 
// aka by putting something in (), you are giving the sum function variables to pass thru code to solve
//  variables will lighten when they have been given a use

sum(1,2)
// calling function, and assigning values to those variables. assigned value correlates to the listed index/ order of the function variables (ie. a = 1, b = 2)

// Another way to write this with a 'let' (a way we've seen before)

let c = 3;
let d = 4;
console.log(c+d);

// How does no value on second variable look?

function sum(e,f) {
    console.log(e + f)
    console.log(f)
} 

sum(3) // only 1 value, plugs into variable 1 (e). No value for f
/* 
    sum = NaN (not a number)
    console.log(f) = undefined (has no value)
*/
//  functions will still work with undefined variables, but their printed solution will include the undefined/NaN


function sum(g,h) {
    return g + h;
    console.log(value); // code written after return will not run
}

const value = sum(1,2)
console.log(value);

// return g + h to be able to use it later. Return takes value of g+h and puts it inside variable of function 'value'. 
// ! Return exits out of the function. Nothing else will be run.
// Good for checking code if anything seems to not be working and you wanna test snippets at a time

console.log("is, in itself, a function")
// (keyword).functionName(variable)
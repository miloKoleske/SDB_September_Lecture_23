/* 
! Hoisting
    - JS is read from top to bottom in two passes
        1st pass:
            - Made by the compiler. This is where hoisting is initiated
            - Compiled for execution
        2nd pass:
            - Variable are assigned
            Executes any hoisted code
*/


let names = "Everly";
console.log(names);

b();

function b() {
    console.log("I have been hoisted!");
}
// c();

let c = () => {
    console.log("Hoisted?")
} 
c();
// arrow functions cannot be hoisted! If you notice an error with arrow functions, it could be because variables were initialized before writing the functions









// ! Parameters and Arguments
/* 
                (1)
    function hi(name) {
        console.log(`Hi, ${name}`)
                            (2)
    }
        (3)
        hi("Bruce");

    (1) the parameter(s) that the function is accepting or holding
    (2) using string interpolation, we can refer to the parameter that was given to the function ie. (name) and ${name}
    (3) where we define what the parameter's value will be
        -known as a argument
*/

function order(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}.`);
}

order('cheese pizza');
order('veggie burger');
order('oat milk shake');

/* 
- Write a function that takes two parameters:
        -one is for a first name
        - other is for a last name
        - have them come together in variable inside function
        -console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function firstLast(firstName, lastName) {
    let fullName = firstName + " " + lastName
    console.log(`Hello, my name is ${fullName}.`)
}

firstLast('Bruce', "Lee");
firstLast('Tyler', "Joseph");
firstLast('Chris', "Motionless");


// Scope
let test = function test() {};

let x = 1;

function check() {
    x = 2; // x = 2
    let x = 2; // x = 1 (due to scope)
    
}

check();

console.log(x);


/* 
(1)         (2)    
let hi = () => {
        console.log('hi);
    }

    (1) need to set fat arrow function to a variable
    (2) use the "fat arrow" to signify it is a function

    - arrow functions (or fat arrow functions) were introduced in ES6. They are a more concise way to write function expressions - NOT DECLARATIONS.    
        - Do NOT get hoisted
*/

// ! Concise Body
let hi = () => console.log('Hi!');

// ! Block Body
let hello = () => {
    let greeting = "hello";
    let moreInfo = "Steve";
    return `${greeting}, ${moreInfo}`;
}

console.log(hello());

let apples1 = (x) => `There are ${x} apples.`;

let apples2 = (x => {
    return `there are ${x} apples.`;
})

console.log(apples1(0));
console.log(apples2(15));


let apples3 = x => `There are ${x} apples.`;
console.log(apples3(14));

let apples4 = (x,y) => `There are ${x+y} apples.`;
console.log(apples4(2,5));

/* 
    let hi = () => {
        (1)
        return 'hi';
    }
        (2)        (3)
    let newName = hi();
    console.log(newName);

    (1) keyword that brings data out of our function
    (2) We need a new variable to hold the value of the return
    (3) When called, the function becomes the value of the return.
*/

let hi = () => {
    // (1)
    return 'hi';
}
    // (2)        (3)
let newName = hi();
console.log(newName);


function capitalizeName(name) {
    let capName = '';

    for(l in name) {
        console.log(l)
        if(l==0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }

    return capName;
}

const newName = capitalizeName('ErIc');
console.log(newName);

/* 
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable (console log)
*/


// What Milo wrote
function fullPrice() {
    let z = 4;
    let tipCost = (z ** .2);
    fullPrice = z += tipCost;
    return fullPrice;
}

console.log(z);
console.log(fullPrice);

// What others wrote
function tipCalc(one, two) {
    let newTotal = one + two;
    console.log(newTotal)
    return newTotal;
}

let total = tipCalc(15,3)
console.log(total);

// Eric Solution

function tipCalc(subTotal) {
    let tip = subTotal* .2
    let total = subTotal + tip;
    return total.toFixed(2);
}

tipCalc(100);
// let total = tipCalc(19.72)
// console.log(total);

// another way

let bill = 100;
function tipCalc(subTotal) {
    let tip = subTotal* .2
    let total = subTotal + tip;
    return total.toFixed(2);}

let total = tipCalc(bill)
console.log(total);






let hello = () => {
    let greeting = "hello";
    let moreInfo = "Steve";
    return `${greeting}, ${moreInfo}`;
}

console.log(hello());

// return = way to provide data that has been collected thru processing of a function


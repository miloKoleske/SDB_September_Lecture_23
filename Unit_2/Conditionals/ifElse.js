/* 
    CONDITIONALS
    - A way for us (as devs) to ask questions and provide a response depending on the condition of what we're asking. 
    - Generally, have two results:
        - focus on a thing being true or being false
        - Evaluates an expression and responds if it is true.
        - Falsy
                - false
                - 0
                - empty strings
                - null
                - undefined
                - NaN (not a number)
    - Devs == Inventors: we design and ask the question but also determine the answer options. 
*/

// IF Conditional Statements

let isOn = true;

// (1)    (2)              (3)
if (    isOn == true) {
    console.log( 'The light is on in the room!' ); // The light is on in the room!
};
// == is equal to

/* 
    Structure:
    (1) if
    (2) conditon evaluated
    (3) code that runs if expression is true
*/

if(isOn) {
    console.log('The light is on, heck yeah!');
}

let isOff = false;

if (isOff == false) {
    console.log('The light is off...')
};

let weather = 68;

if (weather < 70) {
    console.log('Some might need to grab a jacket.')
};

// IF ELSE Conditional Statement

let temp = 75;

if ( temp < 70 ) {
    console.log ('I will grab a sweater.')
} else {
    console.log ( 'Oh boy it is shorts weather!' )
};

// AND, &&, check to see if both are equal

let username = 'myUserName';
let password = '1234'; // to see false else statement run, change password to be inaccurate

if ( username == 'myUserName' && password == '1234') {
    console.log ('Welcome user! You are logged in.')
} else {
    console.log('Login error, kick rocks, sucka!')
};

/* Security passwords: 
when writing security, do not say which value is wrong, because then hacker might know 1/2 of the sign-in
*/

// OR, ||, check if one statement is true OR the other 

let email = 'myemail@email.com';
let uName = 'coolCat100';

if ( email == 'myemail@email.com' || uName == 'coolCat100') {
    console.log ('Welcome user!')
} else {
    console.log('Login info was incorrect.')
};

// *NOT, !

// let rain = true; // Nothing in the console
let rain = false;

if (!rain) {
    console.log ('It is a nice sunny day.')
}

/* Just another way to write this:
    if (rain != true) {
console.log ('It is a nice sunny day.')}
*/


//  *ELSE IF Conditional Statement
// This can let us check more than one condition (asking multiple questions)
// Once one of the conditions is met (results in true) it will exit the statement/code block

// let grade = 92; //This grade is passing! Great job!
// let grade = 68; // Needs to be reworked and resubmitted.
// let grade = 70; // Not quite passing, reach out to the teacher.


if ( grade >= 75) {
    console.log('This grade is passing! Great job!')
} else if ( grade >= 69 ) {
    console.log('Not quite passing, reach out to the teacher.')
} else {
    console.log('Needs to be reworked and resubmitted.')
};


/*! Operators
    These are what help us manipulate our data so that we can update, increase, separate, or simply change it all together.
    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional

    Expressions & Statement: 

    keyword name (expression) {
        code block that runs
    }
*/

/* 
    Comparison Operators
    - JS is helpful and does something called "coercion" when comparing values. 
        - Coercion is the process of converting a value from one type to another.
*/

// ! Equal To == 
// JS assumed we wanted to check if 3 equals 3, this is checking values
// Only difference is one is a number, other is a string
console.log("3" == 3);

// ! Strict Equal To, ===
// Check if the two values and the two datatypes are equal.
// Equal value and of the same datatype.
console.log(3 === 3); // true
console.log("3" === 3); // false

// ! Not Equal To, !=, only checking values
console.log("3" != 3); // false, as it is true
console.log("4" != 3); // true, as it is false

// ! Strictly Not Equal To, !==,
console.log(3 !== 3);
console.log("3" !== 3);
console.log("3" !== 4);

// Greater Than

3 > 2;
console.log( 3 > 2 );

// Less Than
4 < 6;
console.log( 4 < 6 );

// Greater Than or Equal To, >=
// ! The greater than operator must be used BEFORE the equal sign in order to work/execute correctly
console.log( 3 >= 2 );

// Less Than or Equal To, <=
console.log( 1 <= 3);

// And, &&, do this, then this
2 && 3;

// Or, ||, can check for two possible answers
2 || 3;


/* 
    * Logical Operators
    - Arithmetic Operators
*/

// ! Addition Operator, += helps with loops by using placeholder variable
let r = 4;
console.log(r += 1); // r = r + 1 answer: 5
console.log(r); // 5

// Subtraction Operator, -=
r -= 3; // r = r -3

// Multiplication Operator, *=
r *= 2; // r = r * 2

// Division Operator , /=
r /= 1; // r = r / 1

// ! Remainder Operator, %=, (Modulus Operator)
r %= 1; // r = r % 1
//  How much is remaining

// Exponential Operator, **=, check if there is an exponent
r **= 1; // r = r ** 1;



















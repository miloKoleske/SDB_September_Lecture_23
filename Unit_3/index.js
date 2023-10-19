












// console.log(list);

let avengers = [
    'Nick', 2, false, 'steve', 'bruce', [
        'tony', 8, true
]
];

console.log(typeof avengers);
console.log(avengers instanceof Array);

/* 
Using the console.log();
    - target 'Bruce'
    - target 'true'
    using string interpolation, return "hello, Nick" and "hello, tony"
*/

console.log(avengers[4])
console.log(avengers[5][2])
console.log(`hello, ${avengers[0]}, hello, ${avengers[5][0]}`);


// ? Array methods
// .push{} good for list of items to be built out 
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

food.push('pizza'); // does need some argument to push. Adds to the end of the array
console.log('Push', food);


// .splice(position, how many removed, with what)
food.splice(1,1,'tacos');
console.log('splice ', food);

food.splice(1,0,'steak');
console.log('splice 2 ', food);

// .pop()
food.pop(); // removes item from the end of the array
console.log('pop ', food);

// .shift()
food.shift(); // removes item from beginning of array
console.log('shift', food);

// .unshift(add item, [optional])
food.unshift();
console.log('unshift', food);

// .toString
let rgb = ['red', 'green', 'blue'];
console.log(typeof rgb.toString());


/*

    - (Go look at MDN docs to remind you):
    - Create an array containing movies titles
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = [
    'Black Swan', 'Saw X', 'Pearl', 'Jeepers Creepers'];
movies.forEach( m => console.log(m)); 

movies.push('Evil Dead Rise');

movies.splice(2, 1, 'Barbie');

console.log(movies, 'index: ', movies.length, ' movies');

//  ! .find()

let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';
console.log('Find: ', tmnt.find(c => c == character));

character = 'April'; //reassigning w/out 'let'
console.log('find again: ', tmnt.find(c => c == character));

character = 'Splinter'; //reassigning w/out 'let'
tmnt.find((c,i) => console.log('index: ', c == character, "index: ", i));

// ! .map()
/* 
    -similar to a .forEach()
    -takes in a callback function (cb)
    -creates a new array with the results of calling a provided function on ever element in the calling array
*/
let numArray = [];
let fizzBuzzArray = [];

for(let i=0; i < 101; i++) {
    numArray.push(i);
}

numArray.map(x => {
    if(x % 15 === 0) {
        fizzBuzzArray.push(x);
    };
});

console.log(fizzBuzzArray);


/*

 - First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    hint: 
       - search something like "arrays", "javascript", "reverse"
       - look in your notes to see how we can check if something is an array
*/


let arr = [1, 2, 3, 4, 5];

if(arr instanceof Array) {
    console.log('Array');
}
// console.log(arr.isArray([1, 2, 3, 4, 5]));

arr.sort(function(a,b) {
    return b-a
});

console.log(arr);

// 1

let backwards = arr.reverse();

Console.log(backwards);

// 2

(arr instanceof Array) ? (arr.reverse(), console.log(arr)) : console.log('Not an Array');

//  3

let reversed = arr.reverse();

console.log('reversed: ', reversed);

//  eric solution

if(arr instanceof Array === true) {
    let revArr = arr.reverse();
    console.log(revArr);
    revArr.forEach(num => console.log(num));
};





















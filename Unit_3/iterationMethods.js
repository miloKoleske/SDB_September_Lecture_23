// ! Iteration Methods
/* 
    - Do not destroy the original array
    - take in callback function
    - loop through arrays
    - must a return
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];
        //keyword variableName = arrayName.methodType (parameter)    
//  * arrow function w/ block body 
const filteredFruit = fruits.filter(fruit => {
console.log(fruit);
    let result = fruit !== 'mango';
/*     console.log('Inside filter: ', result); */
    return result;
});

console.log(filteredFruit);


/* let fruit1 = 'pineapple';
console.log(fruit1.includes('apple'));
console.log(fruit1.includes('butt')); */
// simply looks for anything with 'apple' in it

//  * arrow function w/ concise body
const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
console.log('filteredFruit2', filteredFruit2);

// Function Example (written in declarative)
function removeMango(fruit) {
    return fruit !== 'mango'
}

const filterFruit3 = fruits.filter(removeMango)
console.log(filterFruit3);


/* 
!   Challenge
        How do you remove the 
*/
let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

let noFives = myNumberArray.filter(myNumberArray => {
    // console.log(typeof myNumberArray);
    let string = myNumberArray.toString();
    let results =!string.includes('5')
    return results;
});

console.log(noFives);

// if numberArray.includes ('5') is false, return number

let movies = [
    {name: "Top Gun 2", category: 'Action'},
    {name: "Scary Movie 5", category: 'horror'}
]

// console.log(movies[1].name); 

// dot notation

movies.push({name: "It", category: 'Horror'});
movies.push({name: "Get Out", category: 'Horror'});
movies.push({name: "Taken", category: 'Action'});

// console.log(movies);

const actionMovies = movies.filter(movie =>
    movie.category === 'Action'); 
    // callback function
    // movie = 1 object, simplifying
// const horrorMovies = ;

// console.log('Horror:', horrorMovies);
console.log('Action:', actionMovies);

// ! .forEach()
let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
];

for(let i=0; i < newFoodList.length; i++) {
    console.log(newFoodList[i])
}

newFoodList.forEach(item => console.log('ForEach: ', item));

/* newFoodList.forEach(item => {
    item ==='apple' ? newFoodList.push('red') :
})  don't manipulate current array while you're processing/cycling through it */

newFoodList.forEach((item, i) => {
    console.log('ForEach: ', item, 'index: ', i);
});

// forEach() - executes a provided function once for each array element














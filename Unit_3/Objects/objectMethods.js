let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        'season one':
        [
            {
                episode_title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17'
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01'
            },
        ],
        'season two': [/* ... */],
        'season three': [/* ... */]
    },
    currently_running: true,
};

//  Object.keys() - returns back an array of keys 
// console.log(Object.keys(theSimpsons));

const listKeys = Object.keys(theSimpsons);
// console.log(listKeys);

//  * Object.values() - returns an array of values
// console.log(Object.values(theSimpsons));

//  * Object.assign() - copies all enumerable properties from 1+ sources

let objOne = { name: 'Bob' };
let objTwo = { work: 'Owner'};

let newObject = Object.assign(objOne, objTwo);
console.log(newObject);
console.log(newObject.name);

let futurama = Object.assign(theSimpsons);
console.log('Futurama: ', futurama); // janky ass by creating a new variable and filling it with the prev values from theSimpsons. this would be achieved better w/ a class

// * delete object.key 
// Points to key in object and removes it
console.log('BEFORE: ', Object.keys(futurama));
delete futurama.currently_running;
console.log('AFTER: ', Object.keys(futurama));

Object.freeze(theSimpsons);
theSimpsons.id = 2;
console.log(theSimpsons.id);


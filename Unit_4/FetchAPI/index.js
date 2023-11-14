/* 
!   API
        - Application Programming Interface
        - Client (front end) to communicate with server (database)
        - Allows HTTP requests and response lifecycles
*/

/* 
!   Fetch
        - Before fetch (), we would have to use an httpRequest through items like jQuery/Ajax
        - Is an API
        - Is a method that requires 1 argument
            - the location we are trying to obtain data from (url)
        - Handles the request and response
        - Returns a promise
            - Allows us access to resolvers (.then() || .catch() )

*/

const testEndpoint = 'https://jsonplaceholder.typicode.com/posts/1'
//console.log(testEndpoint);

// go look for this
fetch(testEndpoint)
// need to tell it where to go 
    // once fetch comes back, look for response, clg response
    .then(                      response =>         console.log(response));

/* 
!   JSON
        -JavaScript Object Notation
            - very lightweight for storing and transferring data
            - "easy to understand"

*   Syntax {
    "key": "value",
    "key": true,
    "key": 0
}

    - Everything is wrapped in quotes with some minor exceptions like integers and booleans
    - Data is all separated by a comma
    - CANNOT hold comments or functions
*/

fetch(testEndpoint)
    .then(response => response.json()) // jsonify - convert it to readable by json
    .then(data => {
        displayIt(data.body); // Allows us to work with object
    })

function displayIt(info) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    console.log(info);

    p.textContent = info.body;

    body.appendChild(p);
}

//  *JSON.parse(string);
let myText = `{"name" : "Gollum" , "lost_ring" : true}`;
console.log(myText);
let parseJSON = JSON.parse(myText);
console.log(parseJSON.name);

//  Generally, you may want to put fetch into a function so it doesn't bog everything down
//  * Another API

const url = `https://meowfacts.herokuapp.com/`

// *    fetch
/* function getCatFacts() {
    fetch(url)
        .then( response => response.json())
        .then(obj => {
            console.log(obj)
            console.log(obj.data[0]);
            displayIt(obj.data[0]);
        })
} */

/* 
!   Error Handling 
    - just in case getCatFacts doesn't work
    - Keywords:
        - try
        - catch

*   Syntax 
    try {
        ...code block to try
    } catch (err) {
        ...code block to respond to error
    }
*/
const getCatFacts = async() => {
    try {
        let res = await fetch(url);
        let results = await res.json();
        let data = results.data[0];
        displayIt(data);
    }catch (err) {
        console.log(err)
    }
        
    }


//  * await

/* const getCatFacts = async() => {
//  waiting for fetch url to come back, then store in res variable
    let res = await fetch(url);
//  storing response of promise- and jsonify it 
    let results = await res.json();
    let data = results.data[0];
    displayIt(data);
} */
getCatFacts();

{ "fellowship:"[ { "name":"Frodo", "race":"hobbit" }, { "name":"Samwise", "race":"hobbit" }, { "name":"Merry", "race":"hobbit" }, { "name":"Pippen", "race":"hobbit" }, { "name":"Gandalf", "race":"wizard" }, { "name":"Legolas", "race":"elf" }, { "name":"Gimli", "race":"dwarf" }, { "name":"Aragorn", "race":"man" }, { "name":"Boromir", "race":"man" } ] }

// *Local Fetch
fetch('./local.json')
    .then(res = res.json())
    .then(data => {
        let members = data.fellowship;
        console.log(members);

        for(m of members) {
            displayIt(m.name);
        }
    })
    .catch(err => console.log(err));

// Christopher: So it's just stalling until we have the info we need?
// E: yea
// turns promise into json




//!     {} = OBJECT




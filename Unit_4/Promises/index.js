/* 
!       Promises

    3 Main States
        - Pending
        - Fulfilled
        - Rejected

    Is an object that may produce a singular value in hte future.

    Takes in two parameters
        - Resolve
        - Reject

    Always return a document
*/

//      ? Mock internet send
function getData() {
    setTimeout(() => {
        return "some data";
    },3000)
    }
    

//let data = getData(); 
// * value comes late by 3 seconds
//console.log(data); 
// * when clg is run, no information exists, it's run before function is


//                      where function gets pushed
function    getDataAgain            (cb) {
    setTimeout(() => { //control when something comes up
        cb('some data')
    }, 500) // 'some data' prints out 3 seconds late
}

//*  entry    cb 'some data'   function
//getDataAgain (   data =>      console.log(data));
//console.log('Hello World');


//cb - callback, can actually call a function 

/* 
    Carlos: So this is just basically a mock function to show how we would access data from an outside source and how it would interact with the console?
*/

function returnData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (true) {
                resolve('some data from Promise')
            } else { // also, else here could be deleted, and the if is HARDCODED TRUE
                reject('this is a rejection')
            }
        }, 300)
    })
}

//console.log(returnData());


/* 
!       Resolvers
    - When returned, the returnData() function will return a Promise instead of a given string
    -chained with a resolver
*       Keywords:
            - .then(cb) - if success
                - can be chained together
            - .catch(cb) - alarms for error
        - Takes in a callback function
        - only put the semicolon (;) after the LAST resolver
*/

//  invoked - new Promise
returnData() // calls all of previous function ^^, and THEN does a,b,c
    .then(data => console.log('From Response: ', data))
    .then(() => {
        let x = 1;
        let y = 2;
        console.log(x+y)
    })
    .catch(function(err){
        console.error(err) // only change from .log is that it turns shit RED
    });

// NOTE: .then is dot notation - calling into object
returnData().then( d => console.log(d)).then()

    /* 
    *       The ~Process~
        - create a new Promise
            - resolve / reject all parameters of callback function
        -setTimeout is acting as our "waiting room" for a resource/data
        - resolve() or reject() said promise
        - when returned, returns a Promise object - not a string
        - use of resolver (.then() / .catch()) with callback to extrapolate the info from the promise 
    */

    /* 
    Eli W: Oh now I see, after we create the promise function we call it and then use the .then parameters.
    In order to do things with it
    */




    // ! look into callback functions
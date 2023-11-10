/* 
! Async / Await
    - Introduced in ES8 in 2017
    - Can make any function an async function simply by using KEYWORD
    - control how data is handled, when, etc
*   Keywords
        - async
            - denotes a function
        - await
            - calls a process to "wait" for a result
        - Can help reduce the need for callback functions
        - Can't be used in a loop
        - ALWAYS returns a promise
!   You can make an async w/o an await, you can't use await w/o async
*/

//  Some syntax

async function asyncFuncDeclaration() {
    // oiulkjl;kjdl
}

let FuncExpression = async function() {
    // lkjlkjlkjljlkj
}

let arrowFunc = async() => {
    //;lkjlkjljlj
}

async function getName() {
    return "...Gandalf!";
}

getName().then(data => console.log(data));

// ! Await - Tell JS that a promise is being return and to wait on result

async function extraData() {
    let info = await returnData(); // doesn't return data instantaneously
    return(`${info} in some cloud`);
} 
// helpful to gain data from somewhere else

extraData().then(data => console.log(data))


/* 
!   DOM
    - Document Object Model
    - Only through the browser

    Frame:
        - Document: HTML page (in the browser)
            - "document" - is a global variable
        - Object: Elements and comments (nodes)
        - Model: Arrangement 

    - Data representation of objects that comprise the structure and content of a document on the web.

*   BOM
    - Browser Object Model
    - 'window' - global variable
    - various methods available
*/

function askForStuff() {
    prompt();
}

// askForStuff();
console.log(document);
console.log(document.URL);
console.log(document.location)
document.title = 'DOM it';

// ! Creating our first element 
let h1 = document.createElement('h1');
console.log(h1)

/* 
    Our variable now has access to our various properties
        - innerHTML: can inject a block of HTML
        - innerText: returns the visible text contained in a node
        - textContent: return the full text
*/

h1.innerText = 'Creating my first DOM element!';
console.log(h1);

/* 
*   Chain of events:
        1. create element
        2. apply value/properties
        3. place the element
*/

console.log(document.body);
document.body.appendChild(h1);

h1.style.color = "red";
h1.style.textAlign = 'center'

// Why does everything go into a string? Why does the dom always convert to a string?

h1.style = `
    text-shadow: 2px 5px yellow;
    text-align: center;
`;

// style up here ^^ wipes the slate clean 

h1.className = 'h1-class-name';
h1.id = 'set-id';


/* 
!   Finding Elements
*   HTMLCollection
        -an array-like object
        -allows access to index, properties, methods to help navigate and modify
        -does NOT allow to modify a group of elements all at once
        -can loop through it
        -can use .length to get the size of the list

    Accessing Multiple Elements requires these methods:
        -getElementByTagName()
        -querySelectorAll()
        -getElementsByClassName()    
*/

let li = document.getElementsByTagName('li');
// console.log(li[0]);


let bathroom = li[0];
bathroom.style.color = 'red';

// li.style.color = 'green';
console.log(typeof li); // object
console.log(li instanceof Array); //false (remember these are array-like methods)

for(i of li) {
    i.style.color = 'green';
}

// remember mention of loops

/* 
*   .querySelector(
        -grabs first instance of an element or null if nothing found
        -can target by ID, class, or element
            -will need to append # for ID
            -will need to append . for class
)
*/

let firstLi = document.querySelector('li');
console.log(firstLi);

let listTitle = document.querySelector('#listTitle');
// console.log(listTitle)
listTitle.style.textAlign = 'center';

// document refers to document HTML file IN BROWSER

let toDoList = document.querySelector('#toDoList');
console.log(toDoList);

/* 
*   .querySelectorAll()
        -Returns a static nodeList (an array) list of elements.
*/

let nodeListLi = document.querySelectorAll('li');
console.log(nodeListLi);

let newListItem = document.createElement('li');
let ul = document.getElementById('ulToDo');

newListItem.innerHTML = 'New Item';
// ul.append(newListItem);
ul.appendChild(newListItem);

let liClass = document.getElementsByClassName('listItem');
console.log(liClass);


// !    Event Listeners 
/* 
    Allows us to execute a function when an event occurs

    .addEventListener()
        -DOM node method
        -requires an event to "listen for" or type and a callback function

    ex:
    node.addEventListener('click', () => {})

    Adding an item to the list:
        step:
            -capture the input
            -access the parent element
            -create a new element (li)
            -assign valye to attributes
            - "text from input"
            -append to parent parent
*/

let btn = document.getElementById('submit');
let input = document.querySelector('#listInput') // eed to specify # because querySelector does not catch the typeof
// btn.addEventListener('click', e => {
//     console.log(e);
// })

btn.addEventListener('click', addItem);

function addItem () {
    console.log(input.value);

    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    newItem.style = `
        color: blue;
    `

    ul.appendChild(newItem);
}

// remember, we are only editing page, not the document



//! Global Variables

let buildBtn = document.getElementById('table-btn');

let shellDiv = document.getElementById('shell-div');

 

//* mock data

const myList = [

    'red','blue','green','purple','yellow','orange'

];

 

//! Event Listeners

buildBtn.addEventListener('click', buildTable);

 

//! Function to build and display

function buildTable() {

    // console.log('test');

 

    myList.forEach((color,i) => {

        //* Create

        let div = document.createElement('div');

        let h2 = document.createElement('h2');

        let p = document.createElement('p');

 

        //* Assign values

        h2.textContent = color;

        h2.style.color = color;

        p.innerHTML = `

            Item <u><b>${i}</b></u> in my list.

        `;

        //* Set to a Parent

        div.appendChild(h2);

        div.appendChild(p);

        shellDiv.appendChild(div);

    })

 

    shellDiv.style = `

        display: flex;

        align-items: space-around;

    `

}





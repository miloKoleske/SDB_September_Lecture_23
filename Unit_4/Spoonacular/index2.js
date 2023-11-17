//  ! Imports
import apiKey from "./key.js";

// ! Global Variables
const baseURL = 'https://api.spoonacular.com/recipes/random'; // authentication for API


let buildURL = `${baseURL}/?apiKey=${apiKey}`; // combining the apiKey w/ baseURL 
let storedRecipes = []; // array that begins empty 


// ! DOM Elements
const searchForm = document.querySelector('form'); // defining variables, grabbing elements from HTML doc by querySelector 
const randomCard = document.querySelector('.random-card') // creating ourselves (not in HTML)
const keptCards = document.getElementById('kept-cards') // creating ourselves (not in html) cards that will be added and kept in place

// ! Functions
const removeElements = element => {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
} // called on after adding cards, to make sure that firstChild (obj in index 0 within array) does not print more than once

// TODO Display Single Card (Random)

// const displayRandomCard = recipe => { 
//     let 

//  * Create Elements of card
let card = document.createElement('div'); // creation of elements of card, all elements begin empty, will not gain value until AFTER they are created
let img = document.createElement('img'); // pulling attribute from id / class in html
let body = document.createElement('div'); // note: attributes can be applied to multiple elements / elements can share an attribute
let title = document.createElement('h5');
let btn = document.createElement('a');

//  * Set attributes -- describing all parts in html
card.className = 'card'; // setting attributes of element, filling element with actual data for the first time, consider it like adding attributes to it
card.style.width = '18rem'; // both card. are utilizing the elements previously created (in create elements section)
img.src = recipe.img; // depends on actual url of recipe (basically still empty)
img.className = 'card-img-top';
img.alt = recipe.title; 
body.className = 'card-body';
title.className = 'card-title';
title.textContent = recipe.title; // changing text to recipe's title
btn.className = 'btn btn-primary';
btn.textContent = 'Add'; // printing out space for button w/ text reading 'Add' 
btn.onclick = () => {
    storedRecipes.push(recipe);
    setTable();
} // on click, pushing recipe into storedRecipes array, 

//  * Attach Elements
body.appendChild(title); // starting from last element, appending information to card's body (parent) 
body.appendChild(btn); // (btn) -- child of the body parent
card.appendChild(img); // appending image variable into card
card.appendChild(body); // (body)

randomCard.appendChild(card); // appending entire div to the randomCard - the parent of the card



// TODO Display Deck of Cards
const setTable = () => {
    console.log('Stored Recipe Array:', storedRecipes);

    storedRecipes.map(obj => { // creating new array from only information we need (+ excluding extraneous data)
//  ??? I got lost ;(

    //* Create EMPTY ITEMS
    let div = document.createElement('div');
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let p = document.createElement('p'); // taking data from card-text, only displaying it on the 'added' recipes
    let a = document.createElement('a'); // hyperlink

    console.log('DIV CREATE:', div); 

    //* Set Attributes
    div.className = 'col'; // div gets the class 'col'
    card.className = 'card'; // card gets the class 'card'
    img.src = recipe.img;  // dependant on the recipe URL 
    img.alt = recipe.title; // dependant on the recipe, if image fails to load/ someone can't see image/ using screen reader, alt will read w/ object's title
    img.className = 'card-img-top'; // img gets the class 'card-image-top'
    body.className = 'card-body'; // body gets the class 'card-body'
    title.className = 'card-title'; // title gets the class 'card-title'
    title.textContent =  recipe.title // title gets the variable recipe.title, depends on the recipe 
    p.className = 'card-text';
    a.href = recipe.sourceUrl; // link will get variable of recipe.sourceUrl, so that it can dynamically change
    a.target = '_blank'; // controls how link opens, opens the link to a new page 
    a.textContent = 'Link to Recipe'; // blue link at bottom of recipe card


    p.appendChild(a); // appending children to display deck of cards - a (link) appends to p (paragraph)
    body.appendChild(title); // title appends to body
    body.appendChild(p); //p appends to body (so a = granddaughter of body)
    card.appendChild(img); // img appends to card
    card.appendChild(body); // body appends to card

    div.appendChild(card); // card appends to div 
    keptCards.appendChild(div); // div is appended to keptCards (added into the space that cards are kept)
}
)}


// ! Event Listeners
searchForm.addEventListener('submit', e => {
   e.preventDefault(); // an event listener, listening to the 'submit' of btn, preventing default of form clearing upon submit (generally refreshes)

fetch(buildURL) // fetching, calling on the buildURL 
    .then(res => res.json()) // translate this data into readable/modular json
    .then(data => {
        let recipe = data.recipes[0]; 
        let obj = {
            title: recipe.title,
            img: recipe.img,
            src: recipe.sourceUrl
        }
        displayRandomCard(obj); // function of displaying random card goes off, calls on obj
    }) // pushing all the data into their spaces based off of our existing elements (made thru html elements)
    .catch(error => console.log(error));
}) // or, if this all sucks and is broke, tell me that it's broken plz
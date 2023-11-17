//  ! Imports
import apiKey from "./key.js"; // note extension is necessary '.js' because of script element
// pulls apiKey var from key.js 

// ! Global Variables
const baseURL = 'https://api.spoonacular.com/recipes/random';
//  to access API, utilize apiKey, put it into a variable

let buildURL = `${baseURL}/?apiKey=${apiKey}`;
//  '/?apiKey..' goes here to make program evergreen, if apiKey ever changes, push new key into apiKey variable
let storedRecipes = []; // an array


// ! DOM Elements
const searchForm = document.querySelector('form');
// calls the entirety of the form - by looking for 'form'
const randomCard = document.querySelector('.random-card')
const keptCards = document.getElementById('kept-cards')

// ! Functions
const removeElements = element => {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// TODO Display Single Card (Random)

const displayRandomCard = recipe => {
    //console.log(recipe);
    // while(randomCard.firstChild) {
    //     randomCard.removeChild(randomCard.firstChild);
    // }


//  * Create Elements of card
let card = document.createElement('div');
let img = document.createElement('img');
let body = document.createElement('div');
let title = document.createElement('h5');
let btn = document.createElement('a');

//  * Set attributes
card.className = 'card';
card.style.width = '18rem';
img.src = recipe.img;
img.className = 'card-img-top';
img.alt = recipe.title; // in case img breaks - will display title of recipe
body.className = 'card-body'
title.className = 'card-title';
title.textContent = recipe.title;
btn.className = 'btn btn-primary';
btn.textContent = 'Add'; // what button will say
btn.onclick = () => {
    storedRecipes.push(recipe);
    setTable();
}
// () makes an anonymous function
// stored value is a FUNCTION


//  * Attach Elements
body.appendChild(title);
body.appendChild(btn);

card.appendChild(img);
card.appendChild(body);

randomCard.appendChild(card);
}


// TODO Display Deck of Cards
const setTab = () => {
    console.log('Stored Recipe Array:', storedRecipes);

    storedRecipes.map(obj => { // set + append all attributes

    //* Create EMPTY ITEMS
    // ! w/in these create, set attribute, we are currently ONLY applying this to the FIRST CARD. We need to make a FOR LOOP to affect all cards 
    let div = document.createElement('div');
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let p = document.createElement('p');
    let a = document.createElement('a');

    console.log('DIV CREATE:', div); 

    //* Set Attributes
    div.className = 'col';
    card.className = 'card';
    img.src = obj.img; // needs object from array
    img.alt; // needs object from array
    img.className = 'card-img-top' ;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent =  // needs object for title, create space for title
    p.className = 'card-text';
    a.href; // needs object
    a.target = '_blank';
    a.textContent = 'Link to Recipe'; // needs object for content


    console.log()


    //*Append to parent -- start from bottom -- think like MATRYOSHKAS
    p.appendChild(a);
    body.appendChild(title);
    body.appendChild(p);
    card.appendChild(img);
    card.appendChild(body);

    div.appendChild(card);
    keptCards.appendChild(div);
}
)}


// ! Event Listeners
// method event happening to form
searchForm.addEventListener('submit', e => {
   e.preventDefault(); // make sure it doesn't refresh page 

fetch(buildURL)
    .then(res => res.json()) //jsonification, to look thru it, navigate thru that 
    .then(data => {
        //console.log(data.recipes[0])
        let recipe = data.recipes[0];
        // points to recipe of DATA
        // shaping a new object based off of the only variables we want to track
        let obj = {
            title: recipe.title,
            img: recipe.img,
            src: recipe.sourceUrl
        }
        //console.log(obj)
        displayRandomCard(obj); // brings obj in as an argument
    })
    .catch(error => console.log(error));
})



// upon FETCH, you recieve promise back, in order to ACT on it, use .THEN
// CATCH errors with .CATCH
// '?' in URL is the introduction to PARAMETERS. & separates parameters
// git.ignore to remove apiKey
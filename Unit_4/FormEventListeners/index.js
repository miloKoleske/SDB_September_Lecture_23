//TODO: Global Variables
const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = [];
//defaulting to array, consider this a MOCK DATABASE, should probably get pulled from backend, because on refresh animals will be an empty array again 
/* console.log(form.species);
console.log(Object.values(form));
console.log(form[1].placeholder); */
//console.log(form[3]); // prints LABEL of 3rd index (female)

//TODO: Event Listener
form.addEventListener('submit', e => {
    //console.log(e);
    e.preventDefault(); // pointing at e, selecting whole parameter, stops default refresh of form element
    // console.log('hit')
    const animal = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value
    }
    console.log(animal);

    form.rest(); //clears form inputs  after submission
    form[0].focus(); // target first input within form when it is 'new'

    displayTable();
}) 


//TODO: Display to a table (function)
function displayTable() {
    //console.log('DT: ', animals);

    while(table.firstChild) {
        table.removeChild(table.firstChild); // this is the FULL ROW of DOCUMENT, not ARRAY
    }

    animals.forEach((animal, i) => {
    //* Create    
        let tr = document.createElement('tr') // will be the parent element of any element for td
        let id = document.createElement('td'); // all of these are currently empty
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td'); // all of these elements are table data, so .createElement leads to td, think of this like <td></td>*5

    //* Assign  
    id.textContent = i + 1; // i = index, adding 1 each time
    name.textContent = animal.name; // ok, NOW they're filled
    sex.textContent = animal.sex;
    species.textContent = animal.species;

    //* Append/Set  
    tr.appendChild(id); // make a table ROW (horizontal) 
    tr.appendChild(name);
    tr.appendChild(sex);
    tr.appendChild(species); // notice we are putting in variables
    table.appendChild(tr);

    // ! Look @ section at 8:10 - 8: 15 [time on eric's monitor] for a full explanation of what we're doing
    // ! 8:30 
    }
    )
}

// .addEventListener (x) goes to INPUT type (submit)
// 'hit' is disappearing quickly - page default is to refresh
// click and submit will probably be most popular
//() evokes an object, doesn't focus on any argument, selecting everything


//  ! Look into refreshing - I don't get it at all 

//  ! Look into events - 'keyup', 'mouseover'

//  ! Look into validating passwords on front end v. back end

//  ! Look into global variables

//  ! Look into truthy and falsy values

//  ! Look into flow of code reading - how forEach, while loops read
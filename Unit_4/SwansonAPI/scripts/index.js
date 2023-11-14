// ! Global Variables
//  grab objects

const image = document.querySelector('div');
const h3 = document.querySelector('h3');
const baseURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
//                          url                   info being sought in db

// ! Event Listener
//  on click, make event happen 

image.addEventListener('click', e => {
    getQuote(); 
})


// ! Display (function)
const getQuote = async() => {
    //console.log('TEST')
    fetch(baseURL)
        .then(response => response.json())
        .then(object => {
            let quote = object[0]
            //console.log(object[0])
            h3.textContent = quote;
        })
}

/* 
take elements from html
call objects
create an event listener
event fetches information 
event create promise
.textContent creates an item inside of html by pulling in quote

*/
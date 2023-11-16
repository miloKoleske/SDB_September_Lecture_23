import apiKey from "./key.js"; // note extension is necessary '.js' because of script element
// pulls apiKey var from key.js 

const baseURL = 'https://api.spoonacular.com/recipes/random';
//  to access API, utilize apiKey, put it into a variable

let buildURL = `${baseURL}/?apiKey=${apiKey}`;
//  '/?apiKey..' goes here to make program evergreen, if apiKey ever changes, push new key into apiKey variable

// upon FETCH, you recieve promise back, in order to ACT on it, use .THEN
// CATCH errors with .CATCH
// '?' in URL is the introduction to PARAMETERS. & separates parameters
// git.ignore to remove apiKey

fetch(buildURL)
    .then(res => res.json()) //jsonification
    .then(data => console.log(data))
    .catch(error => console.log(error));


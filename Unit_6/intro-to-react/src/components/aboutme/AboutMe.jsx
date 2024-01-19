
function AboutMe() {
    const city = "ABQ"; 
    const state = "New Mexico"
    let styles = {
        ul: {
            textAlign:'left',
            color: 'red',
        }, 
        p: {
            fontSize: '20pt'
        } // creating an object 
    }
    return(
        <div>
            <p>I've lived in {city}, {state} since I was four.</p>
            <ul style={styles.ul}>
                <li>Target</li>
                <li>Coffee Shop</li>
                <li>Gym</li>
            </ul>
        </div>


    )
}
// <ul style={{textAlign: "left", color: "violet"}}>

export default AboutMe;

//*  DOM Manipulation:
// let ul = document.querySelector('ul')
// ul.style.textAlign = "left"
// ul.style.color = "violet"

/* Eric's Way
* emmet: rfc creates the following:
import React from 'react'

function AboutMe() {
    const city = "ABQ"; 
    const state = "New Mexico"
  return (
    <div>
        <p>I've lived in {city}, {state} since I was four.</p>
            <ul>
                <li>Target</li>
                <li>Coffee Shop</li>
                <li>Gym</li>
            </ul>
    </div>
  )
}
*/
// ! NOTE: The way above (eric's) includes a div to be the parent

// how to reference style: {{}}











/* Create a new folder called aboutme within the components folder.
Create a new file inside the folder called AboutMe.jsx.
Create a <p> tag that notes where you grew up. 
Use variables for city and state.
Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
Export the component.
Import the component into App.jsx and mount it between the Header and Footer components.
 */
# React
- Created by Facebook
- Is a client-side JavaScript Library
- Quickly renders on the page
- Companies transitioning more to React
- Netflix, Uber, Dropbox, AirBnB
- Works through **Components**

## Rules of JSX

  1. **Must** Export for it to be used.

  2. **Must** be imported to be used.

  3. **Must** be mounted to be used.

  4. **Must** only return **ONE** JSX Element.

  # Creating a React App
- `npx create-react-app starting-react`
- **npx create-react-app [your-project-name]**
    - **npx create-react-app .** (creates an app within a directory)

## Points of Interest
- public
  - `index.html`: What is displayed to the browser.
- src
  - `index.js`: JavaScript being rendered to `index.html`.
  - `App.js`: Main point where components are mounted. This is being rendered within `index.js`.

## Create a component


# State

- Helps modify data based on a condition
  - ex: 
    - offline/online status
    - session token storage
- Utilizes types of hooks
- Requires to be imported 

`import { useState } from 'react'`
{useState} is a hook

## `useState()`
- Structure: look at the function App for this info
  - `keyword [ variable, function ] = hook(initial value);`
    - In this case, useState is our hook

- The Process:
```js
function useState(startingData) {
  function updateState(newData) {
    startingData = newData;
  }
  return [startingData, updateState]
}
```
```js
    ! Challenge:
    - Build out a Counter Component which will have two buttons (+), (-) and a span element that will take its value from a count state variable.
      - This should be within it's own folder.
    - Create two functions that will work as onClick event listeners.
      - One function will increment the current state.
      - One function will decrement the current state.
    Hard Mode:
      - Leave the count inside App.jsx
  */
```
/* 

## Re-rendering

- We can use a callback function to help with rendering processes.
- useState can take raw value but also a callback function.

ex: 
```jsx
const [ count, setCount ] = useState(0); // raw value
const [ count, setCount ] = useState(() => 0); // CB Function
```
- Callback function renders initial value ONCE.

















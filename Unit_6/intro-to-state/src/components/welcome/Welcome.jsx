import React from 'react'

function Welcome(props) {
console.log(props)
  function removeName() {

    const updatedNames = props.names.filter // will hold a new array
    (name => name !== props.name) // evaluating using array method, evaluate all strings in the array, if object doesn't match what props.name is
    
    props.setNames(updatedNames) // store and push to new array updateNames
  }
  return (
    <div onClick={removeName}
    className='welcome'>Welcome, {props.name} 
    {props.count} </div>
  )
}

export default Welcome;

//props.name is a variable to manipulate 

import React from 'react';
import { useState } from 'react';

export default function Counter(props) {
    console.log(props)
    function addOne () {
        {props.setCount(props.count+1)}
    }
    function minusOne () {
        {props.setCount(props.count-1)}
    }
  return (
    <div>
        <h1>{props.count}</h1>
        <button onClick={addOne}>+</button>
        <button onClick={minusOne}>-</button>
    </div>

  )
}


import React from 'react'

export default function DisplayTotals(props) {
    console.log(props)
  return (
    <React.Fragment>
        <p>{props.name} had a total count of {props.count}</p>
</React.Fragment>
  )
}

//    - DisplayTotals.jsx
// Will return a React.Fragment that holds a paragraph tag that states "NAME had a total vote count of COUNT"
// Import and mount within App.jsx under the Employee component.
// president vote is parent component
import React from 'react'
import DisplayTotals from './DisplayTotals'

export default function PresidentVotes() {
    const votes = [
        { name: "Abe Lincoln", count: 139033},
        { name: "Stephen Douglas", count: 115509},
      ]
      
    return (
        <> 
            <h1>Presidents</h1>
            {votes.map((records, index) => {
                return(
                <DisplayTotals 
                    key={index}
                    name={records.name}
                    count={records.count}
                />
            )
            })}

        </>
  )
}

//create key value pairs -- under DisplayTotals
//key allows the browser to scan thru all the key value pairs, and if one value has changed it will only change that one


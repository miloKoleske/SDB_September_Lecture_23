import React from 'react';
import EmployeeInfo from './EmployeeInfo'; // components are in same folder (Employee, EmployeeInfo) because they are the same basic concept

export default function Employee() {
    
//create a var array 
    let employeeRecords = [
    {
        name: "Jester Bash",
        city: "Miami",
        state: "KY",
        position: "Web Dev",
        food: "Pizza"
    },
    {
        name: "Tom Jones",
        city: "Miami",
        state: "NY",
        position: "UX/UI",
        food: "Steak"
    },
    {
        name: "Janet James",
        city: "Miami",
        state: "NM",
        position: "Sales Rep",
        food: "Sushi"
    },

    ]

    return(
        <>
            <h1>Hello from Employees!</h1>
            {
                employeeRecords.map((record, index) => (
                    <EmployeeInfo
                        key = {index}
                        name={record.name}
                        city={record.city}
                        state={record.state}
                        position={record.position}
                        food={record.food}
                        />
                ))
            }
        </>
    )
}

//<> is shorthand for react fragment
// react fragments don't work with div styling, because react frag is like taking the file out of the folder without context
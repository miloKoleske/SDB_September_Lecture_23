// update state w/in 
import React, {useState} from 'react'

function AddUser([names,setNames]) {
const [ text, setText ] = useState(() => '')
    const handleChange = e => {
        //console.log(e.target.value);
        setText(e.target.value); // visually shows text
    } // capture data in state

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted') // data from input form is stored here

        let addUser = [...names]
        addUser.push(text);

        setNames(addUser);
        setText('')
    }

return (
    <form onSubmit={ e => handleSubmit(e)}>
        <input 
        onChange={e => handleChange(e)}
        type="text"
        value={text} />
        <br />
        <input type="submit" value="Add" />
    </form>
)
}

export default AddUser;
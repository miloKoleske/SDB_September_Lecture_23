import { useState } from 'react'
import './App.css';
import Welcome from './components/welcome/Welcome';
import Counter from './components/counter/Counter';
import AddUser from './components/adduser/AddUser';

function App() {
  const [names, setNames] = useState([
    'Frodo', 'Sam', 'Pippin', 'Merry'
  ]);
  const [count, setCount] = useState(0)
  //useState can't use a .push 

  const displayWelcome = () => {
    return(
      names.map((name, index) => {
        return(
          <Welcome
            key={index}
            name={name}
            names={names} // getting our full array
            setNames={setNames} // passing the function as a prop value, which is why we use props.setNames
            />
        ) // all the name (individual), names, setName allow access to changing those names
      }
      )
    )
  }

  const displayCount = () => {
    return(
      <Counter
        count = {count}
        setCount ={setCount}
        />
    )
  }
  return (
    <div className="App">
      {<Counter count ={count} setCount={setCount} />}
      <AddUser names={names} setNames={setNames} />
      {displayWelcome()}
    </div>
  );
}

export default App;

//displayWelcome returns the welcome component (as an alt. to defining it on Welcome.jsx), only needs to invoke function, because < Welcome /> also shows an empty "welcome" at the beginning

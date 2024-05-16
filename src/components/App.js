
import React,{ useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("")
    const handleChange = (event) => {
        setName(event.target.value)
    }
  return (
    <div>
        <label htmlFor="name">Enter your Name:</label> <br></br>
        <input type="text" id="name" onChange={handleChange}></input>
        {(name != "" && <div id="display">Hello {name}!</div>)}
    </div>
  )
}

export default App

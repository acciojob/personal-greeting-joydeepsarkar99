
import React,{ useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("")
    const handleChange = (event) => {
        setName(event.target.value)
    }
  return (
    <div>
        <p>Enter your Name:</p>
        <input type="text" onChange={handleChange}></input>
        {(name != "" && <p>Hello {name}!</p>)}
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]  = useState(5)    //hooks

  // let counter =5
  const addValue = ()=> {
    counter ++;
    console.log(("clcked", counter));
    setCounter(counter)
  }

  const removeValue =()=> {
    setCounter(counter-1)
  }

  return (
    <>
     <h1>React js</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue} >
      Add value {counter}</button>
    <br />
     <button id='remove' onClick={removeValue} disabled={counter===0}>Remove value {counter}</button>
     
     <p>footer : {counter}</p>
    </>
  )
}

export default App

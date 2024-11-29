import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) 
  

  const removevalue = () => {
    
    if (counter === 0) {
      
    }
    else
    {
      counter -= 1
      setCounter(counter)
      console.log('value removed ')
    }
    
  }
  //let counter = 15
  const addValue = () => {
    
    if (counter === 20) {
      
    }else
    {
     counter = counter + 1 
    setCounter(counter)
    console.log('value added', Math.random());
    }
  }
  return (
    <>
     <h1> rohit and react </h1>
     <h2>counter value : {counter}</h2>

     <button
     onClick={addValue}>Add value {counter}</button>
     <br />
     <button
     onClick={removevalue}>Remove value {counter}</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myobject = {
    name: 'rohit',
    age: 17
  }
  let nearry  = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test </h1>
    <Card username = 'rohit' otheronj={myobject}/>
    <Card username= 'mohit'arr={nearry}/>
    <Card username= 'rohan'/>
    </>
  )
}

export default App

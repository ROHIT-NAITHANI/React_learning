import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("black")




  return (
  <div className='w-full h-screen mt-0 duration-200' style={{ backgroundColor:color}}>
    <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
      <button onClick={() => setcolor("red")} className='outline-none  px-4 ' style={{backgroundColor: 'red'}}>Red</button>
      <button onClick={() => setcolor("green")} className='outline-none  px-4 ' style={{backgroundColor: 'green'}}>Green</button>
      <button onClick={() => setcolor("grey")} className='outline-none  px-4 ' style={{backgroundColor: 'grey'}}>Grey</button>
      <button onClick={() => setcolor("yellow")} className='outline-none  px-4 ' style={{backgroundColor: 'yellow'}}>Yellow</button>
      

    </div>
    </div>
  </div>
  )
}

export default App

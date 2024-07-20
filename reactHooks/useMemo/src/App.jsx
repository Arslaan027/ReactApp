import { useState } from 'react'
import './App.css'

function App() {

  let [numberCube, setNumber] = useState(0);
  let [count, setCount] = useState(0);

  function numberCube (num) {
    console.log("calculation done!");
    return Math.pow(num, 3);
  }

  let result = numberCube(numberCube);

  return (
    <>


      <button className='text-2xl rounded-2xl focus:ring focus:to-blue-200 px-4 py-2 bg-green-300 hover:bg-green-400'>Click me</button>
    </>
  )
}

export default App

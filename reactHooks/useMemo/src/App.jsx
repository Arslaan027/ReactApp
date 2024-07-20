import { useState } from 'react'
import './App.css'

function App() {

  let [number, setNumber] = useState(0);
  let [count, setCount] = useState(0);

  function numberCube (num) {
    console.log("calculation done!");
    return Math.pow(num, 3);
  }

  let result = numberCube(number);

  return (
    <>

    <input className='m-5 border border-black border-solid font-bold px-8 py-2 text-[25px]' value={number} type='number' onChange={(e)=>{setNumber(e.target.value)}}/>
    <br />
    <h1 className='text-lg my-5 '>the cube of the number is <span className='bg-green-300 p-3 rounded-lg font-bold'>{result}</span> </h1>
      <button className='text-2xl rounded-2xl focus:ring focus:to-blue-200 px-4 py-2 bg-green-300 hover:bg-green-400'>Click me</button>
    </>
  )
}

export default App

<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
=======
import { useMemo, useState } from 'react'
import './App.css'
>>>>>>> 54fef31a1caab7f9757ca9da1f0fef6c11e04df8

function App() {
  // let [numberCube, setNumber] = useState(0);
  // let [count, setCount] = useState(0);

<<<<<<< HEAD
  // function numberCube (num) {
  //   console.log("calculation done!");
  //   return Math.pow(num, 3);
  // }

  return (
    <>
      <button className="text-2xl rounded-2xl focus:ring focus:to-blue-900 px-4 py-2 bg-green-300 hover:bg-green-400">
        Click me
      </button>
=======
  let [number, setNumber] = useState(0);
  let [count, setCount] = useState(0);

  function numberCube (num) {
    console.log("calculation done!");
    return Math.pow(num, 3);
  }

  let result = useMemo(()=>numberCube(number), [number]);

  return (
    <>

    <input className='m-5 border border-black border-solid font-bold px-8 py-2 text-[25px]' value={number} type='number' onChange={(e)=>{setNumber(e.target.value)}}/>
    <br />
    <h1 className='text-lg my-5 '>the cube of the number is <span className='bg-green-300 p-3 rounded-lg font-bold'>{result}</span> </h1>
      <button className='text-2xl rounded-2xl focus:ring focus:to-blue-200 px-4 py-2 bg-green-300 hover:bg-green-400' onClick={()=>setCount(count+1)}>Click me</button>
      <h1 className='text-lg my-5 '>Counter <span className='bg-green-300 p-3 rounded-lg font-bold'>{count}</span> </h1>
>>>>>>> 54fef31a1caab7f9757ca9da1f0fef6c11e04df8
    </>
  );
}

export default App;

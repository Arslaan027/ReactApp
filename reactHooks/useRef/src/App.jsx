import { useState, useRef, useEffect } from 'react'


function App() {

  const inputElement = useRef();
  const Buttonhandle = () => {
    console.log(inputElement.current)
    inputElement.current.style.background = "orange";

    }
  return (
    <>
    <input type="text" ref={inputElement}/>
    <button className='bg-blue-500 p-4 ' onClick={Buttonhandle}>Click Me</button>
    </>
  )
}

export default App

import { useState } from "react";

function App() {
  let [color, setColor] = useState("Red");

  function colorButton() {
    console.log("btn");
    if (color === "Red") {
      setColor("Blue");
    } else {
      setColor("Red");
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="shadow-2xl ring-slate-700 max-w-2xl rounded-3xl p-10 bg-white">
          <h2 className="flex justify-center p-10 mx-20">
            my Favorite color is {color}
          </h2>
          <div className="flex justify-center">
            <button
              onClick={colorButton}
              className="rounded-2xl px-5 py-1 bg-blue-300 hover:bg-blue-500 focus:ring focus:ring-green-400"
            >
              {color}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

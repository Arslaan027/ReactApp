import { useState } from "react";

function App() {
  let [data, setData] = useState({
    framework: "React",
    languege: "JavaScript",
  });

  const handleButton = () => {
    setData((data) => {
      return {
        ...data,
        languege: "C#",
        framework: ".Net",
      };
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="shadow-2xl ring-slate-700 max-w-2xl rounded-3xl p-10 bg-white">
          <h2 className="flex justify-center p-10 mx-20">
            this is {data.framework} framwork of {data.languege}
          </h2>
          <div className="flex justify-center">
            <button
              onClick={handleButton}
              className="rounded-2xl px-5 py-1 bg-blue-300 hover:bg-blue-500 focus:ring focus:ring-green-400"
            >
              Next {data.framework}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

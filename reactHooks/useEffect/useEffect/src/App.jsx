import React, { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [currentEmployeeIndex, setCurrentEmployeeIndex] = useState(0);
  let [employee, setEmployee] = useState([
    {
      empID: "1001",
      name: "salman",
      age: "26",
    },
    {
      empID: "1002",
      name: "arslaan",
      age: "24",
    },
    {
      empID: "1003",
      name: "nabeel",
      age: "28",
    },
    {
      empID: "1004",
      name: "kashif",
      age: "28",
    },
  ]);

  // timer function
  let Timer = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setCurrentEmployeeIndex((prevIndex) => (prevIndex + 1) % employee.length);
    }, 2000);
  };

  useEffect(Timer, [count]);

  return (
    <>
      <div className="flex justify-center">
        <p className="text-center mt-[50vh] text-2xl px-5 py-4 bg-orange-500 w-[80%]  rounded-3xl">
          Counter{" "}
          <span className="bg-blue-500 px-4 py-2 rounded-xl">
            {currentEmployeeIndex + 1}
          </span>{" "}
          Name of the Employee is{" "}
          <span className="bg-blue-500 px-4 py-2 rounded-xl">
            {employee[currentEmployeeIndex].name}
          </span>{" "}
          and his age is{" "}
          <span className="bg-blue-500 px-4 py-2 rounded-xl">
            {employee[currentEmployeeIndex].age}
          </span>
        </p>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <>
      <p className="text-center mt-[50vh] text-2xl">Counter {count} renders</p>
    </>
  );
}

export default App;

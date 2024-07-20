import { useState, useCallback } from "react";
import Head from "./assets/component/Head";

function App() {
  const [count, setCount] = useState(0);

  const newFn = useCallback(() => {}, []);

  return (
    <>
      <Head className="text-[40px]" newFn={newFn} />
      <h1 className="text-[40px] borber border-black rounded-2xl">
        Counter: {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Counter++</button>
    </>
  );
}

export default App;

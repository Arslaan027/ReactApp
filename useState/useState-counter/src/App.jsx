import { useState } from "react";
import style from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  const handleMinusButton = () => {
    setCount(count - 1);
  };

  const handlePlusButton = () => {
    setCount(count + 1);
  };

  const resetButtonHandle = () => {
    setCount(0);
  };

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.container}>
          <button onClick={handleMinusButton}>-</button>
          <h2>{count}</h2>
          <button onClick={handlePlusButton}>+</button>
        </div>
        <button className={style.resetButton} onClick={resetButtonHandle}>
          Reset Counter
        </button>
      </div>
    </>
  );
}

export default App;

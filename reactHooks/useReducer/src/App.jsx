import { useState } from "react";
import "./App.css";

import { useReducer } from "react";

function App() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p className="text-[50px]">Counter: {state.count}</p>
      <button
        className="mx-10 text-[50px]"
        onClick={() => dispatch({ type: "increase" })}
      >
        Increase
      </button>
      <button
        className="mx-10 text-[50px]"
        onClick={() => dispatch({ type: "decrease" })}
      >
        Decrease
      </button>
      <br />
      <input
        value={state.count}
        className="p-5 mt-5 border-3 border-black bg-slate-500 text-3xl"
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
        type="number"
      />
    </>
  );
}

export default App;

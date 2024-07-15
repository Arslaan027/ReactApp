import style from "./App.module.css";

function App() {
  return (
    <>
      <div className={style.calculator}>
        <input className={style.display} type="text" />
        <div id="buttons-container">
          <button>C</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </>
  );
}

export default App;

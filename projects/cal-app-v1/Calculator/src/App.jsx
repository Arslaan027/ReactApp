import style from "./App.module.css";
import Dics from "./components/Display";
import Btnlist from "./components/buttonList";

function App() {
  return (
    <center>
      <div className={style.calculator}>
        <Dics />
        <Btnlist />
      </div>
    </center>
  );
}

export default App;

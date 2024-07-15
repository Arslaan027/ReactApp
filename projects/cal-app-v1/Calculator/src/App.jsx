import style from "./App.module.css";
import Display from "./components/display";

import Btnlist from "./components/buttonList";

function App() {
  return (
    <center>
      <div className={style.calculator}>
        <Display />
        <Btnlist />
      </div>
    </center>
  );
}

export default App;

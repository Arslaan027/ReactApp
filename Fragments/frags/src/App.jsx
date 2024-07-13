import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/nav";
import Listitem from "./components/list";
import ErrorMsg from "./components/errorMsg";

function App() {
  return (
    <>
      <Navbar />
      <Listitem />
      <ErrorMsg />
    </>
  );
}

export default App;

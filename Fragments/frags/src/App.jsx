import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/nav";
import Listitem from "./components/listItem";
import ErrorMsg from "./components/errorMsg";

function App() {
  let foodItems = ["aloo", "Dal", "Roti", "Bhindi", "Torai", "Sabzi"];
  return (
    <>
      <Navbar />
      <Listitem aaqa={foodItems} />
      <ErrorMsg aaqa={foodItems} />
    </>
  );
}

export default App;

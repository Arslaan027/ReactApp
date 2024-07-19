import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/nav";
import Listitem from "./components/listItem";
import ErrorMsg from "./components/errorMsg";
import Container from "./components/Container";
import Input from "./components/Inputfood";
import { useState } from "react";

function App({ onEnter, newEnter }) {
  let [currentText, setTextState] = useState("hello");
  let [foodItems, setFoodItems] = useState([]);

  function inputEmpty() {
    setTextState(" ");
  }

  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newfoodItem = event.target.value;
      let newItems = [...foodItems, newfoodItem];
      setFoodItems(newItems);
      setTextState(" ");
    }
  };
  return (
    <>
      <Container>
        <Navbar />
        <Input onEnter={handleOnChange} newEnter={inputEmpty}></Input>

        <Listitem Items={foodItems} />
        <ErrorMsg Items={foodItems} />
      </Container>
    </>
  );
}

export default App;

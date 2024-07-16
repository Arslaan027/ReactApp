import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/nav";
import Listitem from "./components/listItem";
import ErrorMsg from "./components/errorMsg";
import Container from "./components/Container";
import Input from "./components/Inputfood";
import { useState } from "react";

function App({ onEnter }) {
  let [currentText, setTextState] = useState("value given by the User");

  let [foodItems, setFoodItems] = useState([]);

  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newfoodItem = event.target.value;
      let newItems = [...foodItems, newfoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <Navbar />
        <Input onEnter={handleOnChange}></Input>

        <Listitem Items={foodItems} />
        <ErrorMsg Items={foodItems} />
      </Container>
    </>
  );
}

export default App;

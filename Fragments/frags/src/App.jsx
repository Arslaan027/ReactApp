import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/nav";
import Listitem from "./components/listItem";
import ErrorMsg from "./components/errorMsg";
import Container from "./components/Container";
import Input from "./components/Inputfood";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      let newfoodItem = event.target.value;
      setFoodItems([...foodItems, newfoodItem]);
      setInputText("");
    }
  };
  return (
    <>
      <Container>
        <Navbar />
        <Input
          value={inputText}
          onEnter={handleEnter}
          onChange={handleChange}
        ></Input>

        <Listitem Items={foodItems} />
        <ErrorMsg Items={foodItems} />
      </Container>
    </>
  );
}

export default App;

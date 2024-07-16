import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/nav";
import Listitem from "./components/listItem";
import ErrorMsg from "./components/errorMsg";
import Container from "./components/Container";
import Input from "./components/Inputfood";
import { useState } from "react";

function App({ handleEvent }) {
  let textStateArr = useState("value given by the User");
  let currentText = textStateArr[0];
  let setTextState = textStateArr[1];

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };
  let foodItems = ["aloo", "Dal", "Roti", "Bhindi", "Torai", "Sabzi"];
  return (
    <>
      <Container>
        <Navbar />
        <Input handleEvent={handleOnChange}></Input>
        <center>
          <p>{textStateArr}</p>
        </center>
        <Listitem Items={foodItems} />
        <ErrorMsg Items={foodItems} />
      </Container>
    </>
  );
}

export default App;

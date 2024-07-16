import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/nav";
import Listitem from "./components/listItem";
import ErrorMsg from "./components/errorMsg";
import Container from "./components/Container";
import Input from "./components/Inputfood";

function App({ handleEvent }) {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  let foodItems = ["aloo", "Dal", "Roti", "Bhindi", "Torai", "Sabzi"];
  return (
    <>
      <Container>
        <Navbar />
        <Input handleEvent={handleOnChange}></Input>
        <Listitem Items={foodItems} />
        <ErrorMsg Items={foodItems} />
      </Container>
    </>
  );
}

export default App;

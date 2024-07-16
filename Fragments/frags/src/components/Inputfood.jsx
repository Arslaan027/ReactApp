import style from "./Inputfood.module.css";

function Input() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <center>
        <input
          className={style.searchBox}
          placeholder="Enter your food"
          type="text"
          onChange={(event) => handleOnChange(event)}
        />
      </center>
    </>
  );
}

export default Input;

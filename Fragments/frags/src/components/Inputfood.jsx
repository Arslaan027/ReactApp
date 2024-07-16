import style from "./Inputfood.module.css";

function Input({ handleEvent }) {
  return (
    <>
      <center>
        <input
          className={style.searchBox}
          placeholder="Enter your food"
          type="text"
          onChange={handleEvent}
        />
      </center>
    </>
  );
}

export default Input;

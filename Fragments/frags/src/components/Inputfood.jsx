import style from "./Inputfood.module.css";

function Input({ onEnter }) {
  return (
    <>
      <center>
        <input
          className={style.searchBox}
          placeholder="Enter your food"
          type="text"
          onKeyDown={onEnter}
        />
      </center>
    </>
  );
}

export default Input;

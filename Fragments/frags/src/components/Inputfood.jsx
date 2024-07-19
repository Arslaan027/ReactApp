import style from "./Inputfood.module.css";

function Input({ onEnter, newEnter }) {
  return (
    <>
      <center>
        <input
          className={style.searchBox}
          placeholder="Enter your food"
          type="text"
          newEnter={newEnter}
          onKeyDown={onEnter}
        />
      </center>
    </>
  );
}

export default Input;

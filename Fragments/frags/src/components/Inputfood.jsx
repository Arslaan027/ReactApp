import style from "./Inputfood.module.css";

function Input({ value, onChange, onEnter }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnter(event);
    }
  };
  return (
    <>
      <center>
        <input
          className={style.searchBox}
          placeholder="Enter your food"
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </center>
    </>
  );
}

export default Input;

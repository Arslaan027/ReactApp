import style from "./Inputfood.module.css";

<<<<<<< HEAD
function Input({ onEnter, newEnter }) {
=======
function Input({ value, onChange, onEnter }) {
  const handleKeyDown= (event) => {
    if(event.key === "Enter"){
      onEnter(event);
    }
  };
>>>>>>> df17eab149e325459c4b81f181d0c1054d28f550
  return (
    <>
      <center>
        <input
          className={style.searchBox}
          placeholder="Enter your food"
          type="text"
<<<<<<< HEAD
          newEnter={newEnter}
          onKeyDown={onEnter}
=======
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
>>>>>>> df17eab149e325459c4b81f181d0c1054d28f550
        />
      </center>
    </>
  );
}

export default Input;

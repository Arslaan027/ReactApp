import style from "./buttonList.module.css";

function Btnlist() {
  const Btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={style.buttonsContainer}>
        {Btns.map((btn) => (
          <button className={style.mainButton}>{btn}</button>
        ))}
      </div>
    </>
  );
}
export default Btnlist;

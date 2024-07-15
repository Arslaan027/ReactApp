import style from "./buttonList.module.css";

function Btnlist() {
  const Btns = ["", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <>
      <div className={style.buttonsContainer}>
        <button className={style.mainButton}>C</button>
        <button className={style.mainButton}>1</button>
        <button className={style.mainButton}>2</button>
        <button className={style.mainButton}>3</button>
      </div>
    </>
  );
}
export default Btnlist;

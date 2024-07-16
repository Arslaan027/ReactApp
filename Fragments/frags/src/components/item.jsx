import css from "./item.module.css";

function Item({ Items }) {
  const handleBuyButton = (e) => {
    console.log(e);
    console.log(`${Items}` + " bought");
  };
  return (
    <>
      <li className={`${css["kg-class"]} list-group-item`}>
        <span className={css["kg-span"]}>{Items}</span>
        <button
          className={` ${css.buttons} btn btn-success`}
          onClick={(e) => handleBuyButton(e)}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default Item;

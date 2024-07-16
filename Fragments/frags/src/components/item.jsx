import css from "./item.module.css";

function Item({ Items, handleBuyButton }) {
  return (
    <>
      <li className={`${css["kg-class"]} list-group-item`}>
        <span className={css["kg-span"]}>{Items}</span>
        <button
          className={` ${css.buttons} btn btn-success`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default Item;

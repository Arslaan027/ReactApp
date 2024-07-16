import css from "./item.module.css";

function Item({ Items, bought, handleBuyButton }) {
  return (
    <>
      <li
        className={`${css["kg-class"]} list-group-item ${bought && "active"} `}
      >
        <span className={css["kg-span"]}>{Items}</span>
        <button
          className={`${css.buttons} btn btn-success`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default Item;

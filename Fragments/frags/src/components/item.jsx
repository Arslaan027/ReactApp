import css from "./item.module.css";

const handleBuyButton = ({ Items }) => {
  console.log(`${Items}` + " bought");
};

function Item({ Items }) {
  return (
    <>
      <li className={`${css["kg-class"]} list-group-item`}>
        <span className={css["kg-span"]}>{Items}</span>
        <button
          className={` ${css.buttons} btn btn-success`}
          onClick={() => handleBuyButton({ Items })}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default Item;

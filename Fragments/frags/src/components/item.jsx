import css from "./item.module.css";

function Item({ aaqa }) {
  return (
    <li className={`${css["kg-class"]} list-group-item`}>
      <span className={css["kg-span"]}>{aaqa}</span>
    </li>
  );
}
export default Item;

import { useState } from "react";
import Item from "./item";

function Listitem({ Items, handleBuyButton }) {
  let [activeItems, setActiveItems] = useState([]);
  const Buy = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group list">
      {Items.map((item) => (
        <Item
          key={item}
          Items={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => Buy(item, event)}
        />
      ))}
    </ul>
  );
}
export default Listitem;

import Item from "./item";

function Listitem({ Items, handleBuyButton }) {
  return (
    <ul className="list-group list">
      {Items.map((item) => (
        <Item
          key={item}
          Items={item}
          handleBuyButton={(event) => console.log("you bought " + `${Item}`)}
        />
      ))}
    </ul>
  );
}
export default Listitem;

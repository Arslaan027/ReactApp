import Item from "./item";

function Listitem({ Items }) {
  return (
    <ul className="list-group list">
      {Items.map((item) => (
        <Item key={item} Items={item} />
      ))}
    </ul>
  );
}
export default Listitem;

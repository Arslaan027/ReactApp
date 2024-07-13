import Item from "./item";

function Listitem({ aaqa }) {
  return (
    <ul className="list-group list">
      {aaqa.map((item) => (
        <Item key={item} aaqa={item} />
      ))}
    </ul>
  );
}
export default Listitem;

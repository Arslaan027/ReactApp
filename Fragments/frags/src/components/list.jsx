function Listitem() {
  let foodItems = ["Dal", "Roti", "Bhindi", "Torai", "Sabzi"];
  return (
    <ul className="list-group list">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
export default Listitem;

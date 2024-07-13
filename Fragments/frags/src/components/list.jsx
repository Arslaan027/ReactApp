function Listitem() {
  let foodItems = ["Dal", "Roti", "Bhindi", "Torai", "Sabzi", "gosht"];

  return (
    <>
      {foodItems.length === 0 ? (
        <h3>please Add something in the Array</h3>
      ) : null}
      <ul className="list-group list">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Listitem;

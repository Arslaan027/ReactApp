function ErrorMsg() {
  let foodItems = ["Dal", "Roti", "Bhindi", "Torai", "Sabzi", "gosht"];
  return (
    <>{foodItems.length === 0 && <h3>please Add something in the Array</h3>}</>
  );
}

export default ErrorMsg;

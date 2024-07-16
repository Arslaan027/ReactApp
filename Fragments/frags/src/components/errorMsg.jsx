function ErrorMsg({ Items }) {
  return (
    <>{Items.length === 0 && <h3>please Add something in the Array</h3>}</>
  );
}

export default ErrorMsg;

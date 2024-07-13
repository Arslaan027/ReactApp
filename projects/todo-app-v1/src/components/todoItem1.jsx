function Todoitem1() {
  let todoName = "Buy Milk";
  let todoDate = "04/10/2024";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-6">{todoName}</div>
        <div class="col-sm-2">{todoDate}</div>
        <div class="col-sm-1">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem1;

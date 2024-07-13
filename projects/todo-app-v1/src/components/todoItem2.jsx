function Todoitem2() {
  let todoName = "Buy Milk";
  let todoDate = "04/10/2024";
  return (
    <div class="container-text-center">
      <div class="row newRow">
        <div class="col-sm-6">{todoName}</div>
        <div class="col-sm-3">{todoDate}</div>
        <div class="col-sm-3">
          <button type="button" class="btn btn-danger btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem2;

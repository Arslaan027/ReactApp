function Addtodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-6">
          <input
            style={{ width: "70%" }}
            type="text"
            placeholder="Enter TODO here"
          />
        </div>
        <div class="col-sm-2">
          <input style={{ width: "90%" }} type="date" />
        </div>
        <div class="col-sm-1">
          <button type="button" class="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;

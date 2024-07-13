function Addtodo() {
  return (
    <div class="container-text-center">
      <div class="row newRow">
        <div class="col-sm-6">
          <input
            style={{ width: "80%" }}
            type="text"
            placeholder="Enter TODO here"
          />
        </div>
        <div class="col-sm-3">
          <input style={{ width: "80%", alignItems: "center" }} type="date" />
        </div>
        <div class="col-sm-3">
          <button type="button" class="btn btn-primary btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;

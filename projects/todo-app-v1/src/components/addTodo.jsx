function Addtodo() {
  return (
    <div className="container-text-center">
      <div className="row newRow">
        <div className="col-sm-6">
          <input
            style={{ width: "80%" }}
            type="text"
            placeholder="Enter TODO here"
          />
        </div>
        <div className="col-sm-3">
          <input style={{ width: "80%", alignItems: "center" }} type="date" />
        </div>
        <div className="col-sm-3">
          <button type="button" className="btn btn-primary btn">
            Add the task of today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;

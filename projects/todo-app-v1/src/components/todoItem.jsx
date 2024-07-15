function Todoitem({ task, date }) {
  return (
    <div className="container-text-center">
      <div className="row newRow">
        <div className="col-sm-6">{task}</div>
        <div className="col-sm-3">{date}</div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-primary btn">
            Add
          </button>
          <button type="button" className="btn btn-danger btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;

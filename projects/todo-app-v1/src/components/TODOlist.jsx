import Todoitem from "./todoItem";

function TODOlist({ data }) {
  return (
    <div className="items-container">
      {data.map((todo, index) => (
        <Todoitem key={index} task={todo.task} date={todo.date} />
      ))}
    </div>
  );
}

export default TODOlist;

import Todoitem from "./todoItem";
import style from "./TODOlist.module.css";

function TODOlist({ data }) {
  return (
    <div className={`${style.customContainer} items-container`}>
      {data.map((todo, index) => (
        <Todoitem key={index} task={todo.task} date={todo.date} />
      ))}
    </div>
  );
}

export default TODOlist;

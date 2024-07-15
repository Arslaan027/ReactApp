import AppName from "./components/appName";
import Addtodo from "./components/addTodo";
import "./App.css";
import Todoitem from "./components/todoItem";
import TODOlist from "./components/TODOlist";

function App() {
  const todos = [
    { task: "Goto Sleep", date: "07/11/2024" },
    { task: "Buy Milk", date: "08/11/2024" },
    { task: "GIT Push", date: "08/11/2024" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <center className="todo-container">
        <Addtodo />
        <TODOlist data={todos} />
      </center>
    </center>
  );
}

export default App;

import AppName from "./components/appName";
import Addtodo from "./components/addTodo";
import Todoitem1 from "./components/todoItem1";
import Todoitem2 from "./components/todoItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <center class="todo-container">
        <Addtodo />
        <Todoitem1 />
        <Todoitem2 />
      </center>
    </center>
  );
}

export default App;

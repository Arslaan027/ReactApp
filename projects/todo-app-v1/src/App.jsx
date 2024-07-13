import AppName from "./components/appName";
import Addtodo from "./components/addTodo";
import Todoitem1 from "./components/todoItem1";
import Todoitem2 from "./components/todoItem2";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <Addtodo />
      <Todoitem1 />
      <Todoitem2 />
    </center>
  );
}

export default App;

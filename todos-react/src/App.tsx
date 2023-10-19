import { useState } from "react";
import TaskCreator from "./components/TaskCreator/TaskCreator";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

interface ITodos {
  id: number;
  title: string;
}

function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);

  function onSubmit(title) {
    const newTodo = { id: Date.now(), title };

    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <TaskCreator onSubmit={onSubmit} />
      <TodoList />
    </div>
  );
}

export default App;

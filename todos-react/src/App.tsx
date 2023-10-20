import { useState } from "react";
import TaskCreator from "./components/TaskCreator/TaskCreator";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

export interface ITodos {
  id: number;
  title: string;
}

function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);

  function onSubmit(title: string): void {
    const newTodo = { id: Date.now(), title };

    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id: number): void {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  return (
    <div className="App">
      <TaskCreator onSubmit={onSubmit} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

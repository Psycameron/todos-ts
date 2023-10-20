import React from "react";
import { ITodos } from "../../App";

interface IProps {
  todos: ITodos[];
  deleteTodo: (id: number) => void;
}

export default function TodoList({ todos, deleteTodo }: IProps) {
  function handleClick(id: number): void {
    deleteTodo(id);
  }

  return (
    <ul>
      {todos.map(({ id, title }, index) => {
        return (
          <li key={id}>
            <span>{index}.</span>
            <span>{title}</span>
            <button type="button" onClick={() => handleClick(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

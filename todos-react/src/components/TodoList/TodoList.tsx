import React from "react";
import { ITodos } from "../../App";
import { Button, Index, Item, List, Title, Wrapper } from "./TodoList.styled";

interface ITodoListProps {
  todos: ITodos[];
  deleteTodo: (id: number) => void;
}

export default function TodoList({ todos, deleteTodo }: ITodoListProps) {
  function handleClick(id: number): void {
    deleteTodo(id);
  }

  return (
    <List>
      {todos.map(({ id, title }, index) => {
        return (
          <Item key={id}>
            <Wrapper>
              <Index>{index + 1}.</Index>
              <Title>{title}</Title>
            </Wrapper>
            <Button type="button" onClick={() => handleClick(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
}

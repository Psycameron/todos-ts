import { ChangeEvent, FormEvent, useState } from "react";

import { Button, Form, Input } from "./TaskCreator.styled.js";

interface ITaskCreatorProps {
  onSubmit: (title: string) => void;
}

export default function TaskCreator({ onSubmit }: ITaskCreatorProps) {
  const [title, setTitle] = useState("");

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit(title);
    setTitle("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        placeholder="Enter a task name"
        required
        onChange={onChange}
        value={title}
      />
      <Button type="submit">Create task</Button>
    </Form>
  );
}

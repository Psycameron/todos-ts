import { ChangeEvent, FormEvent, useState } from "react";

interface IProps {
  onSubmit: (title: string) => void;
}

export default function TaskCreator({ onSubmit }: IProps) {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        required
        onChange={onChange}
        value={title}
      />
      <button type="submit">Create task</button>
    </form>
  );
}

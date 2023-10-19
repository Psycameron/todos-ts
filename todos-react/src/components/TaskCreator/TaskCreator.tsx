import React, { useState } from "react";

export default function TaskCreator({ onSubmit }) {
  const [title, setTitle] = useState("");

  function onChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
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

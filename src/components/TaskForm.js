import React, { useState } from "react";

function TaskForm({addTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask({ id: Date.now(), title: title, description: description });
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Task Title" />
      <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Task Description" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
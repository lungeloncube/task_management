import React, { useState } from "react";
import './TaskForm.css';

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
    addTask({ id: Date.now(), title: title, description: description, completed: false });
    setTitle("");
    setDescription("");
  }

  return (
    <div>
    <h2>Task Form</h2>
    <form className="my-form" onSubmit={handleSubmit}>
  <input className="my-input" type="text" value={title} onChange={handleTitleChange} placeholder="Task Title" />
  <input className="my-input" type="text" value={description} onChange={handleDescriptionChange} placeholder="Task Description" />
  <button className="my-button-add" type="submit">Add Task</button>
</form>
</div>
  );
}

export default TaskForm;
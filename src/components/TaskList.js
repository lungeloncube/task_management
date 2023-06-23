import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
// import { v4 as uuidv4 } from 'uuid';

function TaskList() {
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks ?? [];
  });
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");
  const [idCounter, setIdCounter] = useState(0);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    };
   

  const deleteTask = (taskId) => {
 setTasks(tasks.filter((task) => task.id !== taskId));
  };
  

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }


  function filteredTasks() {
    switch (filter) {
      case "all":
        return tasks;
      case "completed":
        return tasks.filter((task) => task.completed);
      case "incomplete":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }

  function sortedTasks() {
    switch (sort) {
      case "none":
        return filteredTasks();
      case "title":
        return filteredTasks().sort((a, b) => a.title.localeCompare(b.title));
      case "description":
        return filteredTasks().sort((a, b) => a.description.localeCompare(b.description));
      default:
        return filteredTasks();
    }
  }


  return (
    <div>
      <TaskForm addTask={addTask} />

      <div>
        <label>Filter:</label>
        <select value={filter} onChange={(event) => setFilter(event.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <label>Sort:</label>
        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="none">None</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>
      </div>

<h2>Task List</h2>
              <table>
        <thead>
          <tr>
          <th>Completed</th>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

      {sortedTasks().map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} onEdit={editTask} toggleComplete={toggleComplete}/>
    

      ))}
   
       </tbody>
      </table>

    </div>
  );
}

export default TaskList;
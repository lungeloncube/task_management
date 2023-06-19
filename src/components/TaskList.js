import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
// import { v4 as uuidv4 } from 'uuid';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  // const addTask = (title, description) => {
  //   const newTask = { id: idCounter, title, description };
  //   setTasks([...tasks, newTask]);
  //   setIdCounter(idCounter + 1);
  // };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    };
   

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // const handleAddTask = (event) => {
  //   event.preventDefault();
  //   const title = event.target.title.value;
  //   const description = event.target.description.value;
  //   addTask(title, description);
  //   event.target.reset();
  // };

  return (
    <div>
      <TaskForm addTask={addTask} />

              <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} />
      ))}
       </tbody>
      </table>

    </div>
  );
}

export default TaskList;
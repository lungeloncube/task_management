import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import TaskEditor from './TaskEditor';
// import { v4 as uuidv4 } from 'uuid';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const [task, setTask] = useState(null);


  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    };
   

  const deleteTask = (taskId) => {
 setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const selected=tasks.filter((item) => item.id === taskId)
    setTask(selected);
  
 
  };


  useEffect(() => {
    console.log("selected", task)
  })

  return (
    <div>
      <TaskForm addTask={addTask} />

              <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} onEdit={editTask}/>
    

      ))}
   
       </tbody>
      </table>

    </div>
  );
}

export default TaskList;
import React, { useState } from 'react';
const TaskForm = ({ addTask }) => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 
     return (
         <div>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
           />
         <input type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <button onClick={() => addTask({ title, description })}>Add Task</button>
        </div>
    );
};
export default TaskForm;

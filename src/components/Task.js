import React from "react";


const Task = ({ task }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p> Description{task.description}</p>
            <p>ID: {task.id}</p>
        </div>
    );
};


export default Task;




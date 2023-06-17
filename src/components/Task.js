import React from 'react';

const Task = (props) => {
  const { task , onDelete} = props;
  return (
   /* <div>
      <p>ID: {task.id}</p>
      <h3>{task.title}</h3>
      <p>Description: {task.description}</p>
    </div> */

    <tr>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
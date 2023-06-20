import React, {useState} from 'react';
import TaskEditor from './TaskEditor';


const Task = (props) => {
  const { task , onDelete, onEdit} = props;
  const [isEditing, setIsEditing] =useState(false)

  const handleEditClick=()=>{
    setIsEditing(true);
  }

  
  return (
   /* <div>
      <p>ID: {task.id}</p>
      <h3>{task.title}</h3>
      <p>Description: {task.description}</p>
    </div> */
<>
{isEditing ? (
 <div >
      <TaskEditor task={task}  /></div>
      ) :
    <tr>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
        
      </td>
    </tr>}


</>
      
  );
};

export default Task;
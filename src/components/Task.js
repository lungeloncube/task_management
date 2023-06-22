import React, {useState} from 'react';
import TaskEditor from './TaskEditor';


const Task = (props) => {
  const { task , onDelete, onEdit} = props;
  const [isEditing, setIsEditing] =useState(false)

  const handleEditClick=()=>{
    setIsEditing(true);
  }

  const handleSave = (updatedTask) => {
    onEdit(task.id, updatedTask);
    setIsEditing(false);
  };


  return (

<>
{isEditing ? (
  //Not sure how to display this need to implement a pop up modal if its possible
 <div >
      <TaskEditor task={task} onSave={handleSave} /></div>
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
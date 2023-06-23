import React, {useState} from 'react';
import TaskEditor from './TaskEditor';


const Task = (props) => {
  const { task , onDelete, onEdit, toggleComplete} = props;
  const [isEditing, setIsEditing] =useState(false)

  const handleEditClick=()=>{
    setIsEditing(true);
  }

  const handleSave = (updatedTask) => {
    onEdit(task.id, updatedTask);
    setIsEditing(false);
  };

  function handleCancelClick() {
    setIsEditing(false);
  }


  return (

<>

{isEditing ? (
  
 <div >
      <TaskEditor task={task} onSave={handleSave} onCancelClick={handleCancelClick} /></div>
      ) :
    <tr>
      <td><input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} /></td>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>
        <button className="my-button-delete" onClick={() => onDelete(task.id)}>Delete</button>
        <button className="my-button-edit" onClick={handleEditClick}>Edit</button>
        
      </td>
    </tr>}


</>
      
  );
};

export default Task;
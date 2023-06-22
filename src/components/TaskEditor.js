import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'

export default ({ task , isEditting, onSave }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [tempData, setTempData] = useState();
  const[changed, setChanged]= useState(false);
  let [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    console.log("data", tempData)
    console.log("changed", changed)
  })

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setChanged(true);
    setTempData({ name: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setChanged(true);
    setTempData({ name: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ title, description });
  };

 
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" name="title" placeholder="Task Title" value={title} onChange={handleTitleChange} />
    <input type="text" name="description" placeholder="Task Description" value={description} onChange={handleDescriptionChange} />
    <button type="submit">Save</button>
  </form>
 </div>


    // <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    //   <Dialog.Panel>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     placeholder={task.id}
    //     value={task.id}

    //     readOnly
    //     onChange={(e) => {
       
    //       setTempData({ name: e.target.value })
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Task Title"
    //     value={title}
    //     defaultValue={task.title}
    //     name="title"
    //     onChange={handleTitleChange}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Task Description"
    //     value={description}
    //     defaultValue={task.description}
    //     name="description"
    //     onChange={handleDescriptionChange}
    //   />
    // {changed?<><button
    // onClick={(e)=>{
    //   // setTempData(tempData) 
    //   setChanged(false)
    //   isEditting=false
    //   task=tempData
  
    // }}
    // >Update</button>

    // <button onClick={(e)=>{
    // tempData({...task})  
    //   setChanged(false)
    //   isEditting=false
    // }}
    // >Cancel</button></>:null}
    // </form>
    // </Dialog.Panel>
    // </Dialog>

  );
}
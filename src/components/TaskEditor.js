import React, { useState, useEffect } from 'react';

export default ({ task , isEditting}) => {
  const [tempData, setTempData] = useState();
  const[changed, setChanged]= useState(false);
  useEffect(() => {
    console.log("data", tempData)
    console.log("changed", changed)
  })

 
  return (
    <dialog open>
    <form>
      <input
        type="text"
        placeholder={task.id}
        value={task.id}
        readOnly
        onChange={(e) => {
       
          setTempData({ name: e.target.value })
        }}
      />
      <input
        type="text"
        placeholder="Task Title"
        defaultValue={task.title}
        onChange={(e) => {
          setChanged(true)
          setTempData({ name: e.target.value })
        }}
      />
      <input
        type="text"
        placeholder="Task Description"
        defaultValue={task.description}
        onChange={(e) => {
          setChanged(true)
          setTempData({ name: e.target.value })
        }}
      />
    {changed?<><button
    onClick={(e)=>{
      // setTempData(tempData) 
      setChanged(false)
      isEditting=false
      task=tempData
  
    }}
    >Update</button>

    <button onClick={(e)=>{
    tempData({...task})  
      setChanged(false)
      isEditting=false
    }}
    >Cancel</button></>:null}
    </form>
    </dialog>

  );
}
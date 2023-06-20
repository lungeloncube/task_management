import React, { useState, useEffect } from 'react';

import { Modal, Button } from 'react-bootstrap'

export default ({ task }) => {
  const [tempData, setTempData] = useState();
  const[changed, setChanged]= useState(false);
  useEffect(() => {
    console.log("data", tempData)
    console.log("changed", changed)
  })
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!false)
  }

 
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
      setTempData(tempData) 
      setChanged(false)
    }}
    >Update</button>

    <button onClick={(e)=>{
    tempData({...task})  
      setChanged(false)
    }}
    >Cancel</button></>:null}
    </form>
    </dialog>

  );
}
import React from 'react'
import Sidebar from './Sidebar'
import TaskManagement from './TaskManagement'

const Task = () => {
  return (
    <>
    <div class='flex'>
   
      <div class=' top-0'>
      <Sidebar></Sidebar>
  
      </div>
      <div class='top-0   '>
  
    <TaskManagement></TaskManagement>
      </div>
     
    </div>
      </>
  )
}

export default Task

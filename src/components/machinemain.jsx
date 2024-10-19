import React from 'react'
import Sidebar from './Sidebar'
import Machines from './machines'

const Machinemain = () => {
  return (
    <>
    <div class='flex'>
   
      <div class=' top-0'>
      <Sidebar></Sidebar>
  
      </div>
      <div class='top-0   '>
  
    <Machines></Machines>
      </div>
     
    </div>
      </>
  )
}

export default Machinemain

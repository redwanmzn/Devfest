import React from 'react'
import DropDown from './DropDown'
import TaskCard from './TaskCard'

const TaskManagement = () => {
  return (
      <>
      <div class='w-[75vw]'>

    <div class='bg-[#f4f5f6] flex-col gap-3  flex '>
              <div class='flex justify-between ' >
                           <div class='flex flex-col'>
                            <div class='flex p-5'>
                                
                            <img src="./src/assets/task.png"className="size-12"alt="Task Icon"   />
                              <p class="font-urbanist font-bold text-[#535358] text-xl p-3">Task Management</p>
                            </div>
                            </div>
            <div class="flex gap-1 p-3">
                <img src="./src/assets/Ellipse 4.png" class='size-12'></img>
                     <DropDown></DropDown>
            </div> 
            </div>
   <div class='bg-white '>

             <div class=' flex p-5 border-b-2 justify-between gap-2 bg-white'>
                              <div class='flex gap-2 p-5'>
                              <img src='./src/assets/board.png' class='size-8'></img>
                               <p class='font-urbanist  text-gray-700 font-bold text-2xl'>Board</p>
                             </div>
                     <div class='flex gap-2 p-3'>
                           <button class=''><img src="./src/assets/Filter.png" class='size-4'></img></button>
                          <button class=''><img src="./src/assets/lightning.png" class='size-4'></img></button>
                           <button class=''><img src="./src/assets/Search.png" class='size-4'></img></button>
                            <button class=''><img src="./src/assets/....png" class='size-4'></img></button>
                           <button class=' px-10 bg-[#B6C7FF]'>New</button>
                     </div>
             </div>



             <div class='flex gap-5 p-5 '>

             <div class=' bg-[#F4F7FF] rounded-md p-5 :'>
                            <div class='flex bg-white rounded-sm p-2 gap-2 w-4/6'>
                             <img src="./src/assets/bluedot.png" class='size-5'></img>
                               <p class='text-xl font-urbanist font-semibold'> Not Started</p>
                                </div>
                 <div class='flex py-5 flex-col gap-3'>
                     <TaskCard></TaskCard>
                     <TaskCard></TaskCard>
                    
                 </div> 
             </div>




             <div class='flex  '>

<div class=' bg-[#FFF8F3] rounded-md p-5 :'>
               <div class='flex bg-white rounded-sm p-2 gap-2 w-4/6'>
                <img src="./src/assets/orangedot.png" class='size-5'></img>
                  <p class='text-xl font-urbanist font-semibold'> In Progress</p>
                   </div>
    <div class='flex py-5 flex-col gap-3'>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
       
    </div> 
</div>
  </div>


  <div class='flex '>

<div class=' bg-[#f4fff5] rounded-md p-5 :'>
               <div class='flex bg-white rounded-sm p-2 gap-2 w-4/6'>
                <img src="./src/assets/greendot.png" class='size-5'></img>
                  <p class='text-xl font-urbanist font-semibold'> Done</p>
                   </div>
    <div class='flex py-5 flex-col gap-3'>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
       
    </div> 
</div>
                  </div>




                 </div>
             </div>
            </div>
             </div>
                  
          
      
      </>
  )
}

export default TaskManagement

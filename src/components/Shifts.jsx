import React from 'react'
import Morning from './Morning'
import Afternoon from './Afternoon'
import Night from './Night'

const Shifts = () => {
  return (
    <>
    <div class='w-4/6  rounded-md   bg-white'>
    <div>

             <div class='flex justify-between p-3 gap-1'>
              <div class='flex'>
                 <img src='./src/assets/Rocket.png' class='size-9'></img>
                <p class='font-urbanist font-bold  text-gray-500 text-2xl'>Active shifts</p>
              </div>

          
                         <div class='' >
                           <button class='h-12 bg-[#0E43FB] text-white rounded-sm '>+ New shift</button>
                           </div>
              </div>
             <div>
           <Morning></Morning>
           <Afternoon></Afternoon>
           <Night></Night>
          </div>
    </div>
    </div>
    </>
  )
}

export default Shifts

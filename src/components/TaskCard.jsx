import React from 'react'

const Card = () => {
  return (
    <>
    <div class=' bg-white  rounded-md  border-gray-200  gap-5 py-2 px-2 '>
     <div class='flex flex-col gap-2'>
              <div class='p-4'>
                   <p class='text-lg text-gray-700 font-urbanist font-semibold'>Fix Overheating Issue on Welding Robot</p> 
                   <p class='text-lg text-gray-700 font-urbanist font-semibold'>Type: <span class='border-2 p-1 text-gray-300'> Routine Task</span></p>
                   <p class='text-lg text-gray-700 font-urbanist font-semibold'>Description :  <span class=' font-normal'>Investigate and repair the overheating issue on welding robot #3. </span></p>  
                   <p class='text-lg text-gray-700 font-urbanist font-semibold'>Person-in-charge: </p>
                     <div class='flex gap-5 py-3'>
                          <img src='./src/assets/avatar.png' class='size-10'></img>
                            <div class='flex flex-col'>
                                 <p class='font-urbanist font-semibold text-sm'>Kesbi Walid</p>
                                  <p class='font-urbanist font-normal text-sm text-orange-400'>Departement X</p>
                                 </div>
                            
                                    <img src='./src/assets/call.png' class='size-10'></img>
                                  
                                   
                                    <img src='./src/assets/message.png' class='size-10'></img>
                              


                    </div>
<p class='font-urbanist font-semibold'>Deadline : 20/10/2024 - 2PM</p>
              </div>
                  
                         
                           
                          </div >
                 </div>

  
    </>
  )
}

export default Card

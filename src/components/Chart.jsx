import React from 'react'
import LineChart from './ui/Linechart'
import Night from './Night'

const chart = () => {
  return (
    <>
    <div class='bg-white rounded-sm p-3 h-8/12 w-8/12'>
    <div class='flex gap-2'>
                 <img src='./src/assets/Rocket.png' class='size-11'></img>
                <p class='font-urbanist font-bold  text-gray-500 text-2xl'>Production Overview</p>
                
              </div>
                           <div class='flex text-xl font-semibold rounded-sm gap-1 p-1'>
              <p class=' text-gray-500 font-urbanist font-semibold'> 720 </p>
                               <span class=' bg-[#c5f6d0]   font-urbanist text-[#14CA74] font-normal'>28.4%  </span><img src='./src/assets/Arrow up.png' class='size-3 mt-1'></img>
      </div>
      <div class=''>
        <LineChart></LineChart>
        <Night></Night>
      </div>
    </div>
    </>
  )
}

export default chart

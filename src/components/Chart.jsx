import React from 'react'
import LineChart from './ui/Linechart'
import Night from './Night'

const chart = () => {
  return (
    <>
    <div class='bg-white rounded-sm p-3 h-8/12 w-8/12'>
    <div class='flex gap-2'>
                 <img src='./src/assets/Rocket.png' class='size-11'></img>
                <p class='font-urbanist font-bold  text-gray-500 text-2xl'>Maintenance Overviews</p>
                
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

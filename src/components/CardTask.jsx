import React from 'react'

const CardTask = () => {
  return (
    <>
    <div class=' bg-white h-[12vh] rounded-md border-2 text-sm border-gray-200 px-2 w-[17vw]  gap-5 py-2 '>
      <div class='flex flex-col gap-2'>

                 <div class='flex justify-between'>
                  <p class=' text-gray-300 font-urbanist font-semibold'>Tasks Completed Today</p> <button class='h-8'><img src="./src/assets/....png" class='size-3'></img></button>
                </div>
        <div class='flex gap-2'>
                <p class=' text-gray-500 text-lg font-urbanist font-semibold'>
                60/<span class='text-sm'>120</span>
                </p>
                            <div class='flex bg-[#c5f6d0] rounded-sm gap-1 p-1'>
                              <p class='  text-sm font-urbanist text-[#14CA74] font-normal'>28.4%  </p><img src='./src/assets/Arrow up.png' class='size-3 mt-1'></img>
                           </div >

        </div>
      </div>
    </div>
  
    </>
  )
}

export default CardTask

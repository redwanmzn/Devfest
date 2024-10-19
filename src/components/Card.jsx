import React from 'react'

const Card = () => {
  return (
    <>
    <div class=' bg-white  rounded-md border-2 border-gray-200  gap-5 py-2 px-2 w-[17vw]'>
     <div class='flex flex-col gap-2'>
              <div class='flex justify-between'>
                   <p class='text-sm text-gray-300 font-urbanist font-semibold'>Total Units Produced Today</p> <button class=''><img src="./src/assets/....png" class='size-2'></img></button>
              </div>
                     <div class='flex gap-2'>
                         <p class='sm:text-sm md:text-md lg:text-lg xl:text-xl text-gray-500 font-urbanist font-semibold'> 720 </p>
                           <div class='flex bg-[#c5f6d0] rounded-sm gap-1 p-1'>
                               <p class=' xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm  font-urbanist text-[#14CA74] font-normal'>28.4%  </p><img src='./src/assets/Arrow up.png' class='size-3 mt-1'></img>
                          </div >
                 </div>
      </div>
    </div>
  
    </>
  )
}

export default Card

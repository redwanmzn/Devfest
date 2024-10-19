import React from 'react'

const Afternoon = () => {
  return (
    <>
    <div class='p-3 text-sm'>

    <div class=' rounded-md  p-2 border-2'>
        <div class='flex justify-between'>
      <p class=' font-urbanist font-semibold text-gray-600 text-sm'> Afternoon shift (2 PM - 10 PM)</p>
       <button> <img src='./src/assets/....png' class='size-5'></img> </button>
        </div>
      <div>
        <div class='flex gap-10 text-md'>
            <div class=' px-3'>
                <p class='font-urbanist font-semibold text-[#0E43FB] '>Units Produced</p>
                  <p class='font-urbanist text-gray-400  font-semibold'>270/400</p>
            </div>
            <div class='border-l-2 px-3'>
                <p class='font-urbanist font-semibold text-[#0E43FB]  '>Workers</p>
                  <p class='font-urbanist text-gray-400  font-semibold'>19</p>
            </div>
            <div class='border-l-2 px-3'>
                <p class='font-urbanist font-semibold text-[#0E43FB] '>Bottlenecks</p>
                  <p class='font-urbanist text-gray-400 font-semibold'>Welding machine 2 overheating</p>
            </div>
            <div class=' border-l-2 px-3'>
                <p class='font-urbanist font-semibold text-[#0E43FB] '>Delays</p>
                  <p class='font-urbanist text-gray-400 font-semibold'>Time : 60 minutes  </p>
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Afternoon

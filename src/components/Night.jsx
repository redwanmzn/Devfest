import React from 'react'

const Night = () => {
  return (
    <>
    <div class='p-2 text-sm'>

    <div class=' rounded-md  p-3 border-2'>
        <div class='flex justify-between'>
      <p class=' font-urbanist font-semibold text-gray-600 text-sm '> Night shift (10 PM - 6 AM)</p>
       <button> <img src='./src/assets/....png' class='size-5'></img> </button>
        </div>
      <div>
        <div class='flex gap-10 text-md '>
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
                  <p class='font-urbanist text-gray-400 font-semibold'>AGV route issue flagged</p>
            </div>
            <div class=' border-l-2 px-3'>
                <p class='font-urbanist font-semibold text-[#0E43FB] '>Delays</p>
                  <p class='font-urbanist text-gray-400 font-semibold'>Time : 00 minutes  </p>
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Night

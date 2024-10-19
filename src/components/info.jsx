import React from 'react'


const Info = () => {
  return (
    <>
    <div class='p-3 text-sm'>

    <div class=' rounded-md  p-2 border-2'>
    <div class='flex justify-between'>
      <p class=' font-urbanist font-semibold text-gray-600 text-sm-md'> Machine Infos</p>
       <button> <img src='./src/assets/....png' class='size-5'></img> </button>
        </div>
      
      <div>
        <div class='flex gap-10 py-2 text-md '>
            <div class=' px-3'>
                <p class='font-urbanist font-semibold text-[#0E43FB] '>Temperature</p>
                  <p class='font-urbanist text-gray-400  font-semibold'>450/500</p>
            </div>
            <div class='border-l-2 px-3'>
                <p class='font-urbanist font-semibold text-[#0E43FB]  '>vibration</p>
                  <p class='font-urbanist text-gray-400  font-semibold'>22</p>
            </div>
            <div class='border-l-2 px-3'>
                <p class='font-urbanist font-semibold text-[#0E43FB] '>Energy usage</p>
                  <p class='font-urbanist text-gray-400 font-semibold'>None</p>
            </div>
            </div>
            <div class='flex flex-col border-t-2 justify-between px-3'>
                <div class='flex gap-5 py-5'>

                <div class='border-r-2 px-2'>
                <p class='font-urbanist font-semibold text-[#0E43FB] '>Toll wear</p>
                  <p class='font-urbanist text-gray-400 font-semibold'>85% </p>
                  <p class='font-urbanist text-gray-400 font-semibold'>Tool replacement needed at 90% </p>
                </div>
                <div class=''>

                <p class='font-urbanist font-semibold text-[#0E43FB] '>Operating time</p>
                  <p class='font-urbanist text-gray-400 font-semibold'>6 hours </p>
                  <p class='font-urbanist text-gray-400 font-semibold'>Last reset: 4 days ago) </p>
                </div>

                </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Info

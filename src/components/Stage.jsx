import React from 'react'
import GaugeChart from './ui/GaugeChart'
const Stage = () => {
  return (
    <>
       <div class='p-5 '>

                                 <div class='bg-white  p-3'>
                                          <div class='flex gap-2 '>
                                            <img src='./src/assets/Rocket.png' class='size-9'></img>
                                            <p class='font-urbanist font-semibold text-2xl text-gray-500'>Stage Overview</p>
                                 </div>
 <div class='flex gap-3'>
                  <div class='flex flex-col'>
                                <div class=' border-2'>
                                    <p class='font-urbanist font-semibold text-xl text-gray-400'>Stamping </p>
                                     <GaugeChart></GaugeChart>     
                               </div>            
          
                    </div> 
         <div class='flex flex-col'>
                       <div class=' border-2'>
                            <p class='font-urbanist font-semibold text-xl text-gray-400'>Stamping </p>
                            <GaugeChart></GaugeChart>     
                       </div>            
          
         </div> 
         <div class='flex flex-col'>
                       <div class=' border-2'>
                            <p class='font-urbanist font-semibold text-xl text-gray-400'>Stamping </p>
                            <GaugeChart></GaugeChart>     
                       </div>            
          
         </div> 
         <div class='flex flex-col'>
                       <div class=' border-2'>
                            <p class='font-urbanist font-semibold text-xl text-gray-400'>Stamping </p>
                            <GaugeChart></GaugeChart>     
                       </div>            
          
         </div> 
        
                       
                         
                               
          
    
       
            </div>                          
</div>
</div>

    </>
  )
}

export default Stage

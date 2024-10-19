import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const TaskCard = () => {
  return (
    <>
    <div class=' bg-white  rounded-lg  border-gray-200  gap-5 py-2 px-2 '>
     <div class='flex flex-col gap-2'>
     <p class='text-lg text-gray-700 font-urbanist font-semibold'>Tasks Assigned</p> 
              <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Check and replace cooling system filters.</AccordionTrigger>
    <AccordionContent>
    <div class=' bg-white  rounded-lg  border-gray-200  gap-5 py-2 px-2 '>
     <div class='flex flex-col gap-2'>
              <div class='p-4'>
                <div class='flex justify between'>
                  
                     
                </div>
                   <p class='text-lg text-gray-700 font-urbanist font-semibold'> Check and replace cooling system filters. </p>  
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
</div>
</div>
    </AccordionContent>
  </AccordionItem>
</Accordion>




<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Check and replace cooling system filters.</AccordionTrigger>
    <AccordionContent>
    <div class=' bg-white  rounded-lg  border-gray-200  gap-5 py-2 px-2 '>
     <div class='flex flex-col gap-2'>
              <div class='p-4'>
                <div class='flex justify between'>
                   
                     
                </div>
                   <p class='text-lg text-gray-700 font-urbanist font-semibold'> Check and replace cooling system filters. </p>  
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
</div>
</div>
    </AccordionContent>
  </AccordionItem>
</Accordion>




<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Check and replace cooling system filters.</AccordionTrigger>
    <AccordionContent>
    <div class=' bg-white  rounded-lg  border-gray-200  gap-5 py-2 px-2 '>
     <div class='flex flex-col gap-2'>
              <div class='p-4'>
                <div class='flex justify between'>
         
                     
                </div>
                   <p class='text-lg text-gray-700 font-urbanist font-semibold'> Check and replace cooling system filters. </p>  
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
</div>
</div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
 
                          </div >
                 </div>

  
    </>
  )
}

export default TaskCard

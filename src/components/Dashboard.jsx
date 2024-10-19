import React from 'react'
import Card from './Card'
import CardTask from './CardTask'
import Shifts from './Shifts'
import DropDown from './DropDown'
import Chart from './Chart'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <>

    
       <div class='bg-[#f4f5f6] flex-col gap-3 h-full flex'>
        <div class='flex justify-between' >
                           <div class='flex flex-col'>
                              <p class="font-urbanist font-bold text-[#535358] text-2xl p-3">Welcome back, Red</p>
                               <p className='font-urbanist text-gray-400 pl-4'> Empower Your Factory, Optimize Every Operation: Real-Time Insights for Smarter Manufacturing</p>
                            </div>
            <div class="flex gap-1 p-3">
                <img src="./src/assets/Ellipse 4.png" class='size-12'></img>
                     <DropDown></DropDown>
            </div> 
      
        </div>
                       <div class='flex p-5 gap-7'>
                        <Card></Card>
                         <CardTask></CardTask>
                         <Card></Card>
                        <CardTask></CardTask>
                         </div>
     <div class='flex gap-5 px-5'>
      <Chart></Chart>
        

      <Shifts></Shifts>
      
   

        </div>    
      
       </div>
   
    </>
  )
}

export default Dashboard

import React from 'react'

const Sidebar = () => {
  return (
  
      <>
     
     <div class=" h-full w-80 flex flex-col  gap-5 px-5 text-black p-4">
      <div class='fixed'>
      <div class=" h-full w-full flex flex-col  gap-5 px-5 text-black p-4">
                   <div class='flex gap-3'>
                          <img src='./src/assets/Logo Icon (1).png'class='size-7'></img>
                            <p class=' sm:text-md md:text-lg lg:text-xl xl:text-2xl font-urbanist font-bold  '>
                                Proxima
                            </p>
                      </div>
                      
  <input placeholder='Search for...' class='bg-[#ffffff] border-gray-100 border-2 rounded-sm p-4 h-10 '></input>
  <button class='border-2 border-l-[#0E43FB] flex gap-3 font-urbanist font-bold bg-[#B6C7FF] text-[#0E43FB] rounded-none '> <img src='./src/assets/icon.png' class='size-5'></img> Dashboard</button>
  <button class='border-2 flex gap-3 font-urbanist font-semibold  text-gray-400'> <img src='./src/assets/icon-wrapper-h.png'class='size-5'></img> Task Management</button>
  <button class='border-2 flex gap-3 font-urbanist font-semibold text-gray-400 '> <img src='./src/assets/lightning.png'class='size-5'></img>Machines & Energy</button>
  <button class='border-2 flex gap-3 font-urbanist font-semibold  text-gray-400 '><img src='./src/assets/bell.png'class='size-5'></img>Alerts & Notifications</button>
               
               
               <div class=' flex flex-col mt-40 border-t-gray-200  '>
                <div class='border-t-2 '>
                    <button class=' flex gap-3 font-urbanist font-semibold w-full rounded-none text-gray-400 '><img src='./src/assets/info.png'class='size-5'></img>Help</button>

                </div>
                    <button class=' flex gap-3 font-urbanist font-semibold rounded-none text-gray-400 '><img src='./src/assets/settings.png'class='size-5'></img>Settings</button>
                    <button class=' flex gap-3 font-urbanist font-semibold  text-red-600 rounded-none '> <img src='./src/assets/log out.png' class='size-5'></img> Log out</button>
               </div>
      </div>
  </div>
  </div>
      </>
    )
  }

export default Sidebar

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); 

  
  const isActive = (path) => location.pathname === path;

  return (
                <div className="h-full bg-white w-80 flex flex-col gap-5 px-5 text-black p-4">
                <div className="fixed">
                <div className="h-full w-full flex flex-col gap-5 px-5 text-black p-4">
             <div className="flex gap-3">
              <img
              src="./src/assets/Logo Icon (1).png"
              className="size-7"
              alt="Logo"
            />
            <p className="sm:text-md md:text-lg lg:text-xl xl:text-2xl font-urbanist font-bold">
              Proxima
            </p>
          </div>

          <input
            placeholder="Search for..."
            className="bg-[#ffffff] border-gray-100 border-2 rounded-sm p-4 h-10"
          />

    
          <Link to="/">
            <button
              className={`border-2 flex gap-3 font-urbanist font-semibold rounded-none ${
                isActive('/') ? 'text-[#0E43FB] bg-blue-100' : 'text-gray-400'
              }`}
            >
              <img src="./src/assets/icon.png" className="size-5" alt="Dashboard Icon" />
              Dashboard
            </button>
          </Link>

      
          <Link to="/task">
            <button
        className={`border-2 flex gap-3 font-urbanist font-semibold rounded-none ${
                isActive('/task') ? 'text-[#0E43FB] bg-blue-100' : 'text-gray-400'
              }`}
            >
      <img
                src="./src/assets/task.png"
                className="size-5"
         alt="Task Icon"
              />
          Task Management
            </button>
  </Link>

    <Link to="/machines">
            <button
           className={`border-2 flex gap-3 font-urbanist font-semibold rounded-none ${
                isActive('/machines') ? 'text-[#0E43FB] bg-blue-100' : 'text-gray-400'
         }`}
            >
         <img
                src="./src/assets/union.png"
             className="size-5"
                alt="Machines Icon"
         />
              Machines & Energy
       </button>
          </Link>

  
          <Link to="/alerts">
            <button
              className={`border-2 flex gap-3 font-urbanist font-semibold rounded-none ${
                isActive('/alerts') ? 'text-[#0E43FB] bg-blue-100' : 'text-gray-400'        }`}
            >
              <img src="./src/assets/bell.png" className="size-5" alt="Alerts Icon" />        Alerts & Notifications
            </button>
          </Link>

          <div className="flex flex-col mt-40 border-t-gray-200">
            <div className="border-t-2">
   
              <Link to="/help">
                <button            className={`flex gap-3 font-urbanist font-semibold w-full rounded-none ${
                    isActive('/help') ? 'text-[#0E43FB] bg-blue-100' : 'text-gray-400'
                  }`}
            >
                  <img src="./src/assets/info.png" className="size-5" alt="Help Icon" />
            Help
                </button>
             </Link>
            </div>

      
           <Link to="/settings">
              <button
           className={`flex gap-3 font-urbanist font-semibold rounded-none ${
                  isActive('/settings') ? 'text-[#0E43FB] bg-blue-100' : 'text-gray-400'
         }`}
              >
               <img
                  src="./src/assets/settings.png"         className="size-5"
                  alt="Settings Icon"
                />       Settings
              </button>
      </Link>

     
            <Link to="/logout">
       <button
                className={`flex gap-3 font-urbanist font-semibold rounded-none ${
                  isActive('/logout') ? 'text-red-600 bg-red-100' : 'text-gray-400'
                }`}
              >
                <img
                  src="./src/assets/log out.png"
                  className="size-5"
                  alt="Log Out Icon"
                />
                Log out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

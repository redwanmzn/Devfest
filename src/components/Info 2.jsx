import React from 'react';

const Info2 = () => {
  return (
    <div className="p-2 ml-2 border-2 rounded-md w-[29vw]  flex flex-col gap-4 text-sm"> 
      <p className="font-urbanist font-semibold text-lg">
        Last Maintenance: <span className="text-sm">3 days ago</span>
      </p>
      <p className="font-urbanist font-semibold text-lg">
        Next Maintenance: <span className="text-sm">Due in 1 day</span>
      </p>
      <div>
        <button className="bg-[#acbcf6] py-2 px-4 rounded-md hover:bg-[#9baeea] transition-colors"> 
          <div className="flex items-center gap-2">
            <img src="./src/assets/calendar.png" alt="Calendar" className="w-5 h-5" /> 
            <p className="font-urbanist font-semibold">Schedule Maintenance</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Info2;

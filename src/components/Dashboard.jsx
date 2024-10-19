import React, { useEffect, useState } from 'react';
import Card from './Card';
import CardTask from './CardTask';
import Shifts from './Shifts';
import DropDown from './DropDown';
import Chart from './Chart';
import Stage from './Stage';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/Dashboard/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
        }
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        //  Add better error handling here.  For example:
        // setDashboardData([]); // Clear data to indicate failure
        // setErrorMessage("Failed to load dashboard data."); //Show an error message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='bg-[#f4f5f6] flex-col gap-3 h-full flex'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <p className="font-urbanist font-bold text-[#535358] text-2xl p-3">Welcome back, Red</p>
            <p className='font-urbanist text-gray-400 pl-4'>Empower Your Factory, Optimize Every Operation: Real-Time Insights for Smarter Manufacturing</p>
          </div>
          <div className="flex gap-1 p-3">
            <img src="./src/assets/Ellipse 4.png" className='size-12' alt="Profile" /> {/* Added alt text */}
            <DropDown />
          </div>
        </div>
        <div className='flex p-5 gap-7'>
          {dashboardData.map((item) => (
            <div key={item.name} className='bg-white rounded-md border-2 border-gray-200 gap-5 py-2 px-2 w-[17vw]'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm text-gray-300 font-urbanist font-semibold'>{item.name}</p>
                <p className='text-gray-500 font-urbanist font-semibold'>{item.number}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex gap-5 px-5'>
          <Shifts />
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
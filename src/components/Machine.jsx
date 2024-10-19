import React from 'react';

const Machine = ({ machineData }) => {
    // Handle missing data gracefully
    const machineName = machineData.machine_name || 'Unknown Machine';
    const machineType = machineData.machine_type || 'Unknown Type';
    const location = machineData.temperature || 'Unknown'
    const alerts = machineData.power_consumation || 'None';
    const status = machineData.machine_state || 'Unknown'; //Default to Unknown

    return (
      <div className="flex p-5">
        <div className="bg-white rounded-md text-gray-400 p-5 flex justify-between w-screen">
          <div className="flex gap-2">
            <p className="text-lg font-urbanist font-semibold">
              {machineName}
            </p>
          </div>
          <p className="text-lg font-urbanist font-semibold">{machineType}</p>
          <p className="text-lg font-urbanist font-semibold">{location}</p>
          <p className="text-lg font-urbanist font-semibold">{alerts}</p>
          <p className="text-lg font-urbanist font-semibold">{status}</p>
        </div>
      </div>
    );
  };

export default Machine;
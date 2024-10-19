import React, { useState } from 'react';




const Machine = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log('Checkbox State:', event.target.checked); 
  };

  return (
      <>
   

          <div className="flex  p-5">
            <div className="bg-white] rounded-md text-gray-400 p-5 flex justify-between w-screen">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="w-6 h-6"
                  />
                <p className="text-lg font-urbanist font-semibold">
                Stamping robot #1
                </p>
              </div>
              <p className="text-lg font-urbanist font-semibold">Staming</p>
              <p className="text-lg font-urbanist font-semibold">Zone A</p>
              <p className="text-lg font-urbanist font-semibold">None</p>
              <p className="text-lg bg-[#D1FFE0] px-2 rounded-md text-[#25C059] font-urbanist font-semibold">Working</p>
            </div>
          </div>
        
     
   
    </>
);
};

export default Machine;

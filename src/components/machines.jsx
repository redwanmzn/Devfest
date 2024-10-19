
import DropDown from './DropDown'; 
import Machine from './machine';


const Machines = () => {
  

  return (
    <div className="w-[75vw]">
      <div className="bg-[#f4f5f6] flex-col gap-3 flex">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex p-5">
              <img src="./src/assets/vector.png"className="size-12"alt="Task Icon"/>
              <p className="font-urbanist font-bold text-[#535358] text-xl p-3"> Machines Management </p>
            </div>
          </div>

          <div className="flex gap-1 p-3">
            <img src="./src/assets/Ellipse 4.png" className="size-12" alt="" />
            <DropDown />
          </div>
        </div>

        <div className="bg-white">
          <div className="flex p-5 border-b-2 justify-between gap-2 bg-white">
            <div className="flex flex-col gap-1 p-3">
              <p className="font-urbanist text-gray-700 font-bold text-lg">
                Current Machines
              </p>
              <p className="font-urbanist text-gray-400 font-semibold text-sm">
                Select a machine to view more details
              </p>
            </div>

            <div className="flex gap-2 p-3">
              <input placeholder="Search" className="w-60 h-10 px-5 border-2"/>
              <button className="flex h-10 p-3 gap-3">
                <img src="./src/assets/Filter.png" className="size-6 "alt="Filter Icon"/>
                <p className="text-gray-400 ">Filter</p>
              </button>

              <button className="flex p-3 h-10 gap-3">
                <img src="./src/assets/export.png"className="size-6"alt="Export Icon"/>
                <p className="text-gray-400 ">Export</p>
              </button>
            </div>
          </div>

          <div className="flex gap-5 p-5">
            <div className="bg-[#F4F7FF] rounded-md text-gray-400 p-5 flex justify-between w-screen">
              <div className="flex gap-2">
              
                
                <p className="text-xl font-urbanist font-semibold"> Machine ID  </p>
                </div>
              <p className="text-xl font-urbanist font-semibold">Stage</p>
              <p className="text-xl font-urbanist font-semibold">Location</p>
              <p className="text-xl font-urbanist font-semibold">Alerts</p>
              <p className="text-xl font-urbanist font-semibold">Status</p>
               </div>
               </div>
                     <div class='flex flex-col'>
                        <Machine></Machine>
                          <Machine></Machine>
                            <Machine></Machine>
                              <Machine></Machine>
                                <Machine></Machine>
                                  <Machine></Machine>
                                   <Machine></Machine>
                                     </div>
        </div>
      </div>
    </div>
  );
};

export default Machines;

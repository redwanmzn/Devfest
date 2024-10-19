import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import TaskCard from './TaskCard';
import Info from './info';
import Info2 from './Info 2';
const Machine = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log('Checkbox State:', event.target.checked);
    };

    return (
        <>
            <div className='flex w-full h-auto'> {/* Change to h-auto to fit content */}
                <Accordion type="single" collapsible className="w-full"> {/* Allow accordion to take full width */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex justify-between items-center px-4 py-2 w-full cursor-pointer"> {/* Adjusted padding */}
                                <div className="bg-white rounded-md text-gray-400 px-4 py-3 flex justify-between items-center w-full">
                                    <div className="flex items-center flex-1 gap-4"> {/* Reduced spacing */}
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                            className="w-5 h-5" 
                                        />
                                        <p className="text-base font-urbanist font-semibold">
                                            Stamping robot #1
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 flex-1"> {/* Reduced gap */}
                                        <p className="text-base font-urbanist font-semibold">Staming</p>
                                        <p className="text-base font-urbanist font-semibold">Zone A</p>
                                        <p className="text-base font-urbanist font-semibold">None</p>
                                        <p className="text-base bg-[#D1FFE0] px-2 rounded-md text-[#25C059] font-urbanist font-semibold">
                                            Working
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='flex gap-4 p-4'> 
                                <div className='flex flex-col gap-2'> 
                                    <Info />
                                    <Info2 />
                                </div>
                              
                                <div className='border-2 rounded-md p-4'> 
                                    <TaskCard />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
};

export default Machine;

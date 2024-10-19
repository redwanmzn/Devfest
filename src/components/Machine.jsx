import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import TaskCard from './TaskCard';
import Info from './info';

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
                            <div className="flex justify-between p-5 w-full cursor-pointer"> {/* Change cursor to pointer for the trigger */}
                                <div className="bg-white rounded-md text-gray-400 p-5 flex justify-between items-center w-full">
                                    <div className="flex  flex-1">
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                            className="w-6 h-6"
                                        />
                                        <p className="text-lg font-urbanist font-semibold flex-1">
                                            Stamping robot #1
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between gap-6 flex-1">
                                        <p className="text-lg font-urbanist font-semibold">Staming</p>
                                        <p className="text-lg font-urbanist font-semibold">Zone A</p>
                                        <p className="text-lg font-urbanist font-semibold">None</p>
                                        <p className="text-lg bg-[#D1FFE0] px-2 rounded-md text-[#25C059] font-urbanist font-semibold">
                                            Working
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='flex'> {/* Flex direction as column to stack elements vertically */}
                                <Info />
                                <TaskCard />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
};

export default Machine;

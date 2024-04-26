import React from 'react';
import { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import Icon from '../assets/icons/red_cross_icon.png';
import AddTask from './AddTask';

const tableOptions = ["All", "Watering", "Lighting"];
const scheduled_task = [
    {
        "id": 1,
        "description": "Water tulip in the morning",
        "action": "Watering",
        "time": "12:00:00"
    },
    {
        "id": 2,
        "description": "Turn on in the morning",
        "action": "Lighting",
        "time": "14:00:00"
    },
    {
        "id": 3,
        "description": "Turn on in the morning",
        "action": "Lighting",
        "time": "14:00:00"
    },
    {
        "id": 4,
        "description": "Turn on in the morning",
        "action": "Lighting",
        "time": "14:00:00"
    },
    {
        "id": 5,
        "description": "Water tulip",
        "action": "Watering",
        "time": "14:00:00"
    },
];

function TaskTable() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='m-10 p-5 bg-white shadow-lg rounded-lg'>
            <div className='flex items-center'>
                <Typography className='text-[#9DDA9D] font-bold text-2xl mr-auto'>
                    Task
                </Typography>

                <button type="button" 
                  className="text-white bg-customGreen rounded-xl text-xl px-3 py-2 text-center me-2 mb-2 transition duration-300 ease-in-out hover:bg-green-600"
                  onClick={openModal}>
                    Add task
                </button>
            </div>
            <div className='border-b-2 border-black pb-[0.37rem] mb-4'>
                {tableOptions.map((item, index) => (
                    <span key={index} className={'mr-12 text-[#7D7D7D] font-medium text-sm ' + (activeIndex === index ? 'border-b-8 border-[#9DDA9D]' : '')}
                        onClick={() => setActiveIndex(index)}>
                        {item}
                    </span>
                ))}
            </div>
            <div className="relative overflow-x-auto shadow-lg">
                <table className="w-full text-sm text-left rtl:text-right text-[#6B6B6B] border-black border">
                    <thead className="font-medium text-[#6B6B6B] bg-[#D1CFCF]">
                        <tr>
                            <th scope="col" className="px-6 py-3 border-r border-black">
                                Task
                            </th>
                            <th scope="col" className="px-6 py-3 border-r border-black">
                                Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {activeIndex == 0 && scheduled_task.map(item => (
                            <tr key={item.id} className="bg-[#EEEEEE] text-black font-medium border-t border-black">
                                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                    {item.description}
                                </td>
                                <td className="px-6 py-4">
                                    {item.time}
                                </td>
                                <td className="px-6 py-4">
                                    {item.action}
                                </td>
                                <td>
                                    <img src={Icon} alt="icon" />
                                </td>
                            </tr>
                        ))}
                        {activeIndex == 1 && scheduled_task.filter(item => item.action === "Watering").map(item => (
                            <tr key={item.id} className="bg-[#EEEEEE] text-black font-medium border-t border-black">
                                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                    {item.description}
                                </td>
                                <td className="px-6 py-4">
                                    {item.time}
                                </td>
                                <td className="px-6 py-4">
                                    {item.action}
                                </td>
                                <td>
                                    <img src={Icon} alt="icon" />
                                </td>
                            </tr>
                        ))}
                        {activeIndex == 2 && scheduled_task.filter(item => item.action === "Lighting").map(item => (
                            <tr key={item.id} className="bg-[#EEEEEE] text-black font-medium border-t border-black">
                                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                    {item.description}
                                </td>
                                <td className="px-6 py-4">
                                    {item.time}
                                </td>
                                <td className="px-6 py-4">
                                    {item.action}
                                </td>
                                <td>
                                    <img src={Icon} alt="icon" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AddTask isOpen={isModalOpen} onClose={closeModal} />
        </div>
        
    );
}

export default TaskTable;

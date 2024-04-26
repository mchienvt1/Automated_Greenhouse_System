import React, { useState } from 'react';
import axios from 'axios';
import LightBulb from '../assets/icons/light_bulb.png';
import WaterPump from '../assets/icons/WaterPump.png';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const lightList = [{
    id: 1,
    name: "Light 1",
    icon: LightBulb,
    status: "off"
},
{
    id: 2,
    name: "Light 2",
    icon: LightBulb,
    status: "off"
},
{
    id: 3,
    name: "Light 3",
    icon: LightBulb,
    status: "off"
},
{
    id: 4,
    name: "Light 4",
    icon: LightBulb,
    status: "off"
},
{
    id: 5,
    name: "Light 5",
    icon: LightBulb,
    status: "off"
},
{
    id: 6,
    name: "Light 6",
    icon: LightBulb,
    status: "off"
},
{
    id: 7,
    name: "Light 7",
    icon: LightBulb,
    status: "off"
},
{
    id: 8,
    name: "Light 8",
    icon: LightBulb,
    status: "off"
},

];

const waterPumpList = [{
    id: 1,
    name: "Water pump 1",
    icon: WaterPump,
    status: "off"
},
{
    id: 2,
    name: "Water pump 2",
    icon: WaterPump,
    status: "off"
},
{
    id: 3,
    name: "Water pump 3",
    icon: WaterPump,
    status: "off"
},
{
    id: 4,
    name: "Water pump 4",
    icon: WaterPump,
    status: "off"
},
{
    id: 5,
    name: "Water pump 5",
    icon: WaterPump,
    status: "off"
},
{
    id: 6,
    name: "Water pump 6",
    icon: WaterPump,
    status: "off"
},

];

export default function AddTask({ isOpen, onClose }) {
    const [selected, setSelected] = useState(0);
    const [deviceSelected, setDeviceSelected] = useState(0);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    if (!isOpen) return null;

    const handleBackgroundClick = (event) => {
        if (event.target.classList.contains('modal-background')) {
            onClose();
        }
    };

    return (
        <div
            className="modal-background fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleBackgroundClick}>
            <div className='mx-[12rem] w-[40rem] my-16 p-8 px-15 bg-white border border-black rounded-lg overflow-y-auto max-h-[95vh] relative scrollbar-hide'>
                
                <div className='fixed'>
                    <button className="absolute top-[-30px] right-[-600px] mt-4 mr-4" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                
                <div className='px-[9rem] flex'>
                    <div className={'border-2 border-[#8F8F8F] rounded-lg mr-auto py-1 w-[120px] font-semibold flex items-center justify-center transition-colors duration-150 ease-in-out hover: text-gray-700 hover:border-gray-700 ' + (selected == 0 ? "bg-customGreen text-white" : "text-[#8F8F8F]")}
                        onClick={() => 
                        {
                            setSelected(0)
                            toggleTab(1)
                        }
                        }>
                        <button>Light</button>
                    </div>
                    <div className={'border-2 border-[#8F8F8F] rounded-lg py-1 w-[120px] font-semibold flex items-center justify-center transition-colors duration-150 ease-in-out text-gray-700 hover:border-gray-700 ' + (selected == 1 ? "bg-customGreen text-white" : "text-[#8F8F8F]") }
                        onClick={() => {
                            setSelected(1)
                            toggleTab(2)
                        }}>
                        <button>Water Pump</button>
                    </div>
                </div>


                <p className='text-[#8F8F8F] font-semibold my-2 text-xl mb-3'>
                    Devices
                </p>

                <div className={(toggleState === 1 ? '' : 'hidden') }>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={4}
                        pagination={{ clickable: true}}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {lightList.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                onClick={() => setDeviceSelected(index)}
                                className={'device-item border-2 rounded-lg mr-4 p-2 mb-10 ' + (deviceSelected === index ? "border-[#00C443]" : "border-black")}
                            >
                                <img src={item.icon} alt="icon" className="w-auto h-[110px] mx-auto mb-2" />
                                <span className="block text-center">{item.name}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p className='text-[#8F8F8F] font-semibold my-2 text-xl'>
                        Schedule
                    </p>

                    <div className='flex justify-between px-20'>
                        <div>
                            <p className='text-[#8F8F8F] font-semibold my-2 text-[16px]'>From</p>
                            <input type="time" className='border-2 border-gray-500 rounded-lg'/>
                        </div>

                        <div>
                            <p className='text-[#8F8F8F] font-semibold my-2 text-[16px]' >To</p>
                            <input type="time" className='border-2 border-gray-500 rounded-lg' />
                        </div> 
                    </div>
                </div>

                <div className={(toggleState === 2 ? '' : 'hidden') }>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={4}
                        pagination={{ clickable: true}}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {waterPumpList.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                onClick={() => setDeviceSelected(index)}
                                className={'device-item border-2 rounded-lg mr-4 p-2 mb-10 ' + (deviceSelected === index ? "border-[#00C443]" : "border-black")}
                            >
                                <img src={item.icon} alt="icon" className="w-auto h-[110px] mx-auto mb-2" />
                                <span className="block text-center">{item.name}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p className='text-[#8F8F8F] font-semibold my-2 text-xl'>
                        Schedule
                    </p>

                    <div className='flex justify-between px-20'>
                        <div>
                            <p className='text-[#8F8F8F] font-semibold my-2 text-[16px]'>From</p>
                            <input type="time" className='border-2 border-gray-500 rounded-lg'/>
                        </div>

                        <div>
                            <p className='text-[#8F8F8F] font-semibold my-2 text-[16px]' >To</p>
                            <input type="time" className='border-2 border-gray-500 rounded-lg' />
                        </div> 
                    </div>
                </div>

                

                <div className='justify-center flex my-6'>
                    <button type="button" className="text-white bg-customGreen rounded-xl text-xl px-10 py-2 text-center me-2 mb-2 transition duration-300 ease-in-out hover:bg-green-600">
                        Add
                    </button>
                </div>
            </div>
        </div>


    );
}

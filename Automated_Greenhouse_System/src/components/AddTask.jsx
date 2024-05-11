import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LightBulb from '../assets/icons/light_bulb.png';
import WaterPump from '../assets/icons/WaterPump.png';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';
import { useGlobalContext } from './context';
import { get_array } from "./DeviceManagement/DeviceData";


export default function AddTask({ isOpen, onClose }) {
    const {lightBtn,pumperBtn} = useGlobalContext()
    
    const devices= [
        { 
            id: "2001",
            name: "Water Pump 1",
            location: "Garden 1",
            img: WaterPump,
            type: "Water Pump",
            feed_id: 'pumper',
            value: pumperBtn === '1'? true:false
        },
        { 
            id: "1001",
            name: "Light 1",
            location: "Garden 1",
            img: LightBulb,
            type: "Light",
            feed_id: 'led',
            value: lightBtn === '1'? true:false
        },
    ]

    const [deviceData, setDeviceData] = useState([]);
    const [lightDevices, setLightDevices] = useState([]);
    const [waterPumpDevices, setWaterPumpDevices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = get_array();
            setDeviceData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Lọc các thiết bị loại "light"
        const lightDevicesFiltered = devices.filter(device => device.feed_id === "led");
        const additionalLightDevices = deviceData.filter(device => device.type === "Light"); 
        setLightDevices([...lightDevicesFiltered, ...additionalLightDevices]);

        // Lọc các thiết bị loại "water pump"
        const waterPumpDevicesFiltered = devices.filter(device => device.feed_id === "pumper");
        const additionalWaterPumpDevices = deviceData.filter(device => device.type === "Water Pump"); 
        setWaterPumpDevices([...waterPumpDevicesFiltered, ...additionalWaterPumpDevices]);
    }, [deviceData]);

    const [device, setDevice] = useState(lightDevices[0]);
    const [taskName, setTaskName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    
    const handleAddTask = (device, startTime, endTime, taskName) => {
        const data = {
            weekdays: [1, 2, 3, 4, 5, 6, 7, 8],
            timeStart: startTime,
            timeEnd: endTime,
            action: device.type === 'Light' ? 'lighting' : 'pumping',
            name: taskName
        };
          
        axios.post('/api/task/add', data)
    }

    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (selected === 0) {
            setDevice(lightDevices[0]);
        } else if (selected === 1) {
            setDevice(waterPumpDevices[0]);
        }
    }, [selected, lightDevices, waterPumpDevices]);
    
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
                        {lightDevices.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                onClick={() => setDeviceSelected(index)}
                                className={'device-item border-2 rounded-lg mr-4 p-2 mb-10 ' + (deviceSelected === index ? "border-[#00C443]" : "border-black")}
                            >
                                <img src={item.img} alt="icon" className="w-auto h-[110px] mx-auto mb-2" />
                                <span className="block text-center">{item.name}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p className='text-[#8F8F8F] font-semibold my-2 text-xl'>
                        Schedule
                    </p>
                    
                    <div className='px-20'>
                        <p className='text-[#8F8F8F] font-semibold my-2 text-[16px]'>Name</p>
                        <input type="text" className='border-2 border-gray-500 rounded-lg w-full px-2'/>
                    </div>

                    <div className='flex justify-between px-20'>
                        <div>
                            <p className='text-[#8F8F8F] font-semibold my-2 text-[16px]'>From</p>
                            <input type="time" className='border-2 border-gray-500 rounded-lg'/>
                        </div>

                        <div className='flex justify-center items-center pt-10'>
                            <FontAwesomeIcon icon={faArrowRightLong} style={{ width: '25px', height: 'auto' }}/>
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
                        {waterPumpDevices.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                onClick={() => setDeviceSelected(index)}
                                className={'device-item border-2 rounded-lg mr-4 p-2 mb-10 ' + (deviceSelected === index ? "border-[#00C443]" : "border-black")}
                            >
                                <img src={item.img} alt="icon" className="w-auto h-[110px] mx-auto mb-2" />
                                <span className="block text-center">{item.name}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p className='text-[#8F8F8F] font-semibold my-2 text-xl'>
                        Schedule
                    </p>

                    <div className='px-20'>
                        <p className='text-[#8F8F8F] font-semibold my-2 text-[16px]'>Name</p>
                        <input type="text" className='border-2 border-gray-500 rounded-lg w-full px-2' value={taskName} onChange={e => setTaskName(e.target.value)}/>
                    </div>

                    <div className='flex justify-between px-20'>

                        <div>
                            <p className='text-[#8F8F8F] font-semibold my-2 text-[16px]'>From</p>
                            <input type="time" className='border-2 border-gray-500 rounded-lg' value={startTime} onChange={e => setStartTime(e.target.value)}/>
                        </div>

                        <div className='flex justify-center items-center pt-10'>
                            <FontAwesomeIcon icon={faArrowRightLong} style={{ width: '25px', height: 'auto' }}/>
                        </div>

                        <div>
                            <p className='text-[#8F8F8F] font-semibold my-2 text-[16px]' >To</p>
                            <input type="time" className='border-2 border-gray-500 rounded-lg' value={endTime} onChange={e => setEndTime(e.target.value)}/>
                        </div> 
                    </div>
                </div>

                

                <div className='justify-center flex mt-8'>
                    <button type="button" className="text-white bg-customGreen rounded-xl text-xl px-10 py-2 text-center me-2 mb-2 transition duration-300 ease-in-out hover:bg-green-600"
                    onClick={() => handleAddTask(device, startTime, endTime, taskName) }>
                        Add
                    </button>
                </div>
            </div>
        </div>


    );
}

import React from "react";
import { useState, useEffect } from "react";

import DetailedCard from "./DetailedCard";
import InforIcon from '../../assets/icons/InforIcon.png';
import { get_array } from "./DeviceData";

import DeviceSwitch from "./DeviceSwitch";
import { useGlobalContext } from "../context/index";
import LightBulb from '../../assets/icons/light_bulb.png';
import WaterPump from '../../assets/icons/WaterPump.png';
import ControlSwitch from "../ManualControl/ControlSwitch";

export default function DeviceCard() {

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // setSelectedItem(null)
    };

    return (

        <div>
            <div className="p-5">
                <h1 className="text-2xl font-semibold mb-4 text-customGreen">Light</h1>
                
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {lightDevices.map((item, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-md bg-white relative">
                            <button 
                                className="absolute top-2 right-2 w-5 h-5 bg-cover bg-no-repeat"
                                style={{ 
                                    backgroundImage: `url(${InforIcon})`, 
                                }}
                                onClick={() => openModal(item)}                       
                            ></button>

                            <img src={item.img} alt="device_img" className="w-24 mx-auto mb-4" />
                            <p className="mb-2 flex justify-center font-semibold text-lg">{item.name}</p>
                            <div className="flex justify-center mt-4">
                                <DeviceSwitch key = {index} device= {item}/>
                                {/* <ControlSwitch key={index} type={index} device={item} /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-5">
                <h1 className="text-2xl font-semibold mb-4 text-customGreen">Water Pump</h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {waterPumpDevices.map((item, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-md bg-white relative">
                            <button 
                                className="absolute top-2 right-2 w-5 h-5 bg-cover bg-no-repeat"
                                style={{ 
                                    backgroundImage: `url(${InforIcon})`, 
                                }}
                                onClick={() => openModal(item)}                       
                            ></button>

                            <img src={item.img} alt="device_img" className="w-24 mx-auto mb-4" />
                            <p className="mb-2 flex justify-center font-semibold text-lg">{item.name}</p>
                            <div className="flex justify-center mt-4">
                                <DeviceSwitch key = {index} device={item}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DetailedCard device={selectedItem} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

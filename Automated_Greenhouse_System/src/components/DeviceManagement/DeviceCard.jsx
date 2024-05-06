import React from "react";
import { useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import { onChangeItem } from "./DeviceData";
import DetailedCard from "./DetailedCard";
import InforIcon from '../../assets/icons/InforIcon.png';
import { get_array } from "./DeviceData";

export default function DeviceCard() {

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
        const lightDevicesFiltered = deviceData.filter(device => device.type === "Light");
        setLightDevices(lightDevicesFiltered);

        // Lọc các thiết bị loại "water pump"
        const waterPumpDevicesFiltered = deviceData.filter(device => device.type === "Water Pump");
        setWaterPumpDevices(waterPumpDevicesFiltered);
    }, [deviceData]);

    const [triggerRender, setTriggerRender] = useState(false);

    useEffect(() => {}, [triggerRender]);

    const handleChange = (item) => {
        onChangeItem(item);
        setTriggerRender((prev) => !prev);
    };

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
                                <ReactSwitch
                                    checked={item.status}
                                    onChange={() => handleChange(item)}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                    className="switch_button"
                                />
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
                                <ReactSwitch
                                    checked={item.status}
                                    onChange={() => handleChange(item)}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                    className="switch_button"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DetailedCard device={selectedItem} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

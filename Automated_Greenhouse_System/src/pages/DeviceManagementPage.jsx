import React from "react";
import { useState, useEffect } from "react";
import DeviceCard from "../components/DeviceManagement/DeviceCard";
import { get_array } from "../components/DeviceManagement/DeviceData";
import AddDevice from "../components/AddDevice";

export default function DeviceManagementPage() {
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="m-5 p-2 bg-white shadow-lg rounded-lg relative">
            <div className="p-4 absolute top-0 right-0"> 
                <button type="button" 
                    className="text-white bg-customGreen rounded-xl text-xl px-3 py-2 text-center me-2 mb-2 transition duration-300 ease-in-out hover:bg-green-600"
                    onClick={openModal}>
                        Add Device
                </button>
            </div>
            
            <div className="p-5">
                <h1 className="text-2xl font-semibold mb-4 text-customGreen">Light</h1>
                
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {lightDevices.map((item, index) => (
                        <DeviceCard key={index} device={item} />
                    ))}
                </div>
            </div>
            <div className="p-5">
                <h1 className="text-2xl font-semibold mb-4 text-customGreen">Water Pump</h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {waterPumpDevices.map((item, index) => (
                        <DeviceCard key={index} device={item} />
                    ))}
                </div>
            </div>
            <AddDevice isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

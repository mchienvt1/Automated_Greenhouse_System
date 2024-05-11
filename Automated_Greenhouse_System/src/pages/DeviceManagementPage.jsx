import React from "react";
import { useState, useEffect } from "react";
import DeviceCard from "../components/DeviceManagement/DeviceCard";

import AddDevice from "../components/AddDevice";

export default function DeviceManagementPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetaiedCardOpen, setIsDetaiedCardOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openDetailedCard = () => {
        setIsDetaiedCardOpen(true);
    };

    const closeDetailedCard = () => {
        setIsDetaiedCardOpen(true);
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
            <DeviceCard />
            <AddDevice isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

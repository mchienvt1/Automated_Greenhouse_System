import React, { useState } from "react";

export default function UpdateDeviceForm({ device, onUpdate, onClose }) {
    const [editedDevice, setEditedDevice] = useState(device);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedDevice({ ...editedDevice, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(editedDevice);
        onClose();
    };

    return (
        <div className="modal-background fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="border rounded-lg p-4 shadow-md bg-white w-[300px] text-center relative">
                <div className="fixed">
                    <button className="absolute top-[-20px] right-[-290px] mt-4 mr-4" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {device && (
                    <>
                        <img src={device.img} alt="device_img" className="w-24 mx-auto mb-4" />
                        <p className="text-lg font-semibold mb-2">ID: {device.id}</p>
                        <input
                            type="text"
                            name="name"
                            value={editedDevice.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mb-2"
                        />
                        <input
                            type="text"
                            name="location"
                            value={editedDevice.location}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mb-2"
                        />
                        <input
                            type="text"
                            name="type"
                            value={editedDevice.type}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mb-2"
                        />
                        <button
                            className="px-4 py-2 mt-3 mb-2 rounded-lg text-white font-semibold bg-red-400 hover:bg-red-500"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

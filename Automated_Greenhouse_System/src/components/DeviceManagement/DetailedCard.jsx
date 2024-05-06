import React from "react";
import { useState, useEffect } from "react";

export default function DetailedCard({ device, isOpen, onClose }) {

    if (!isOpen) return null; 

    const handleBackgroundClick = (event) => {
        if (event.target.classList.contains('modal-background')) {
            onClose();
        }
    };

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="modal-background fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={handleBackgroundClick}>
            <div className="border rounded-lg p-4 shadow-md bg-white w-[300px] relative">
                <div className='fixed'>
                    <button className="absolute top-[-20px] right-[-290px] mt-4 mr-4" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className={(toggleState === 1 ? '' : 'hidden') + " px-[60px]"}>
                    <img src={device.img} alt="device_img" className="w-24 mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">ID: {device.id}</p>
                    <p className="mb-2"><span className="font-semibold">Name:</span> {device.name}</p>
                    <p className="mb-2"><span className="font-semibold">Location:</span> {device.location}</p>
                    <p className="mb-2"><span className="font-semibold">Type:</span> {device.type}</p>
                    
                    <div className="flex gap-x-3 justify-center px-8">
                        <button
                            className="px-4 py-2 mt-3 mb-2 rounded-lg text-white font-semibold bg-customGreen hover:bg-green-500 flex-grow"
                            onClick={() => 
                                {
                                    toggleTab(2)
                                }}
                        >Update</button>

                        <button
                            className="px-4 py-2 mt-3 mb-2 rounded-lg text-white font-semibold bg-red-400 hover:bg-red-500 flex-grow"
                            onClick={() => 
                                {
                                    toggleTab(3)
                                }}
                        >Delete</button>

                    </div>
                </div>

                <div className={(toggleState === 2 ? '' : 'hidden') }>
                    {/* Input Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-semibold">Name:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder={device.name}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Select Type */}
                    <div className="mb-4">
                        <label htmlFor="type" className="block mb-2 font-semibold">Type:</label>
                        <select
                            id="type"
                            className="w-full p-2 border rounded"
                        >
                            <option value="light">Light</option>
                            <option value="water-pump">Water pump</option>
                        </select>
                    </div>

                    {/* Input File */}
                    <div className="mb-4">
                        <label htmlFor="image" className="block mb-2 font-semibold">Image:</label>
                        <input
                            type="file"
                            id="image"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Input Location */}
                    <div className="mb-4">
                        <label htmlFor="location" className="block mb-2 font-semibold">Location:</label>
                        <input
                            type="text"
                            id="location"
                            placeholder={device.location}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="flex gap-x-3 justify-center px-8">
                        <button
                            className="px-4 py-2 mt-3 mb-2 rounded-lg text-white font-semibold bg-gray-400 hover:bg-gray-500 flex-grow"
                            onClick={() => 
                                {
                                    toggleTab(1)
                                }}
                        >Cancel</button>

                        <button
                            className="px-4 py-2 mt-3 mb-2 rounded-lg text-white font-semibold bg-customGreen hover:bg-green-500 flex-grow"
                        >Update</button>
                    </div>
                </div>
                
                <div className={(toggleState === 3 ? '' : 'hidden')}>
                    <div className="pt-4 px-4 w-auto">
                        <h1>Are you sure you want to delete this item?</h1>
                        <div className="flex gap-x-3 justify-center px-8 mt-3">
                            <button
                                className="px-4 py-2 mt-3 mb-2 rounded-lg text-white font-semibold bg-gray-400 hover:bg-gray-500 flex-grow"
                                onClick={() => 
                                    {
                                        toggleTab(1)
                                    }}
                            >Cancel</button>

                            <button
                                className="px-4 py-2 mt-3 mb-2 rounded-lg text-white font-semibold bg-red-500 hover:bg-red-600 flex-grow"
                            >Delete</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

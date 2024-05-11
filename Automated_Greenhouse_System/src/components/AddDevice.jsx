/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function AddDeviceModal ({ isOpen, onClose }) {
    if (!isOpen) return null; 

    // Xử lý sự kiện khi người dùng nhấp vào vùng ngoài của modal
    const handleBackgroundClick = (event) => {
        if (event.target.classList.contains('modal-background')) {
            onClose();
        }
    };


    return (
        <div
            className="modal-background fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleBackgroundClick}
        >
            <div className="modal-content bg-white p-6 rounded-lg w-[430px] relative">
                <div className='fixed'>
                    <button className="absolute top-[-30px] right-[-410px] mt-4 mr-4" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-customGreen text-center">Add device</h2>
                
                {/* Input Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-semibold">Name:</label>
                    <input
                        type="text"
                        id="name"
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
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        className="px-4 py-2 bg-customGreen text-white rounded w-[120px] hover:bg-green-600"
                        
                    >
                        Add device
                    </button>
                </div>
            </div>
        </div>
    );
}
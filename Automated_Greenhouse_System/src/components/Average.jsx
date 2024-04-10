import React, { useState, useEffect } from 'react';

const Average = () => {

    return (
        <div className="bg-white rounded-lg mx-5 my-2 w-[315px]">
            <div className="flex justify-between mt-6 mx-3 gap-x-3">
                <button autoFocus className="flex-1 bg-[#ABE4AB] py-2 rounded-lg text-white font-semibold focus:outline-none focus:bg-customGreen focus:text-white">Day</button>
                <button className="flex-1 bg-[#ABE4AB] py-2 rounded-lg text-white font-semibold  focus:outline-none focus:bg-customGreen focus:text-white">Week</button>
                <button className="flex-1 bg-[#ABE4AB] py-2 rounded-lg text-white font-semibold  focus:outline-none focus:bg-customGreen focus:text-white">Month</button>
            </div>

            <div className="mt-8">
                <h1 className='font-bold text-[20px] ml-5 mb-4'>Average</h1>
                <div className="flex flex-col mx-8 gap-y-3">
                    <div className='flex justify-between items-center'>
                        <div className="flex flex-row items-center">
                            <span className='text-[30px]'>💧</span>
                            <span className='font-semibold'>Hudminity</span>
                        </div>
                        <span className='font-semibold text-[#00C2FF]'> %</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className="flex flex-row items-center">
                            <span className='text-[30px]'>🌡️</span>
                            <span className='font-semibold'>Temperature</span>
                        </div>
                        <span className='font-semibold text-[#FF2E00]'> ℃</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className="flex flex-row items-center">
                            <span className='text-[30px]'>☀️</span> 
                            <span className='font-semibold'>Light</span>
                        </div>
                        <span className='font-semibold text-customGreen'> Lux</span>
                    </div>
                    
                    <div className='flex justify-between items-center'>
                        <div className="flex flex-row items-center">
                            <span className='text-[30px]'>🌱</span> 
                            <span className='font-semibold'>Soil</span>
                        </div>
                        <span className='font-semibold text-customBrown'> % </span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Average;

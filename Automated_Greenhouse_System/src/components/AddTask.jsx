import React, { useState } from 'react'
import axios from 'axios'
import LightBulb from '../assets/icons/light_bulb.png'

const deviceList = [{
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
]
export default function AddTask() {
    const [selected, setSelected] = useState(0);
    const [deviceSelected, setDeviceSelected] = useState(0);
    return (
        <div className='mx-[12rem] w-[46rem] my-16 p-8 bg-white border border-black rounded-lg'>
            <div className='px-[9rem] flex'>
                <div className={'border-2 border-[#8F8F8F] rounded-lg mr-auto px-14 py-1 font-semibold ' + (selected == 0 ? "bg-[#9DDA9D] text-white" : "text-[#8F8F8F]")}
                onClick={() => setSelected(0)}>
                    <span>Light</span>
                </div>
                <div className={'border-2 border-[#8F8F8F] rounded-lg px-14 py-1 font-semibold ' + (selected == 1 ? "bg-[#9DDA9D] text-white" : "text-[#8F8F8F]") }
                onClick={() => setSelected(1)}>
                    <span>Water Pump</span>
                </div>
            </div>
            <p className='text-[#8F8F8F] font-semibold my-2 text-xl'>
                Devices
            </p>
            <div className='flex space-x-8 justify-center'>
            {deviceList.map((item, index) => <div key={index}
            onClick={() => setDeviceSelected(index)} className={'border-2 rounded-lg ' + (deviceSelected === index ? "border-[#00C443]":"border-black")}
            >
                    <img src={item.icon} alt="icon" />
                    <span className=''>{item.name}</span>
                </div>
            )}
            </div>
            <div className='justify-center flex my-6'>
                <button type="button" class="text-white bg-gradient-to-r from-[#9DDA9D] via-[#9DDA9D] to-[#9DDA9D] hover:bg-gradient-to-br rounded-xl text-2xl px-3 py-1 text-center me-2 mb-2">
                    Add
                </button>
            </div>
        </div>
    )
};
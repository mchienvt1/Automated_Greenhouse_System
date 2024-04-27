import React from "react";
import { useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import { onChangeItem } from "./DeviceData";

export default function DeviceCard({ device }) {
    const [triggerRender, setTriggerRender] = useState(false);


    useEffect(() => {}, [triggerRender]);

    const handleChange = () => {
        onChangeItem(device);
        setTriggerRender((prev) => !prev);
    };

    return (

        <div className="border rounded-lg p-4 shadow-md bg-white">
            <img src={device.img} alt="device_img" className="w-24 mx-auto mb-4" />
            <p className="text-lg font-semibold mb-2">ID: {device.id}</p>
            <p className="mb-2"><span className="font-semibold">Name:</span> {device.name}</p>
            <p className="mb-2"><span className="font-semibold">Location:</span> {device.location}</p>
            <p className="mb-2"><span className="font-semibold">Type:</span> {device.type}</p>
            <div className="flex justify-center mt-4">
                <ReactSwitch
                    checked={device.status}
                    onChange={handleChange}
                    uncheckedIcon={false}
                    checkedIcon={false}
                />
            </div>
        </div>
        
    );
}

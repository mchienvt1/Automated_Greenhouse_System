import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import { publish } from '.././utils/adafruit';

const DeviceSwitch = (props) => {
    const { device, type } = props;
    const [checked, setChecked] = useState(() => {
        const savedState = localStorage.getItem(device.feed_id);
        return savedState !== null ? JSON.parse(savedState) : device.value;
    });

    const handleChange = () => {
        setChecked(prevState => {
            const newState = !prevState;
            publish(device.feed_id, newState ? '1' : '0');
            localStorage.setItem(device.feed_id, JSON.stringify(newState));
            return newState;
        });
    }

    return (
        <ReactSwitch 
            checked={checked}
            onChange={handleChange}
            uncheckedIcon={false}
            checkedIcon={false}
        />
    );
}

export default DeviceSwitch;

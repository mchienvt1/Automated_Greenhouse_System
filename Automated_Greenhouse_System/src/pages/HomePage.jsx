import * as React from 'react';
import { useState, useEffect } from 'react';
import ChartComponent from '../components/Chart';
import EnvironmentalCards from '../components/CurrentStatus';
import { useGlobalContext } from '../components/context';
import client from '../components/utils/adafruit';
const HomePage = () => {
    useEffect(() => {
        document.title = 'Home'
    });
    const { setTemperature, setLightIntensity, setHumidity, setLightBtn, setPumperBtn, setSoilHumidity } = useGlobalContext()
    client.on('message', (topic, message, packet) => {
        console.log("Received '" + message + "' on '" + topic + "'");
        switch (topic.split("/")[2]) {
            case 'humidity':
                setHumidity((message.toString()));
                break;
            case 'temperature':
                setTemperature((message.toString()));
                break;
            case 'soil-humidity':
                setSoilHumidity((message.toString()));
                break;
            case 'light':
                setLightIntensity((message.toString()));
                break;
            case 'pumper':
                setPumperBtn((message.toString()));
                break;
            case 'led':
                setLightBtn((message.toString()));
                break;
            default:
                break;
        }
    });
    return (
        <>
        <EnvironmentalCards />
        <ChartComponent/>
        </>
    )
}
export default HomePage;
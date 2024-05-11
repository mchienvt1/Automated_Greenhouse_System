import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

const Average = () => {

    const { temperature, humidity, lightIntensity, soilHumidity } = useGlobalContext();
    const roundedTemperature = Math.round(temperature);
    const roundedHumidity = Math.round(humidity);
    const roundedLightIntensity = Math.round(lightIntensity);
    const roundedSoilHumidity = Math.round(soilHumidity);
    
    const [temperatureValues, setTemperatureValues] = useState([]);
    const [humidityValues, setHumidityValues] = useState([]);
    const [lightIntensityValues, setLightIntensityValues] = useState([]);
    const [soilHumidityValues, setSoilHumidityValues] = useState([]);

    useEffect(() => {
        setTemperatureValues(prevValues => [...prevValues, roundedTemperature]);
        setHumidityValues(prevValues => [...prevValues, roundedHumidity]);
        setLightIntensityValues(prevValues => [...prevValues, roundedLightIntensity]);
        setSoilHumidityValues(prevValues => [...prevValues, roundedSoilHumidity]);
    }, [roundedTemperature, roundedHumidity, roundedLightIntensity, roundedSoilHumidity]);

    const calculateAverage = (values) => {
        let startIndex = 0;
        while (startIndex < values.length && values[startIndex] === 0) {
            startIndex++;
        }
        const filteredValues = values.slice(startIndex);
    
        if (filteredValues.length === 0) return 0;
    
        const sum = filteredValues.reduce((a, b) => a + b, 0);
        return (sum / filteredValues.length).toFixed(1);
    };
    
    console.log("Temperature current: ", temperature);
    console.log("Temperature: ", temperatureValues);
    const averageTemperature = calculateAverage(temperatureValues);
    const averageHumidity = calculateAverage(humidityValues);
    const averageLightIntensity = calculateAverage(lightIntensityValues);
    const averageSoilHumidity = calculateAverage(soilHumidityValues);

    return (
        <div className="bg-white rounded-lg h-auto w-full p-3">
            <div className="flex justify-between mt-2 mx-3 gap-x-3">
                <button autoFocus className="flex-1 bg-[#ABE4AB] py-2 rounded-lg text-white font-semibold focus:outline-none focus:bg-customGreen focus:text-white">Day</button>
                <button className="flex-1 bg-[#ABE4AB] py-2 rounded-lg text-white font-semibold  focus:outline-none focus:bg-customGreen focus:text-white">Week</button>
                <button className="flex-1 bg-[#ABE4AB] py-2 rounded-lg text-white font-semibold  focus:outline-none focus:bg-customGreen focus:text-white">Month</button>
            </div>

            <div className="mt-8 mb-5">
                <h1 className='font-bold text-[20px] ml-5 mb-4'>Average</h1>
                <div className="flex flex-col mx-8 gap-y-3">
                    <div className='flex justify-between items-center'>
                        <div className="flex flex-row items-center">
                            <span className='text-[30px]'>💧</span>
                            <span className='font-semibold'>Hudminity</span>
                        </div>
                        <span className='font-semibold text-[#00C2FF]'>{averageHumidity} %</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className="flex flex-row items-center">
                            <span className='text-[30px]'>🌡️</span>
                            <span className='font-semibold'>Temperature</span>
                        </div>
                        <span className='font-semibold text-[#FF2E00]'>{averageTemperature} ℃</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className="flex flex-row items-center">
                            <span className='text-[30px]'>☀️</span> 
                            <span className='font-semibold'>Light</span>
                        </div>
                        <span className='font-semibold text-customGreen'>{averageLightIntensity} Lux</span>
                    </div>
                    
                    <div className='flex justify-between items-center'>
                        <div className="flex flex-row items-center">
                            <span className='text-[30px]'>🌱</span> 
                            <span className='font-semibold'>Soil</span>
                        </div>
                        <span className='font-semibold text-customBrown'>{averageSoilHumidity} % </span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Average;

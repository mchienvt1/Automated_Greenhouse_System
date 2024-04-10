import React from 'react';
import { useGlobalContext } from './context';

const Card = ({ label, value, icon }) => {
  let unit = ''; 
  let bgColorClass = '';
  if (label === 'Humidity') {
    unit = '%';
    bgColorClass = 'bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300';
  } else if (label === 'Temperature') {
    unit = "℃";
    bgColorClass = 'bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300';
  } else if (label === 'Light') {
    unit = "Lux"; 
    bgColorClass = 'bg-gradient-to-b from-green-500 via-green-400 to-green-300';
  } else if (label === 'Soil'){
    unit = '%';
    bgColorClass = 'bg-customBrown';

  }
  

  return (
    <div className={`flex items-center text-white ${bgColorClass} rounded-lg p-3`}>
      <div>
        <div className="flex font-bold items-center justify-center">{label}</div>
        <div className='flex flex-row items-center justify-center space-x-2 my-5 mx-5'>
          <div className='text-5xl flex items-center'>{value}</div>
          <div className="flex mb-7 text-2xl">{icon}</div>
        </div>
        <div className='flex justify-center font-bold'>{unit}</div>
      </div>
    </div>
  );
};

const EnvironmentalCards = () => {
  const {temperature,humidity,lightIntensity,soilHumidity} = useGlobalContext()
  const roundedTemperature = Math.round(temperature);
  const roundedHumidity = Math.round(humidity);
  const roundedLightIntensity = Math.round(lightIntensity);
  const roundedSoilHumidity = Math.round(soilHumidity);
  return (
    <div className='bg-white rounded-3xl max-w-3xl mx-3 my-5'>
      <div className='font-bold space-x-3 px-5 pt-5 text-xl'>
        <span className="text-gray-400" >Current </span>
      </div>

      <div className="flex flex-row items-center
      justify-center
      space-x-7 px-3 py-5">
        <Card label="Humidity" value={roundedHumidity} icon="💧" />
        <Card label="Temperature" value={roundedTemperature} icon="🌡️" />
        <Card label="Light" value={roundedLightIntensity} icon="☀️" />
        <Card label="Soil" value={roundedSoilHumidity} icon="🌱" />
      </div>
    </div>

  );
};

export default EnvironmentalCards;
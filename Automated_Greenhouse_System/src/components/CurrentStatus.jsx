import React from "react";
import { useGlobalContext } from "./context";

const Card = ({ label, value, icon }) => {
  let unit = "";
  let bgColorClass = "";
  if (label === "Humidity") {
    unit = "%";
    bgColorClass = "bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300";
  } else if (label === "Temperature") {
    unit = "℃";
    bgColorClass =
      "bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300";
  } else if (label === "Light") {
    unit = "Lux";
    bgColorClass = "bg-gradient-to-b from-green-500 via-green-400 to-green-300";
  } else if (label === "Soil") {
    unit = "%";
    bgColorClass = "bg-customBrown";
  }

  return (
    <div
      className={`flex items-center text-white ${bgColorClass} mt-7 rounded-lg p-[7px]`}
    >
      <div>
        <div className="flex items-center justify-center font-bold">
          {label}
        </div>
        <div className="mx-5 my-5 flex flex-row items-center justify-center space-x-2">
          <div className="flex items-center text-5xl">{value}</div>
          <div className="mb-7 flex text-2xl">{icon}</div>
        </div>
        <div className="flex justify-center font-bold">{unit}</div>
      </div>
    </div>
  );
};

const EnvironmentalCards = () => {
  const { temperature, humidity, lightIntensity, soilHumidity } =
    useGlobalContext();
  const roundedTemperature = Math.round(temperature);
  const roundedHumidity = Math.round(humidity);
  const roundedLightIntensity = Math.round(lightIntensity);
  const roundedSoilHumidity = Math.round(soilHumidity);
  return (
    <div className="h-full w-full rounded-lg bg-white">
      <div className="space-x-3 px-5 pt-5 text-xl font-bold">
        <span className="text-gray-400">Current </span>
      </div>

      <div className="grid grid-cols-1 space-x-2 px-5 py-5 md:grid-cols-2 lg:grid-cols-4">
        <Card label="Humidity" value={roundedHumidity} icon="💧" />
        <Card label="Temperature" value={roundedTemperature} icon="🌡️" />
        <Card label="Light" value={roundedLightIntensity} icon="☀️" />
        <Card label="Soil" value={roundedSoilHumidity} icon="🌱" />
      </div>
    </div>
  );
};

export default EnvironmentalCards;

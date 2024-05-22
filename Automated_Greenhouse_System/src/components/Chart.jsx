import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGlobalContext } from "./context";
const ChartComponent = () => {
  const { temperature, humidity, lightIntensity, soilHumidity } =
    useGlobalContext();
  const [selectedChart, setSelectedChart] = useState("temperature");
  const [temperatureData, setTemperatureData] = useState([]);
  const [lightIntensityData, setLightIntensityData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [soilhumidityData, setsoilHumidityData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cập nhật dữ liệu mỗi 3 giây
      setTemperatureData((prevData) => [
        ...prevData,
        { name: new Date().toLocaleTimeString(), value: temperature },
      ]);
      setLightIntensityData((prevData) => [
        ...prevData,
        { name: new Date().toLocaleTimeString(), value: lightIntensity },
      ]);
      setHumidityData((prevData) => [
        ...prevData,
        { name: new Date().toLocaleTimeString(), value: humidity },
      ]);
      setsoilHumidityData((prevData) => [
        ...prevData,
        { name: new Date().toLocaleTimeString(), value: soilHumidity },
      ]);
    }, 10000);

    // Xóa interval khi component unmount
    return () => clearInterval(interval);
  }, [temperature, humidity, lightIntensity, soilHumidity]); // Chạy lại khi các giá trị này thay đổi

  const handleChange = (event) => {
    setSelectedChart(event.target.value);
  };

  let selectedData = [];
  switch (selectedChart) {
    case "temperature":
      selectedData = temperatureData;
      break;
    case "lightIntensity":
      selectedData = lightIntensityData;
      break;
    case "humidity":
      selectedData = humidityData;
      break;
    case "soilhumidity":
      selectedData = soilhumidityData;
      break;
    default:
      selectedData = temperatureData;
  }

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-500">Statistics</div>
        <select onChange={handleChange} className="rounded border px-3 py-2">
          <option value="temperature">Temperature</option>
          <option value="lightIntensity">Light Intensity</option>
          <option value="humidity">Humidity</option>
          <option value="soilhumidity">Soil</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={selectedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;

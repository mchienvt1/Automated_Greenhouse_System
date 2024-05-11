import * as React from "react";
import { useEffect } from "react";
import client from "../components/utils/adafruit";

import EnvironmentalCards from "../components/CurrentStatus";
import { useGlobalContext } from "../components/context";
import ChartComponent from "../components/Chart";
import MyCalendar from "../components/Calendar";
import Average from "../components/Average";
import ManualControl from "../components/ManualControl";
const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  });

  const {
    setTemperature,
    setLightIntensity,
    setHumidity,
    setLightBtn,
    setPumperBtn,
    setSoilHumidity,
  } = useGlobalContext();
  client.on("message", (topic, message, packet) => {
    console.log("Received '" + message + "' on '" + topic + "'");
    switch (topic.split("/")[2]) {
      case "humidity":
        setHumidity(message.toString());
        break;
      case "temperature":
        setTemperature(message.toString());
        break;
      case "soil-humidity":
        setSoilHumidity(message.toString());
        break;
      case "light":
        setLightIntensity(message.toString());
        break;
      case "pumper":
        setPumperBtn(message.toString());
        break;
      case "led":
        setLightBtn(message.toString());
        break;
      default:
        break;
    }
  });

<<<<<<< HEAD
    return (
        <div className='flex flex-row'>
            <div className='w-5/5' style={{backgroundColor: '#e3e3e3', width: '100%'}}>
                {/* Main Components */}
                <div className="flex flex-cols-3">

                    <EnvironmentalCards />
                    <MyCalendar />
                    {/* <ManualControl /> */}

                </div>
                <div className="flex flex-cols-2">
                    <ChartComponent/>
                    <Average />
                </div>
            </div>
=======
  return (
    <>
      <div className="w-full p-5">
        <div className="grid grid-cols-1 gap-8 pb-5 md:grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            <EnvironmentalCards />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <MyCalendar />
          </div>
          <div className="col-span-12 lg:col-span-2">
            <ManualControl />
          </div>
          <div className="col-span-12 md:col-span-8">
            <ChartComponent />
          </div>
          <div className="col-span-12 md:col-span-4">
            <Average />
          </div>
>>>>>>> c754681ef5135e9a1c2e160f1b4c66bf5077e9a9
        </div>

        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <ChartComponent />
          </div>
          <div className="col-span-12 md:col-span-4">
            <Average />
          </div>
        </div> */}
      </div>
    </>
  );
};
export default HomePage;

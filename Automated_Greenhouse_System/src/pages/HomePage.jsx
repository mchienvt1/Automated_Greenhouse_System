import * as React from 'react';
import { useEffect } from 'react';
import client from '../components/utils/adafruit';

import EnvironmentalCards from '../components/CurrentStatus';
import { useGlobalContext } from '../components/context';
import ChartComponent from '../components/Chart';
import MyCalendar from '../components/Calendar';
import Average from '../components/Average';
import ManualControl from '../components/ManualControl';
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
        </div>
    )
}
export default HomePage;
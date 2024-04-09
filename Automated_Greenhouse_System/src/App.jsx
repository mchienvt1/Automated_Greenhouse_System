import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import client from './components/utils/adafruit';
import HomePage from './pages/HomePage'
import NoPage from './pages/NoPage'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard';
import EnvironmentalCards from './components/CurrentStatus';
import { useGlobalContext } from './components/context';
import ChartComponent from './components/Chart';
function App() {
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: '*',
      element: <NoPage />
    }
  ]
  )

  return (
    <div className='flex flex-row'>
      <div className='w-1/5' >
        <DashBoard />
      </div>
      <div className='w-4/5' style={{backgroundColor: '#e3e3e3'}}>
        {/*Navigation bar*/}
        <div style={{backgroundColor: 'white'}}>
          <NavBar />
        </div>

        
        {/* Main Components */}
        <EnvironmentalCards />
        <ChartComponent/>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App

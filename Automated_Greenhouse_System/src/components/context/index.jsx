import {useContext, createContext, useState,useEffect} from "react";
import axios from 'axios';
import {username,key } from '../utils/env'; 

async function getLastValue (feed_id){
    const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed_id}/data/last`;
    const options = {
        headers: {
          'X-AIO-Key': key
        }
      };
    let res = await axios.get(url, options);
    return res.data.value;
}

const AppContext = createContext();


const AppProvider = (props)=>{
    const [temperature, setTemperature] = useState(0);
    const [lightIntensity, setLightIntensity] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [soilHumidity, setSoilHumidity] = useState(0);
    const [lightBtn, setLightBtn] = useState(false);
    const [pumperBtn, setPumperBtn] = useState(false);

    useEffect(()=>{
       const defaultValue = async () => {
        setTemperature(await getLastValue('temperature'))
        setSoilHumidity(await getLastValue('soil-humidity'))
        setLightIntensity(await getLastValue('light'))
        setHumidity(await getLastValue('humidity'))
        setLightBtn(await getLastValue('led'))
        setPumperBtn(await getLastValue('pumper'))
       }
       defaultValue()
    },[])
    return <AppContext.Provider 
    value={{temperature,setTemperature,
        lightIntensity,setLightIntensity,humidity,
        setHumidity,lightBtn,setLightBtn,pumperBtn,setPumperBtn,soilHumidity, setSoilHumidity 
    }}
    >
        {props.children}
    </AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext  = () => {
    return useContext(AppContext);
}
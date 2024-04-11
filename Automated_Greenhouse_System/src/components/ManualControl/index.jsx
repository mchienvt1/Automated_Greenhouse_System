import { FormLabel, Typography, Stack, FormGroup } from '@mui/material'
import React from 'react';
import ControlSwitch from './ControlSwitch'
import { useGlobalContext } from '../context/index.jsx'
const ManualControl = () => {
    const {lightBtn,pumperBtn} = useGlobalContext()
    
    const devices= [
        { 
            feed_id: 'pumper',
            value: pumperBtn === '1'? true:false
        },        { 
            feed_id: 'led',
            value: lightBtn === '1'? true:false
        },
    ]
    return (
        <div className='
        bg-white rounded-lg max-w-lg px-4 my-5
        flex flex-col justify-evenly items-center mx-3'>
            <span className="font-bold text-gray-400 mb-2" >Manual Control </span>
            {devices.map((device, idx) => <ControlSwitch key={idx} type={idx} device={device} />)}
        </div>
    )
}

export default ManualControl
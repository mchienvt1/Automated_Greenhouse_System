import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from '../assets/icons/Logo.png'
import ChartFill from '../assets/icons/Chart_fill.png'
import DateRange from '../assets/icons/Date_range.png'
import FilterBigAlt from '../assets/icons/Filter_big_alt.png'
import SettingFill from '../assets/icons/Setting_fill.png'
import SignOutSquare from '../assets/icons/Sign_out_squre.png'
import RightArrow from '../assets/icons/right_arrow.png'

const navLinks = [
    {
        name: "Home",
        icon: ChartFill,
        ref: "/"
    },
    {
        name: "Scheduled Task",
        icon: DateRange,
        ref: "/scheduled_task"
    },
    {
        name: "Device Management",
        icon: FilterBigAlt,
        ref: "/device_management"
    },
    {
        name: "Settings",
        icon: SettingFill,
        ref: "/settings"
    },
    {
        name: "Sign Out",
        icon: SignOutSquare,
        ref: "/login"
    },
];

const variants = {
    expanded: { width: "20%"},
    nonExpanded: { width: "5%" },
};

const DashBoard = () => {
  const [activeBoard, setActiveBoard] = useState()  
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const storedSelectedOption = parseInt(sessionStorage.getItem('activeBoard') || '0')
    setActiveBoard(storedSelectedOption)
  }, [])

  return (
    <motion.div
     animate={isExpanded ? "expanded" : "nonExpanded"}
     variants={variants}
     className='flex flex-col py-6 h-screen border-r-2 relative w-1/5'>
        <div className='items-center flex flex-row px-3 text-[#36B260] font-bold text-lg'>
            <a href="/" className='flex space-x-3 items-center'>
            <img src={Logo} alt="logo" className=''/>
            <span className={isExpanded ? 'block' : 'hidden'}>Green House</span>
            </a>
        </div>
        <div className='w-5 h-5 bg-[#81D081] rounded-full absolute -right-[10.5px] top-8 items-center justify-center flex'
            onClick={() => setIsExpanded(!isExpanded)
            }>
            <img src={RightArrow} alt="arrow" className='w-2 h-2' />
        </div>
        <div className={'mt-10 flex flex-col space-y-6 ' + (isExpanded ? 'px-2' : '')}>
            {navLinks.map((item, index) => <a key = {index} href = {item.ref}
            className={"flex flex-row items-center space-x-2 h-10 rounded-lg px-4" + 
                (activeBoard === index ? " text-white font-semibold bg-[#81D081]" : " text-[#8F8F8F] font-semibold ")
            }
            onClick={() => {
                sessionStorage.setItem('activeBoard', index)
                setActiveBoard(index)
                }}>
                <img src={item.icon} alt="icon" className='w-6 h-6'/>
                <span className={isExpanded ? 'block' : 'hidden'}>{item.name}</span>
            </a>)}
        </div>
    </motion.div>
  )
}

export default DashBoard
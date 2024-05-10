import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/icons/Logo.png";
import ChartFill from "../assets/icons/Chart_fill.png";
import DateRange from "../assets/icons/Date_range.png";
import FilterBigAlt from "../assets/icons/Filter_big_alt.png";
import SettingFill from "../assets/icons/Setting_fill.png";
import SignOutSquare from "../assets/icons/Sign_out_squre.png";
import RightArrow from "../assets/icons/right_arrow.png";

const navLinks = [
  {
    name: "Home",
    icon: ChartFill,
    ref: "/",
  },
  {
    name: "Scheduled Task",
    icon: DateRange,
    ref: "/scheduled_task",
  },
  {
    name: "Device Management",
    icon: FilterBigAlt,
    ref: "/device_management",
  },
  {
    name: "Settings",
    icon: SettingFill,
    ref: "/settings",
  },
  {
    name: "Sign Out",
    icon: SignOutSquare,
    ref: "/login",
  },
];

const variants = {
  expanded: { width: "40%" },
  nonExpanded: { width: "10%" },
};

const DashBoard = ({ toggleSidebar, setToggleSidebar }) => {
  const [activeBoard, setActiveBoard] = useState();
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const storedSelectedOption = parseInt(
      sessionStorage.getItem("activeBoard") || "0",
    );
    setActiveBoard(storedSelectedOption);
  }, []);

  return (
    <>
      <motion.div
        animate={isExpanded ? "expanded" : "nonExpanded"}
        variants={variants}
        className="relative hidden  w-1/5 flex-col border-r-2 bg-white py-6 lg:flex"
      >
        <div className="flex flex-row items-center px-3 text-lg font-bold text-[#36B260]">
          <a href="/" className="flex items-center space-x-3">
            <img src={Logo} alt="logo" className="" />
            <span className={isExpanded ? "block" : "hidden"}>Green House</span>
          </a>
        </div>
        <div
          className="absolute -right-[10.5px] top-8 flex h-5 w-5 items-center justify-center rounded-full bg-[#81D081]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img src={RightArrow} alt="arrow" className="h-2 w-2" />
        </div>
        <div
          className={
            "mt-10 flex flex-col space-y-6 " + (isExpanded ? "px-2" : "")
          }
        >
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.ref}
              className={
                "flex h-10 flex-row items-center space-x-2 rounded-lg px-4" +
                (activeBoard === index
                  ? " bg-[#81D081] font-semibold text-white"
                  : " font-semibold text-[#8F8F8F] ")
              }
              onClick={() => {
                sessionStorage.setItem("activeBoard", index);
                setActiveBoard(index);
              }}
            >
              <img src={item.icon} alt="icon" className="h-6 w-6" />
              <span className={isExpanded ? "block" : "hidden"}>
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
      {/* Nav moblie */}
      <div
        className={`fixed z-50 h-screen w-screen flex-grow bg-white py-6 ${toggleSidebar ? "block" : "hidden"}`}
      >
        <div className="flex flex-row items-center px-3 text-lg font-bold text-[#36B260]">
          <a href="/" className="flex items-center space-x-3">
            <img src={Logo} alt="logo" className="" />
            <span className={isExpanded ? "block" : "hidden"}>Green House</span>
          </a>
        </div>
        <div
          className="absolute right-[12px] top-8 flex h-5 w-5 items-center justify-center rounded-full bg-[#81D081]"
          onClick={() => setToggleSidebar(false)}
        >
          <img src={RightArrow} alt="arrow" className="h-2 w-2" />
        </div>
        <div
          className={
            "mt-10 flex flex-col space-y-6 " + (isExpanded ? "px-2" : "")
          }
        >
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.ref}
              className={
                "flex h-10 flex-row items-center space-x-2 rounded-lg px-4" +
                (activeBoard === index
                  ? " bg-[#81D081] font-semibold text-white"
                  : " font-semibold text-[#8F8F8F] ")
              }
              onClick={() => {
                sessionStorage.setItem("activeBoard", index);
                setActiveBoard(index);
              }}
            >
              <img src={item.icon} alt="icon" className="h-6 w-6" />
              <span className={isExpanded ? "block" : "hidden"}>
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashBoard;

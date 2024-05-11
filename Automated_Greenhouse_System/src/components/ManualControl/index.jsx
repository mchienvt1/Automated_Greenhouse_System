import { FormLabel, Typography, Stack, FormGroup } from "@mui/material";
import React from "react";
import ControlSwitch from "./ControlSwitch";
import { useGlobalContext } from "../context/index.jsx";
const ManualControl = () => {
  const { lightBtn, pumperBtn } = useGlobalContext();

  const devices = [
    {
      feed_id: "pumper",
      value: pumperBtn === "1" ? true : false,
    },
    {
      feed_id: "led",
      value: lightBtn === "1" ? true : false,
    },
  ];
  return (
    <div className="h-full w-full space-y-5 rounded-lg bg-white px-4 pb-5 text-center">
      <span className="mb-2 font-bold text-gray-400">Manual Control </span>
      <div className="flex flex-row items-center justify-center gap-5 lg:flex-col">
        {devices.map((device, idx) => (
          <ControlSwitch
            className="mb-2"
            key={idx}
            type={idx}
            device={device}
          />
        ))}
      </div>
    </div>
  );
};

export default ManualControl;

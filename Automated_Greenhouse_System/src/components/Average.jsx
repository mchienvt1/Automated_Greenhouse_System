import React, { useState, useEffect } from "react";

const Average = () => {
  return (
    <div className="h-full w-full rounded-lg bg-white pt-5">
      <div className="mx-3 flex justify-between gap-x-3">
        <button
          autoFocus
          className="flex-1 rounded-lg bg-[#ABE4AB] py-2 font-semibold text-white focus:bg-customGreen focus:text-white focus:outline-none"
        >
          Day
        </button>
        <button className="flex-1 rounded-lg bg-[#ABE4AB] py-2 font-semibold text-white  focus:bg-customGreen focus:text-white focus:outline-none">
          Week
        </button>
        <button className="flex-1 rounded-lg bg-[#ABE4AB] py-2 font-semibold text-white  focus:bg-customGreen focus:text-white focus:outline-none">
          Month
        </button>
      </div>

      <div className="mt-8">
        <h1 className="mb-4 ml-5 text-[20px] font-bold">Average</h1>
        <div className="mx-8 flex flex-col gap-y-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
              <span className="text-[30px]">💧</span>
              <span className="font-semibold">Hudminity</span>
            </div>
            <span className="font-semibold text-[#00C2FF]"> %</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
              <span className="text-[30px]">🌡️</span>
              <span className="font-semibold">Temperature</span>
            </div>
            <span className="font-semibold text-[#FF2E00]"> ℃</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
              <span className="text-[30px]">☀️</span>
              <span className="font-semibold">Light</span>
            </div>
            <span className="font-semibold text-customGreen"> Lux</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
              <span className="text-[30px]">🌱</span>
              <span className="font-semibold">Soil</span>
            </div>
            <span className="font-semibold text-customBrown"> % </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Average;

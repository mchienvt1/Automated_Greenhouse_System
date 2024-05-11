import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="calendar-container h-full w-full rounded-lg bg-[#E3E3E3]">
      <div className="current-date mb-4 rounded-lg bg-white p-2 text-center font-bold text-gray-400">
        <h2>{formattedDate}</h2>
      </div>
      <div className="calendar rounded-lg bg-white p-4">
        <Calendar onChange={onChange} value={date} className="h-full w-full" />
      </div>
    </div>
  );
};

export default MyCalendar;

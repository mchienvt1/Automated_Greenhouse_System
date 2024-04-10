import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = newDate => {
        setDate(newDate);
    };

    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className="calendar-container bg-[#E3E3E3] p-5 rounded-lg w-[350px]">
            <div className="current-date bg-white font-bold p-2 rounded-lg mb-4 text-center">
                <h2>{formattedDate}</h2>
            </div>
            <div className="calendar bg-white p-4 rounded-lg">
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>
        </div>
    );
};

export default MyCalendar;

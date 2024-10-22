import React, { useState } from 'react';
import './TimePicker.css'

const TimePicker = () => {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  return (
    <div className="custom-time-picker">
      <div className="time-selectors">
        <select value={hour} onChange={handleHourChange} className="time-dropdown">
          {hours.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
        <select value={minute} onChange={handleMinuteChange} className="time-dropdown">
          {minutes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimePicker;

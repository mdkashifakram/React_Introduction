// components/MainSchedule.js
import React from 'react';
import '../App.css';

function MainSchedule() {
  return (
    <div className="main-schedule">
      <h3>Monday, September 9, 2024</h3>
      <div className="time-slots">
        {/* Render time slots from 10 AM to 11 PM */}
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className="time-slot">{`${10 + index}:00`}</div>
        ))}
      </div>
    </div>
  );
}

export default MainSchedule;

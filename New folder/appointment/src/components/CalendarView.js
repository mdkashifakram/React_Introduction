// components/CalendarView.js
import React from 'react';
import '../App.css';

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>September 2024</h3>
      <div className="days-of-week">
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
      </div>
      <div className="days">
        {/* Render the calendar days */}
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className="day">{index + 1}</div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;

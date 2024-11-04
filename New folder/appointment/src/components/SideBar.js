// components/Sidebar.js
import React from 'react';
import '../App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="create-btn">Create</button>
      <div className="calendar">
        <h3>My Calendars</h3>
        <div>
          <input type="checkbox" id="calendar1" name="calendar1" />
          <label htmlFor="calendar1">Kashif Akram</label>
        </div>
        <div>
          <input type="checkbox" id="tasks" name="tasks" />
          <label htmlFor="tasks">Tasks</label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

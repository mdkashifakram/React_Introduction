// App.js
import React from 'react';
import Sidebar from './components/SideBar';
import CalendarView from './components/CalendarView';
import MainSchedule from './components/MainSchedule';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="calendar-layout">
        <CalendarView />
        <MainSchedule />
      </div>
    </div>
  );
}

export default App;

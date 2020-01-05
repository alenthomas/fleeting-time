import React, { useState }from 'react';
import { getRemainingDays, getRemainingHours, getRemainingDaysInWeek } from './utils';
import { DAYS } from './constants';
import dayjs from 'dayjs';

import './App.scss';


function YearProgress() {
  let [currentDate, changeDate] = useState(0);
  currentDate = getRemainingDays();
  setInterval(() => changeDate(getRemainingDays), DAYS);
  return (
    <div className='progress year-progress'>
      <div>Year Progress: {`${currentDate} %`}</div>
    </div>
  )
}

function DayProgress() {
  let [currentHour, changeHour] = useState(0);
  currentHour = getRemainingHours();
  setInterval(() => changeHour(getRemainingHours), 1000 * 30);
  return (
    <div className='progress day-progress'>
      <div>Day Progress: {`${currentHour} %`}</div>
    </div>
  )
}

function WeekProgress() {
  let [currentWeekHour, changeWeekHour] = useState(0);
  currentWeekHour = getRemainingDaysInWeek();
  setInterval(() => changeWeekHour(getRemainingDaysInWeek), 1000 * 60 * 60);
  return (
    <div className='progress week-progress'>
      <div>Current Week Progress: {`${currentWeekHour} %`}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h3>{dayjs().year()} so far</h3>
      <YearProgress />
      <WeekProgress />
      <DayProgress />
    </div>
  );
}

export default App;

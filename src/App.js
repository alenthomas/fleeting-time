import React from 'react';
import { getRemainingDays, getRemainingHours, getRemainingDaysInWeek } from './utils';
import dayjs from 'dayjs';

import './App.scss';


function YearProgress({progress}) {
  return (
    <div className='progress year-progress'>
      <div>Year Progress: {`${progress} %`}</div>
    </div>
  )
}

function DayProgress({progress}) {
  return (
    <div className='progress day-progress'>
      <div>Day Progress: {`${progress} %`}</div>
    </div>
  )
}

function WeekProgress({progress}) {
  return (
    <div className='progress week-progress'>
      <div>Current Week Progress: {`${progress} %`}</div>
    </div>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { yearProgress: getRemainingDays(), weekProgress: getRemainingDaysInWeek(), dayProgress: getRemainingHours() };
  }
  componentDidMount() {
    setInterval(this.refresh, 1000);
  }
  refresh = () => {
    let [yearProgress, weekProgress, dayProgress] = [getRemainingDays(), getRemainingDaysInWeek(), getRemainingHours()];
    this.setState({ yearProgress, weekProgress, dayProgress });
  }
  render() {
    return (
    <div className="App">
      <h3>{dayjs().year()} so far</h3>
      <YearProgress progress={this.state.yearProgress} />
      <WeekProgress progress={this.state.weekProgress} />
      <DayProgress progress={this.state.dayProgress} />
    </div>
  );
  }
}

export default App;

import React from 'react';
import { getRemainingDays, getRemainingHours, getRemainingDaysInWeek } from './utils';
import dayjs from 'dayjs';

import './App.scss';


function YearProgress({progress}) {
  return (
    <div className='block box'>
      <div className='content is-medium'>Year Progress: <strong>{`${progress}%`}</strong></div>
      <progress className="progress is-info" value={`${progress}`} max="100">{`${progress}%`}</progress>
    </div>
  )
}

function DayProgress({progress}) {
  return (
    <div className='block box'>
      <div className='content is-medium'>Day Progress: <strong>{`${progress}%`}</strong></div>
      <progress className="progress is-primary" value={`${progress}`} max="100">{`${progress}%`}</progress>

    </div>
  )
}

function WeekProgress({progress}) {
  return (
    <div className='block box'>
      <div className='content is-medium'>Current Week Progress: <strong>{`${progress}%`}</strong></div>
      <progress className="progress is-primary" value={`${progress}`} max="100">{`${progress}%`}</progress>
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
    <div className="container">
        <h3 className='title is-large'>{dayjs().year()} so far</h3>
        <div className='block'>
          <YearProgress progress={this.state.yearProgress} />
        </div>
      <WeekProgress progress={this.state.weekProgress} />
      <DayProgress progress={this.state.dayProgress} />
    </div>
  );
  }
}

export default App;

import React from 'react';
import {
  getRemainingDays,
  getRemainingHours,
  getRemainingDaysInWeek,
  getRemainingDaysInMonth
} from './utils';
import dayjs from 'dayjs';

import './App.scss';

function Progress({progress=0, name='year', className=''}) {
  return (
    <div className={`block box ${className}`}>
      <div className='content is-medium'>
        {`${name.charAt(0).toUpperCase() + name.slice(1)} Progress:`} <strong>{`${progress}%`}</strong>
      </div>
      <progress className="progress is-primary" value={`${progress}`} max="100">{`${progress}%`}</progress>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearProgress: getRemainingDays(),
      monthProgress: getRemainingDaysInMonth(),
      weekProgress: getRemainingDaysInWeek(),
      dayProgress: getRemainingHours()
    };
  }
  componentDidMount() {
    setInterval(this.refresh, 1000);
  }
  refresh = () => {
    let [yearProgress, monthProgress, weekProgress, dayProgress] = [
      getRemainingDays(),
      getRemainingDaysInMonth(),
      getRemainingDaysInWeek(),
      getRemainingHours()
    ];
    this.setState({ yearProgress, monthProgress, weekProgress, dayProgress });
  }
  render() {
    return (
      <div className="container">
        <h3 className='title is-large'>{dayjs().year()} so far</h3>
        <Progress progress={this.state.yearProgress} name='year' className='year' />
        <Progress progress={this.state.monthProgress} name='month' className='month' />
        <Progress progress={this.state.weekProgress} name='week' className='week' />
        <Progress progress={this.state.dayProgress} name='day' className='day' />
      </div>
    );
  }
}

export default App;

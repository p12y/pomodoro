import React, { Component } from 'react';
import { Button, FontIcon } from 'react-md';

const timerStyle = {fontWeight: 700, fontSize: '5em', textAlign: 'center'};
const buttonStyle = {marginRight: '1em'};

function formatMilliseconds(ms) {
  let minutes = ms / 1000 / 60;
  const remainder = minutes % 1;
  let seconds = Math.floor(remainder * 60);
  
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  minutes = Math.floor(minutes);
  return `${minutes}:${seconds}`;
}

let timer;

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = { started: false, stopped: true, pomodoroDuration: 1500000 };
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleStartClick() {
    this.setState({ started: true, stopped: false });
    this.startTimer();
  }

  handleStopClick() {
    this.setState({ stopped: true, started: false });
    this.stopTimer();
  }

  handleResetClick() {
    this.setState({ started: false, stopped: true, pomodoroDuration: 1500000 });
    this.stopTimer();
  }

  startTimer() {
    timer = setInterval(() => {
      this.setState({ pomodoroDuration: this.state.pomodoroDuration - 100 });
    }, 100);
  }

  stopTimer() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        <div style={timerStyle}>{formatMilliseconds(this.state.pomodoroDuration)}</div>
        <Button onClick={this.handleStartClick} disabled={this.state.started} style={buttonStyle} raised secondary iconEl={<FontIcon>play_arrow</FontIcon>}>START</Button>
        <Button onClick={this.handleStopClick} disabled={this.state.stopped} style={buttonStyle} raised primary iconEl={<FontIcon>stop</FontIcon>}>
          STOP
        </Button>
        <Button onClick={this.handleResetClick} style={buttonStyle} raised iconEl={<FontIcon>refresh</FontIcon>}>
          RESET
        </Button>
      </div>
    );
  }
}

export default Timer;
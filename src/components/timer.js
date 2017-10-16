import React, { Component } from 'react';
import { Button, FontIcon } from 'react-md';

const timerStyle = {
                      fontWeight: 700, 
                      fontSize: '5em', 
                      textAlign: 'center', 
                      marginTop: '0.4em', 
                      marginBottom: '0.4em'
                    };

const buttonStyle = { marginRight: '1em' };

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
    this.state = { stopped: this.props.stopped, duration: this.props.duration };
    
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleStartClick() {
    this.setState({ stopped: false });
    this.startTimer();
  }

  handleStopClick() {
    this.setState({ stopped: true });
    this.stopTimer();
    this.props.onTimerStop();
  }

  handleResetClick() {
    this.setState({ stopped: true, duration: this.props.duration });
    this.stopTimer();
    this.props.onTimerStop();
  }

  startTimer() {
    timer = setInterval(() => {
      this.setState({ duration: this.state.duration - 100 });
    }, 100);
    this.props.onTimerStart(timer, this);
  }

  stopTimer() {
    if (timer) {
      clearInterval(timer);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.runningTimer === nextProps.runningTimer) {
      this.handleResetClick();
    }
  }

  render() {
    return (
      <div className="timer">
        <div style={timerStyle}>{formatMilliseconds(this.state.duration)}</div>
        <div className="buttons_group">
          <Button 
            onClick={this.handleStartClick} 
            disabled={!this.state.stopped} 
            style={buttonStyle} 
            raised 
            secondary 
            iconEl={<FontIcon>play_arrow</FontIcon>}
          >
            START
          </Button>
          <Button 
            onClick={this.handleStopClick} 
            disabled={this.state.stopped} 
            style={buttonStyle} 
            raised 
            primary 
            iconEl={<FontIcon>stop</FontIcon>}
          >
            STOP
        </Button>
        <Button 
          onClick={this.handleResetClick} 
          style={buttonStyle} 
          raised 
          iconEl={<FontIcon>refresh</FontIcon>}
        >
          RESET
        </Button>
        </div>
      </div>
    );
  }
}

export default Timer;
import React, { Component } from 'react';
import { Button, FontIcon } from 'react-md';

const timerStyle = {fontWeight: 700, fontSize: '5em', textAlign: 'center'};
const buttonStyle = {marginRight: '1em'};
class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {started: false, stopped: true};
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleStartClick() {
    this.setState({started: true, stopped: false});
  }

  handleStopClick() {
    this.setState({stopped: true, started: false});
  }

  handleResetClick() {
    this.setState({started: false, stopped: true});
  }

  render() {
    return (
      <div>
        <div style={timerStyle}>25:00</div>
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
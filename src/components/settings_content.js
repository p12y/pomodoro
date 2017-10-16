import React, { Component } from 'react';
import { Card, CardTitle, CardText, SelectField, Button, FontIcon } from 'react-md';

const style = { maxWidth: '60em', marginTop: '4em' };

const TIME_ITEMS = [...Array(60)].map((_,i) => i).slice(1);

class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = { pomodoroDuration: 25, shortBreakDuration: 5, longBreakDuration: 10 };

    this.handleResetClick = this.handleResetClick.bind(this);
    this.handlePomodoroSelectChange = this.handlePomodoroSelectChange.bind(this);
    this.handleShortBreakSelectChange = this.handleShortBreakSelectChange.bind(this);
    this.handleLongBreakSelectChange = this.handleLongBreakSelectChange.bind(this);
  }

  handlePomodoroSelectChange(value, index, event) {
    this.setState({pomodoroDuration: value});
  }

  handleShortBreakSelectChange(value, index, event) {
    this.setState({shortBreakDuration: value});
  }

  handleLongBreakSelectChange(value, index, event) {
    this.setState({longBreakDuration: value});
  }

  handleResetClick() {
    this.setState({ pomodoroDuration: 25, shortBreakDuration: 5, longBreakDuration: 10 });
  }
  
  render() {
    return (
      <Card style={style} className="md-block-centered">
        <CardTitle title="Timer Settings" subtitle="Set the timer and break durations in minutes" />
        <CardText>
          <SelectField
            id="pomodoro-duration"
            className="md-cell"
            menuItems={TIME_ITEMS}
            position={SelectField.Positions.BELOW}
            value={this.state.pomodoroDuration}
            label="Pomodoro"
            onChange={this.handlePomodoroSelectChange}
          />
          <SelectField
            id="short-break-duration"
            className="md-cell"
            menuItems={TIME_ITEMS}
            position={SelectField.Positions.BELOW}
            value={this.state.shortBreakDuration}
            label="Short break"
            onChange={this.handleShortBreakSelectChange}
          />
          <SelectField
            id="long-break-duration"
            className="md-cell"
            menuItems={TIME_ITEMS}
            position={SelectField.Positions.BELOW}
            value={this.state.longBreakDuration}
            label="Long break"
            onChange={this.handleLongBreakSelectChange}
          />
          <Button 
            onClick={this.handleResetClick} 
            flat 
            iconEl={<FontIcon>refresh</FontIcon>}
          >
            RESET TO DEFAULT
          </Button>
        </CardText>
      </Card>
    );
  }
}

export default Settings;
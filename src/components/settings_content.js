import React from 'react';
import { Card, 
  CardTitle, 
  CardText, 
  SelectField, 
  Button, 
  FontIcon 
} from 'react-md';

const style = { maxWidth: '60em', marginTop: '4em' };

const TIME_ITEMS = [...Array(60)].map((_,i) => i).slice(1);

const Settings = (props) => {
  return (
    <Card style={style} className="md-block-centered">
      <CardTitle 
        title="Timer Settings" 
        subtitle="Set the timer and break durations in minutes" 
      />
      <CardText>
        <SelectField
          id="pomodoro-duration"
          className="md-cell"
          menuItems={TIME_ITEMS}
          position={SelectField.Positions.BELOW}
          value={props.pomodoroDuration}
          label="Pomodoro"
          onChange={props.handlePomodoroSelectChange}
        />
        <SelectField
          id="short-break-duration"
          className="md-cell"
          menuItems={TIME_ITEMS}
          position={SelectField.Positions.BELOW}
          value={props.shortBreakDuration}
          label="Short break"
          onChange={props.handleShortBreakSelectChange}
        />
        <SelectField
          id="long-break-duration"
          className="md-cell"
          menuItems={TIME_ITEMS}
          position={SelectField.Positions.BELOW}
          value={props.longBreakDuration}
          label="Long break"
          onChange={props.handleLongBreakSelectChange}
        />
        <Button 
          onClick={props.handleResetSettingsClick} 
          flat 
          iconEl={<FontIcon>refresh</FontIcon>}
        >
          RESET TO DEFAULT
        </Button>
      </CardText>
    </Card>
  );
}

export default Settings;
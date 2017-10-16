import React, { Component } from 'react';
import Timer from './timer'
import { Grid, Cell, TabsContainer, Tabs, Tab } from 'react-md';

class Pomodoro extends Component {

  constructor(props) {
    super(props);

    this.state = { stopped: false };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(index, event) {
    this.setState({ stopped: true });
  };

  render() {
    return (
      <TabsContainer onTabChange={this.handleTabChange} style={{alignItems: 'center', justifyContent: 'center'}}  panelClassName="md-grid">
      <Tabs centered tabId="simple-tab">
        <Tab label="Pomodoro">
          <Timer 
            runningTimer={this.props.runningTimer} 
            onTimerStart={this.props.onTimerStart} 
            onTimerStop={this.props.onTimerStop} 
            duration={1500000} 
            stopped={this.state.stopped}
          />
        </Tab>
        <Tab label="Short Break">
          <Timer 
            runningTimer={this.props.runningTimer} 
            onTimerStart={this.props.onTimerStart} 
            onTimerStop={this.props.onTimerStop} 
            duration={300000} 
            stopped={this.state.stopped}
          />
        </Tab>
        <Tab label="Long Break">
          <Timer 
            runningTimer={this.props.runningTimer} 
            onTimerStart={this.props.onTimerStart} 
            onTimerStop={this.props.onTimerStop} 
            duration={600000} 
            stopped={this.state.stopped}
          />
        </Tab>
      </Tabs>
    </TabsContainer>
    );
  }

  
}

export default Pomodoro;
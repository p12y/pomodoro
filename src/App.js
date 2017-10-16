import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import NavItemLink from './components/nav_link';
import About from './components/about_content';
import Pomodoro from './components/pomodoro_content';
import Settings from './components/settings_content';
import './App.css';

const navItems = [{
  label: 'Pomodoro Timer',
  to: '/',
  exact: true,
  icon: 'timer',
}, {
  label: 'Settings',
  to: `/settings`,
  icon: 'settings',
}, {
  label: 'How does it work?',
  to: `/about`,
  icon: 'help_outline',
}];

const DEFAULT_DURATIONS = { pomodoroDuration: 25, shortBreakDuration: 5, longBreakDuration: 15 };

function minutesToMilliSeconds(mins) {
  return (mins * 60) * 1000;
}

class App extends PureComponent {
  
  constructor(props) {
    super(props);

    this.state = {
                    toolbarTitle: this.getCurrentTitle(props), 
                    pomodoroDuration: DEFAULT_DURATIONS.pomodoroDuration,
                    shortBreakDuration: DEFAULT_DURATIONS.shortBreakDuration,
                    longBreakDuration: DEFAULT_DURATIONS.longBreakDuration,
                    runningTimer: null 
                  };
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.handeTimerStop = this.handeTimerStop.bind(this);
    this.handleResetSettingsClick = this.handleResetSettingsClick.bind(this);
    this.handlePomodoroSelectChange = this.handlePomodoroSelectChange.bind(this);
    this.handleShortBreakSelectChange = this.handleShortBreakSelectChange.bind(this);
    this.handleLongBreakSelectChange = this.handleLongBreakSelectChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
  }

  getCurrentTitle = ({ location: { pathname } }) => {
    const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
    let title;
    switch (lastSection) {
      case 'settings': {
        title = 'Settings';
        break;
      }
      case 'about': {
        title =  'How does it work?';
        break;
      }
      default: {
        title = 'Pomodoro Timer';
        break;
      }
    }
    return title;
  }

  handleTimerStart(timer, component) {
    clearInterval(this.state.runningTimer);
    this.setState({runningTimer: timer});
  }

  handeTimerStop(timer) {
    this.setState({timerIsRunning: timer});
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

  handleResetSettingsClick() {
    this.setState({ 
      pomodoroDuration: DEFAULT_DURATIONS.pomodoroDuration, 
      shortBreakDuration: DEFAULT_DURATIONS.shortBreakDuration, 
      longBreakDuration: DEFAULT_DURATIONS.longBreakDuration 
    });
  }

  render() {
    const { toolbarTitle } = this.state;
    return (
          <NavigationDrawer
            toolbarTitle={toolbarTitle}
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
            contentId="main-demo-content"
            contentClassName="md-grid"
            includeDrawerHeader={false}
          >
          <Switch key={"location.pathname"}>
            <Route 
              path={navItems[0].to} 
              exact 
              render={(props) => (
                                  <Pomodoro {...props} 
                                    onTimerStart={this.handleTimerStart} 
                                    onTimerStop={this.handeTimerStop} 
                                    runningTimer={this.state.runningTimer}
                                    pomodoroDuration={minutesToMilliSeconds(this.state.pomodoroDuration)} 
                                    shortBreakDuration={minutesToMilliSeconds(this.state.shortBreakDuration)}
                                    longBreakDuration={minutesToMilliSeconds(this.state.longBreakDuration)}
                                  />
                                 )
                      } 
            />
            <Route 
              path={navItems[1].to} 
              render={(props) => (
                                  <Settings {...props}
                                     pomodoroDuration={this.state.pomodoroDuration}
                                     shortBreakDuration={this.state.shortBreakDuration}
                                     longBreakDuration={this.state.longBreakDuration}
                                     handlePomodoroSelectChange={this.handlePomodoroSelectChange}
                                     handleShortBreakSelectChange={this.handleShortBreakSelectChange}
                                     handleLongBreakSelectChange={this.handleLongBreakSelectChange}
                                     handleResetSettingsClick={this.handleResetSettingsClick}
                                  />
                                 )
                      } 
            />
            <Route 
              path={navItems[2].to} 
              render={(props) => (
                                  <About {...props} />
                                 )
                      } 
            />
          </Switch>
        </NavigationDrawer>
    );
  }
}

export default App
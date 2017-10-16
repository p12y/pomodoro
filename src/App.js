import React, { PureComponent } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
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

function minutesToMilliSeconds(mins) {
  return (mins * 60) * 100;
}

class App extends PureComponent {
  
  constructor(props) {
    super(props);

    this.state = {
                    toolbarTitle: this.getCurrentTitle(props), 
                    pomodoroLength: minutesToMilliSeconds(25), 
                    shortBreakLength: minutesToMilliSeconds(5), 
                    longBreakLength: minutesToMilliSeconds(10),
                    runningTimer: null 
                  };
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.handeTimerStop = this.handeTimerStop.bind(this);
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
                                  />
                                 )
                      } 
            />
            <Route 
              path={navItems[1].to} 
              render={(props) => (
                                  <Settings {...props} 
                                    onTimerStart={this.handleTimerStart} 
                                    onTimerStop={this.handeTimerStop} 
                                    runningTimer={this.state.runningTimer}
                                  />
                                 )
                      } 
            />
            <Route 
              path={navItems[2].to} 
              render={(props) => (
                                  <About {...props} 
                                    onTimerStart={this.handleTimerStart} 
                                    onTimerStop={this.handeTimerStop} 
                                    runningTimer={this.state.runningTimer}
                                  />
                                 )
                      } 
            />
          </Switch>
        </NavigationDrawer>
    );
  }
}

export default App
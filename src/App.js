import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { NavigationDrawer, ToolbarTitle } from 'react-md';
import { Button } from 'react-md';
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

class App extends PureComponent {
  
  constructor(props) {
    super(props);

    this.state = { toolbarTitle: this.getCurrentTitle(props) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
  }

  getCurrentTitle = ({ location: { pathname } }) => {
    const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
    switch (lastSection) {
      case 'settings': {
        return 'Settings';
        break;
      }
      case 'about': {
        return 'How does it work?';
        break;
      }
      default: {
        return 'Pomodoro Timer';
        break;
      }
    }
  }


  render() {
    const { toolbarTitle } = this.state;
    const { location } = this.props;
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
            <Route path={navItems[0].to} exact component={Pomodoro} />
            <Route path={navItems[1].to} component={Settings} />
            <Route path={navItems[2].to} component={About} />
          </Switch>
        </NavigationDrawer>
    );
  }
}

export default App
import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { NavigationDrawer } from 'react-md';
import { Button } from 'react-md';
import NavItemLink from './components/list_item';

const navItems = [{
  label: 'Pomodoro Timer',
  to: '/',
  exact: true,
  icon: 'timer',
}, {
  label: 'Custom Timer',
  to: `/custom`,
  icon: 'mode_edit',
}, {
  label: 'About',
  to: `/about`,
  icon: 'help_outline',
}];

const Pomodoro = () => (
  <div>
    <h2>Pomodoro</h2>
  </div>
)

const Custom = () => (
  <div>
    <h2>Custom</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class BasicExample extends PureComponent {
  
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
      case 'custom': {
        return 'Custom Timer';
        break;
      }
      case 'about': {
        return 'About';
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
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
          tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
          desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
          navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
          contentId="main-demo-content"
          contentStyle={null}
          contentClassName="md-grid"
        >
          <Switch key={"location.pathname"}>
            <Route path={navItems[0].to} exact component={Pomodoro} />
            <Route path={navItems[1].to} component={Custom} />
            <Route path={navItems[1].to} component={About} />
          </Switch>
        </NavigationDrawer>
    );
  }
}

export default BasicExample
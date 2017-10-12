import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { NavigationDrawer } from 'react-md';
import { Button } from 'react-md';

const navItems = [{
  label: 'Home',
  to: '/',
  exact: true,
  icon: 'inbox',
}, {
  label: 'About',
  to: `/about`,
  icon: 'star',
}];

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const NavItemLink = (props) => (
  <li><Link to={props.to}>{props.label}</Link></li>
)

class BasicExample extends Component {
  
  constructor(props) {
    super(props);

    this.state = { toolbarTitle: this.getCurrentTitle(props) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
  }

  getCurrentTitle = ({ location: { pathname } }) => {
    const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (lastSection === '') {
      return 'Pomodoro';
    }
    return lastSection[0].toUpperCase() + lastSection.slice(1);
  }

  render() {
    const { toolbarTitle } = this.state;
    const { location } = this.props;
    return (
        <div>
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
          <Switch key={""}>
            <Route path={navItems[0].to} exact component={Home} />
            <Route path={navItems[1].to} component={About} />
          </Switch>
        </NavigationDrawer>
    
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
    );
  }
}

export default BasicExample
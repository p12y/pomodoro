import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationDrawer } from 'react-md';
import { Button, SVGIcon } from 'react-md';
import { FontIcon } from 'react-md';

class App extends Component {
  render() {
    return (
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
      >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <Button raised primary iconChildren="done">Done</Button>
            <Button raised secondary iconChildren="done">Done</Button>
          </p>
        </div>
      </NavigationDrawer>
    );
  }
}

export default App;

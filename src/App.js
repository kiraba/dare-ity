import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from 'darity-state';
import Donate from './Donate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Donate />
      </div>
    );
  }
}

export default User(App);

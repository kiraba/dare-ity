import React, { Component } from 'react';
import './css/app.css';
// import SplashPage from './components/SplashPage'
import Homepage from './components/Homepage'


class App extends Component {
  constructor(){
    super()
    this.state = {
      pageMode: 'SplashPage'
    }
  }
  render() {
    return (
      <div>
        <Homepage />
      </div>

    );
  }
}
// https://www.npmjs.com/package/react-player
export default App;

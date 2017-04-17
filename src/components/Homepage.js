import React, { Component } from 'react';
import '../css/homepage.css';
import BroadcasterContainer from './BroadcasterContainer';
import HomepageMainVid from './HomepageMainVid';
import DareContainer from './DareContainer'
import Tile from './tile'


class Homepage extends Component {
  render() {
    return (
    <div className="HomePage">
    <div className="SafeArea">
    <div className='Header'>
      <h1>fun(d)</h1>
     </div> 
    <div className="Video">
        <HomepageMainVid />
      </div>
      <div className='Tiles'>
      <Tile />
      </div>
      </div>
    </div>
    );
  }
}
export default Homepage;

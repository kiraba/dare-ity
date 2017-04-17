import React, { Component } from 'react';
import '../css/homepage.css';
import Broadcasters from './Broadcasters';
import HomepageMainVid from './HomepageMainVid';
import DareContainer from './DareContainer'
import Dare from './Dare'
import CompletedDares from './CompletedDares'


class Homepage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="SafeArea">
          <div className='Header'>
            <h1>FUN(d)</h1>
          </div> 
          <div className="Video">
              <HomepageMainVid />
          </div>
          <div className='Title'>
            <h1>Active Dares <a className='InlineLink'> View All</a></h1>
          </div>
          <div className='Tiles'>
            <Dare />
          </div>
          <div className='Title'>
            <h1>Broadcasters <a className='InlineLink'> View All</a></h1>
          </div>
          <div className='Tiles'>
            <Broadcasters />
          </div>
          <div className='Title'>
            <h1>Completed Dares <a className='InlineLink'> View All</a></h1>
          </div>
          <div className='Tiles'>
            <CompletedDares />
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;

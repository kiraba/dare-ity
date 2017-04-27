import React, { Component } from 'react';
import '../css/homepage.css';
import Broadcasters from './Broadcasters';
import HomepageMainVid from './HomepageMainVid';
import Dare from './Dare'
import CompletedDares from './CompletedDares'
import NPOCreateDare from './NPOCreateDare'


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
            <h1>Active Dares</h1>
          </div>
          <div className='Tiles'>
            <Dare {...this.props}/>
          </div>
          <div className='Title'>
            <h1>Broadcasters</h1>
          </div>
          <div className='Tiles'>
            <Broadcasters {...this.props} />
          </div>
          <div className='Title'>
            <h1>Completed Dares</h1>
          </div>
          <div className='Tiles'>
            <CompletedDares {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

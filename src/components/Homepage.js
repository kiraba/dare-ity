import React, { Component } from 'react';
import '../css/homepage.css';
import Broadcasters from './Broadcasters';
import HomepageMainVid from './HomepageMainVid';
<<<<<<< HEAD
import Dare from './Dare';
import CompletedDares from './CompletedDares';
=======
import Dare from './Dare'
import CompletedDares from './CompletedDares'
>>>>>>> 66757979955062305e4daca04b1260408bbe818d

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
            <Dare changePageMode={this.props.changePageMode}/>
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

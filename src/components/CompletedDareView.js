import React, { Component } from 'react';
import '../css/viewdare.css';
import CompletedDares from './CompletedDares';
import { DisplayDare } from 'darity-state';
import { User } from 'darity-state';



class CompletedDareView extends Component {


  render() {
    var self = this
    return (
        <div className="SafeArea">
            <div className='Header'>
              <h1>FUN(d)</h1>
            </div>
            <div className="Video">
              <HomepageMainVid />
            </div>
            <div className='DareInView'>
                <div className='SquareImage'>
                <img src={this.props.currentDare.image_path} />
                </div>
                <div className='DareContent'>
                <h1>{this.props.currentDare.title}</h1>
                <h2>{this.props.currentDare.name}</h2>
                <p className='description'>{this.props.currentDare.description}</p>
                <div className='dareButton'>
                  <button type="button" className="button" onClick={() => !this.props.token ? self.props.changePageMode('SplashPage') : self.props.changePageMode('Participate')} >Accept Dare</button>
                </div>
                </div>

            </div>

            <div>
              <div className='Title'>
                <h1>View Dares <a className='InlineLink'> View All</a></h1>
              </div>
              <div className='Tiles'>
                <CompletedDares />
              </div>
              </div>
          </div>
    );
  }
}

export default DisplayDare(User(CompletedDareView));

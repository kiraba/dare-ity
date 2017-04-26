import React, { Component } from 'react';
import '../css/viewdare.css';
import CompletedDares from './CompletedDares';
import { DisplayDare } from 'darity-state';
import { User } from 'darity-state';
import Dare from './Dare';




class DareView extends Component {


  render() {
    var self = this
    return (
        <div className="SafeArea">
            <div className='Header'>
              <h1>FUN(d)</h1>
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
                <h1>View Other Dares</h1>
              </div>
              <div className='Tiles'>
                <Dare />
              </div>
              </div>
          </div>
    );
  }
}

export default DisplayDare(User(DareView));
// <div className="viewContainer">
// <div className="npoLogo">
//   <img className="nLog" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRVPhf-wgiSEadlcLdegmcnej7P7MEjKCf0FzduW9_tWY3GLZ2" alt="" />
// </div>
// <div className="theDare">
//   <h1>NPO</h1>
//   <h1>NPO Dare</h1>
//   <h2 className="ladescription">Hello! Have you ever heard of the ice bucket challenge? Well today we are daring you to the ice coffee challenge.
//   and upload a video of yourself pouring a bucket of ice coffee on your head. Have what it takes? Click the participate button now! Have fun
//   and stay safe! </h2>
//   </div>
//   </div>

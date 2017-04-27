import React, { Component } from 'react';
import '../css/viewdare.css';
import CompletedDares from './CompletedDares';
import { DisplayDare } from 'darity-state';
import { User } from 'darity-state';
import CompletedDareVid from './CompletedDareVid';



class CompletedDareView extends Component {


  render() {
    var self = this
    return (
        <div className="SafeArea">
            <div className='Header'>
              <h1>FUN(d)</h1>
            </div>
            <div className="Video">
              <CompletedDareVid />
            </div>
            

            <div>
              <div className='Title'>
                <h1>View Dares</h1>
              </div>
              <div className='Tiles'>
                <CompletedDares changePageMode={this.props.changePageMode}/>
              </div>
              </div>
          </div>
    );
  }
}

export default DisplayDare(User(CompletedDareView));

import React, { Component } from 'react';
import '../css/tile.css';
import '../css/viewdare.css';
import ReactPlayer from 'react-player'
import TakeMoney from './TakeMoney'

import '../css/userprofile.css'


class ActiveDares extends Component {


  render() {
    return (
            <div>
            <div className='Container'>
                <div className='ActiveDareBox'>
                  <p>{this.props.dare.title}</p>
                  <p>{this.props.dare.description} </p>
                  <p>Amount raised: blank of {this.props.dare.pledge_amount_threshold} </p>
                  <TakeMoney />
                </div>
            </div>
            </div>
          );
  }
}
export default ActiveDares;

// 89 characters.

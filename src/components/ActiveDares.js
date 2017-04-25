import React, { Component } from 'react';
import '../css/tile.css';
import '../css/viewdare.css';
import ReactPlayer from 'react-player'

class ActiveDares extends Component {
  render() {
    const { dare } = this.props
    console.log('dare', dare)
    if(!dare.video_path){
      return (
        <div>
        <h1>Dares to be Funded</h1>
            <div>
              <p>{dare.title} </p>
              <p>{dare.description} </p>
              <p>Amount raised: blank of {dare.pledge_amount_threshold} </p>
            </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}
export default ActiveDares;

// 89 characters.

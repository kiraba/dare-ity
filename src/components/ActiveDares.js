import React, { Component } from 'react';
import '../css/tile.css';
import '../css/viewdare.css';
import ReactPlayer from 'react-player'
import TakeMoney from './TakeMoney'
import { User } from 'darity-state';
import { DisplayUser, DisplayDare } from 'darity-state'

import '../css/userprofile.css'


class ActiveDares extends Component {

  completeDareButton = () => {
    this.props.viewDare(this.props.dare);
    this.props.changePageMode('CompleteDare');
  }

  personalAccount () {
    console.log('tessssssttttttttt', this.props.id)
    if ( this.props.id === this.props.currentProfile.id) {
      return <button className='completeDare' type="submit" onClick={this.completeDareButton}>Complete Dare</button>
    } else {
      return <TakeMoney />
    }
  }


  render() {
    return (
            <div>
            <div className='Container'>
                <div className='ActiveDareBox'>
                  <p>{this.props.dare.title}</p>
                  <p>{this.props.dare.description} </p>
                  <p>Amount raised: blank of {this.props.dare.pledge_amount_threshold} </p>
                  {this.personalAccount()}
                </div>
            </div>
            </div>
          );
  }
}
export default DisplayDare(DisplayUser(User(ActiveDares)));

// 89 characters.

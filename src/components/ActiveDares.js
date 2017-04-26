import React, { Component } from 'react';
import '../css/tile.css';
import '../css/viewdare.css';
import ReactPlayer from 'react-player'
import TakeMoney from './TakeMoney'
import { User } from 'darity-state';
import { DisplayUser, DisplayDare } from 'darity-state'
import PledgeButton from './pledge'

import '../css/userprofile.css'


class ActiveDares extends Component {
  state = {
    totalAmount: 0
  }

  completeDareButton = () => {
    this.props.viewDare(this.props.dare);
    this.props.changePageMode('CompleteDare');
  }

  personalAccount () {
    if ( this.props.id === this.props.currentProfile.id) {
      return <button className='completeDare' type="submit" onClick={this.completeDareButton}>Complete Dare</button>
    } else {
      return <PledgeButton  currentDare={this.props.viewDare(this.props.dare)}/>
    }
  }

  total_pledges () {
    if (this.props.dare.total_pledges === null){
      return <span>$0</span>
    } else {
      return this.props.dare.total_pledges
    }

  }

  render() {
    return (
            <div>
            <div className='Container'>
                <div className='ActiveDareBox'>
                  <p>{this.props.dare.title}</p>
                  <p>{this.props.dare.description} </p>
                  <p>Donate to this dare: </p>
                  <p>Amount raised: {this.total_pledges()} of {this.props.dare.pledge_amount_threshold} </p>
                  {this.personalAccount()}
                </div>
            </div>
            </div>
          );
  }
}
export default DisplayDare(DisplayUser(User(ActiveDares)));

// 89 characters.

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

  // componentDidMount() {
  //   fetch('http://fun-d-backend.herokuapp.com/api/fetch_all_dares', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json' //content type in mobile = accept
  //     }
  //   })
  // .then(response=>response.json())
  // .then((dares) => {
  //   this.setState({dareBlocks: dares.result});
  // })
  // }

  completeDareButton = () => {
    this.props.viewDare(this.props.dare);
    this.props.changePageMode('CompleteDare');
  }

  personalAccount () {
    console.log('tessssssttttttttt', this.props)
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

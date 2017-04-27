import React, { Component } from 'react';
import '../css/tile.css';
import '../css/viewdare.css';
import ReactPlayer from 'react-player'
import TakeMoney from './TakeMoney'
import { User } from 'darity-state';
import { DisplayUser, DisplayDare } from 'darity-state'
import PledgeButton from './pledge'
import _ from 'lodash'
import '../css/userprofile.css'


class ActiveDares extends Component {
  state = {
    totalAmount: 0
  }

  componentWillMount(){
    const id = _.get(this, 'props.match.params.userDareId')
    if(id){
      fetch('http://fun-d-backend.herokuapp.com/api/fetch_user_dare/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' //content type in mobile = accept
        },
        body: JSON.stringify({query: id})
      })
      .then(response=>response.json())
      .then(response => {
        const dare = response.result;
        this.props.viewDare(dare)
      })
    }
  }

  completeDareButton = () => {
    const dare = this.props.dare || this.props.currentDare || {}
    this.props.viewDare(dare);
    this.props.history.push('/completedare');
  }

  personalAccount () {
    const dare = this.props.dare || this.props.currentDare || {}
    if ( this.props.id === _.get(this, "props.currentProfile.id", "")){
      return <button className='completeDare' type="submit" onClick={this.completeDareButton}>Complete Dare</button>
    } else {
      return <PledgeButton {...this.props} currentDare={this.props.viewDare(dare)}/>
    }
  }

  total_pledges () {
    const dare = this.props.dare || this.props.currentDare || {}
    if (!dare.total_pledges){
      return <span>$0</span>
    } else {
      return dare.total_pledges
    }
  }

  render() {
    const dare = this.props.dare || this.props.currentDare || {}
    return (
      <div>
      <div className='Container'>
      <div className='ActiveDareBox'>
      <h2>{dare.title}</h2>
      <div className='description'>
      <p>{dare.description} </p>
      </div>

      {this.personalAccount()}
      <div>
      <p className='amountRaised'>Amount raised: {this.total_pledges()} of {dare.pledge_amount_threshold} </p>
      </div>
      </div>
      </div>
      </div>
      );
  }
}
export default DisplayDare(DisplayUser(User(ActiveDares)));

// 89 characters.

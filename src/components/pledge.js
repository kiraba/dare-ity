import React, { Component } from 'react';
import TakeMoney from './TakeMoney'
import '../css/pledge.css'

class PledgeButton extends Component {

state = { amount: 100}
render () {
  const { info } = this.props
  return (
    <div>
    <p>Donate to this dare: </p>
    <input type='number' className='pledgeInput' value={this.state.amount} onChange={(e) => this.setState({amount: e.target.value})} />
    <TakeMoney  amount={this.state.amount}/>
    </div>
  )
}

}
export default PledgeButton

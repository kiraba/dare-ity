import React, { Component } from 'react';
import TakeMoney from './TakeMoney'

class PledgeButton extends Component {

state = { amount: 100}
render () {
  const { info } = this.props
  return (
    <div>
    <input type='number' value={this.state.amount} onChange={(e) => this.setState({amount: e.target.value})} />
    <TakeMoney  amount={this.state.amount}/>
    </div>
  )
}

}
export default PledgeButton

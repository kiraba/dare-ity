import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { User } from 'darity-state'
import { DisplayUser } from 'darity-state'
import { DisplayDare } from 'darity-state'


class TakeMoney extends React.Component {

  alertSuccess () {
    alert('Thank you for your donation.')
  }

  onToken = (token) => {
    fetch('http://fun-d-backend.herokuapp.com/save-stripe-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({token: token, pledge: this.props.amount}),
    })
    .then(response => {
      response.json()
    })
    .then(data => {
      return Promise.resolve()
    })
    .then ( ()=>{
      return fetch('http://fun-d-backend.herokuapp.com/api/create_pledge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        token: this.props.token,
        broadcaster_id: this.props.currentProfile.id,
        pledger_id: this.props.id,
        dare_id: this.props.currentDare.dare_id,
        npo_id: this.props.currentDare.npo_id,
        user_dare_id: this.props.currentDare.user_dare_id,
        pledge_amount: this.props.amount,
        to_refund: 'false'
      })
    })
  }).then(response => alert('Thank you for your donation.'))
  }


  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_O127XMYBkWs2vpiyD7G9bS2g"
        amount={(this.props.amount)*100}
      />
    )
  }
}

export default DisplayDare(DisplayUser(User(TakeMoney)))

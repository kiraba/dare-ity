import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('http://localhost:3001/save-stripe-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({token: token, pledge: this.props.amount}),
    }).then(response => {
      response.json().then(data => {
        console.log(data)
        alert(data);
      });
    });
  }


  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_OmIoSssryUaK5iVucacWV4yG"
        amount={this.props.amount}
      />
    )
  }
}

import React, { Component } from 'react';
import {User} from 'darity-state';

export default class Donate extends Component {

  render() {
    return (
    <div>
      <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" className="cmd" value="_s-xclick" />
        <input type="hidden" className="hosted_button_id" value="NFXDXUV5MJ9B6" />
        <table>
        <tr><td><input type="hidden" className="on0" value="Select Donation Amount" />Select Donation Amount</td></tr><tr><td><select className="os0">
            <option value="Prisoner Option #1">Prisoner Option #1 $5.00 USD</option>
            <option value="Scrooge Option #2">Scrooge Option #2 $10.00 USD</option>
            <option value="Santa Option #3">Santa Option #3 $20.00 USD</option>
        </select> </td></tr>
        <tr><td><input type="hidden" className="on1" value="Test" />Test</td></tr><tr><td><select className="os1">
            <option value="Option 1">Option 1 </option>
            <option value="Option 2">Option 2 </option>
            <option value="Option 3">Option 3 </option>
        </select> </td></tr>
        </table>
        <input type="hidden" className="currency_code" value="USD" />
        <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" className="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
    );
  }
}







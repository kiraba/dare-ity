import React, { Component } from 'react';
import {User} from 'darity-state';
import 'whatwg-fetch';

export default class Donate extends Component {

  render() {
    // NEEDS CSS CHANGES
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
        </table>
        <input type="hidden" className="currency_code" value="USD" />
        <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" className="submit" />
        <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
    );
  }
}







import React, { Component } from 'react';
import '../css/viewdare.css';
import CompletedDares from './CompletedDares';


class ViewDare extends Component {
  
  render() {
    return (
      <div className="HomePage">
        <div className="SafeArea">
          <div className='Header'>
            <h1>FUN(d)</h1>
          </div> 
          <div className="viewContainer">
          <div className="npoLogo">
            <img className="nLog" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRVPhf-wgiSEadlcLdegmcnej7P7MEjKCf0FzduW9_tWY3GLZ2" alt="" />
          </div>
          <div className="theDare">
            <h1>NPO</h1>
            <h1>NPO Dare</h1>
            </div>
            </div>
          <div >
            <h2 className="ladescription">Hello! Have you ever heard of the ice bucket challenge? Well today we are daring you to the ice coffee challenge. 
            and upload a video of yourself pouring a bucket of ice coffee on your head. Have what it takes? Click the participate button now! Have fun
            and stay safe! </h2>
          </div>
          <div>
          <button type="button" data-target="#myupdate" data-toggle="modal" className="btn btn-lg">Participate</button>
            <div className="modal fade" id="myupdate" role="dialog">
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Agreement of Participation</h4>
                  </div>
                  <div className="modal-body">
                    <p>I am verifying that I would like to participate in this dare.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">I agree</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className='Title'>
            <h1>View Dares <a className='InlineLink'> View All</a></h1>
          </div>
          <div className='Tiles'>
            <CompletedDares />
          </div>
          </div>
        </div>
    );
  }
}

export default ViewDare;

import React, { Component } from 'react';
import '../css/viewdare.css';
import CompletedDares from './CompletedDares'


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
            <h1 className="ladescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo nibh a nibh accumsan, nec porta dolor mollis. Cras ut erat quis nunc gravida lobortis. Curabitur id malesuada arcu. In iaculis orci sed odio vestibulum, eu tempor sem lobortis. Duis in porttitor quam, eget aliquam libero. Sed placerat efficitur dolor et varius. Praesent ultrices dui quis placerat varius. Aliquam congue nisl mi, non auctor massa bibendum a. Integer ut ullamcorper orci, nec ultrices magna. Proin ut tellus pulvinar, rhoncus nisi id, viverra dolor. Suspendisse ut tempor urna, quis vestibulum orci. Duis ipsum ligula, commodo in metus vitae, euismod sagittis arcu. Nullam volutpat placerat laoreet. Cras enim quam, vulputate sed nulla et, porttitor tincidunt nulla. Proin id elit eu nisi malesuada varius.</h1>
          </div>
          <div>
            <button className="elButton">Participate</button>
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

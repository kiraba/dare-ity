import React, { Component } from 'react';
import '../css/viewdare.css';
import CompletedDares from './CompletedDares';


class DareView extends Component {
  render() {
    var self = this
    return (
        <div className="SafeArea">
            <div className='Header'>
              <h1>FUN(d)</h1>
            </div>
            <div className='DareInView'>
                <div className='SquareImage'>
                <img src='http://kpax.images.worldnow.com/images/9740996_G.jpg' />
                </div>
                <div className='DareContent'>
                <h1>Dare Title</h1>
                <h2>NPO</h2>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in aliquam neque, a vulputate urna. Nunc laoreet nunc ut nibh iaculis, in consequat justo laoreet. Sed eget volutpat neque. Sed egestas lobortis est vitae mollis. Donec nisi quam, lacinia in lacinia id, placerat eu enim.</p>
                <div className='dareButton'>
                  <button type="button" className="button" onClick={()=>self.props.changePageMode('Participate')} >Accept Dare</button>
                </div>
                </div>

            </div>

            <div>
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

export default DareView;
// <div className="viewContainer">
// <div className="npoLogo">
//   <img className="nLog" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRVPhf-wgiSEadlcLdegmcnej7P7MEjKCf0FzduW9_tWY3GLZ2" alt="" />
// </div>
// <div className="theDare">
//   <h1>NPO</h1>
//   <h1>NPO Dare</h1>
//   <h2 className="ladescription">Hello! Have you ever heard of the ice bucket challenge? Well today we are daring you to the ice coffee challenge.
//   and upload a video of yourself pouring a bucket of ice coffee on your head. Have what it takes? Click the participate button now! Have fun
//   and stay safe! </h2>
//   </div>
//   </div>

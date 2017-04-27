import React, { Component } from 'react';
import '../css/viewdare.css';
import CompletedDares from './CompletedDares';
import { DisplayDare } from 'darity-state';
import { User } from 'darity-state';
import Dare from './Dare';




class DareView extends Component {


  render() {
    console.log('dareview', this.props)
    return (
        <div className="SafeArea">
            <div className='Header'>
              <h1>FUN(d)</h1>
            </div>
            <div className='UserBio'>
                <div className='SquareImage'>
                <img src={this.props.currentDare.image_path} />
                </div>
                <div className='DareDes'>
                <h1>{this.props.currentDare.title}</h1>
                <h2>{this.props.currentDare.name}</h2>
                <p className='description'>{this.props.currentDare.description}</p>
                <div className='dareButton'>
                  <button type="button" className="button" onClick={() => !this.props.token ? this.props.history.push('/') : this.props.history.push('/participate')} >Accept Dare</button>
                </div>
                </div>

            </div>

            <div>
              <div className='Title'>
                <h1>View Other Dares</h1>
              </div>
              <div className='Tiles'>
                <Dare {...this.props} />
              </div>
              </div>
          </div>
    );
  }
}

export default DisplayDare(User(DareView));


import React, { Component } from 'react';
import '../css/splash.css';
import Splash from './splash';
import SignUp from './signUp';
import Login from './Login';
import NPOCreateDare from './NPOCreateDare';

class SplashPage extends Component {
  constructor(){
    super()
    this.state = {
      boxMode: 'Splash'
    }
  }

  changeBoxMode(boxMode){
    this.setState({boxMode: boxMode});
  }

  boxMode(){
    if(this.state.boxMode === 'Splash'){
      return <Splash changeBoxMode={this.changeBoxMode.bind(this)} />
    } else if (this.state.boxMode === 'SignUp'){
      return <SignUp changeBoxMode={this.changeBoxMode.bind(this)} />
    }else if (this.state.boxMode === 'Login'){
      return <Login changeBoxMode={this.changeBoxMode.bind(this)} {...this.props} />
    } else if (this.state.boxMode === 'NPOCreateDare'){
      return <NPOCreateDare changeBoxMode={this.changeBoxMode.bind(this)} />
    }
  }

  render() {

    return (
      <div>
        <div className="video-background">
          <div className="video-foreground">
          </div>
        </div>
        <div className='overlayArea'>
          {this.boxMode()}
        </div>
      </div>

    );
  }
}
// https://www.npmjs.com/package/react-player
export default SplashPage;

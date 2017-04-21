import React, { Component } from 'react';
import '../css/app.css';
import Splash from './splash'
import SignUp from './signUp'
import Login from './Login'

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
      return <Splash changeBoxMode={this.changeBoxMode.bind(this)} changePageMode={this.props.changePageMode}/>
    } else if (this.state.boxMode === 'SignUp'){
      return <SignUp changeBoxMode={this.changeBoxMode.bind(this)} />
    }else if (this.state.boxMode === 'Login'){
      return <Login changePageMode={this.props.changePageMode} />
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

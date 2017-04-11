import React, { Component } from 'react';
import './App.css';
import Splash from './components/splash'
import SignUp from './components/signUp'
import Login from './components/Login'

class App extends Component {
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
      return <Splash changeBoxMode={this.changeBoxMode.bind(this)}/>
    } else if (this.state.boxMode === 'SignUp'){
      return <SignUp />
    }else if (this.state.boxMode === 'Login'){
      return <Login />
    }
  }

  render() {
    return (
      <div>
        <div className="video-background">
          <div className="video-foreground">
             <iframe src="https://www.youtube.com/embed/nPoSDRvqyUg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameBorder="0" allowFullScreen></iframe>
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
export default App;



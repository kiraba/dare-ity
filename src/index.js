import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {store} from 'darity-state';
import {Provider} from 'react-redux'

ReactDOM.render(
	(<Provider store={store}>
  		<App />
  	</Provider>),

  document.getElementById('root')
);

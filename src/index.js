import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './index.css';
import App from './App';


ReactDOM.render(
  //provider is the component that is the parent of everything in our application
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

  ,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

import './styles/style.scss';

ReactDOM.render(
  // <Router
  //   history={hashHistory} 
  //   routes={RouteComponent}
  //   >
  // </Router>
  <div className='app'>
    <Home />
  </div>
  , document.getElementById('app'));

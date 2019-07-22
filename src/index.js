import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
// import { Router, hashHistory } from 'react-router';
// import RouteComponent from './routes';
import './styles/style.scss';

ReactDOM.render(
  // <Router
  //   history={hashHistory} 
  //   routes={RouteComponent}
  //   >
  // </Router>
  <Home />
  , document.getElementById('app'));

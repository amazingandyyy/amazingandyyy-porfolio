import React from 'react';
import ReactDOM from 'react-dom';

import { Router, hashHistory } from 'react-router';
import RouteComponent from './routes';
import './styles/style.scss';

ReactDOM.render(
  <Router
    history={hashHistory} 
    routes={RouteComponent}
    >
  </Router>
  , document.getElementById('app'));

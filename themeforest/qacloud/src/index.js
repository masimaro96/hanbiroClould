import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import RouteQaCloud from './App/Router/index' 

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/qacloud'>
      <RouteQaCloud />
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

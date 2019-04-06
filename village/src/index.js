import React from 'react';
import ReactDOM from 'react-dom';

// import {BrowserRouter as Router} from "react-router-dom";

import './index.css';
import App from './App';

/*
ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));

*/
import {BrowserRouter as Router, withRouter} from 'react-router-dom';

// use HOC to provide history, match, location objects as props into App
const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>
  , document.getElementById('root'));


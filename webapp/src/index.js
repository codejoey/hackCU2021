import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Mapp from './screens/map';
import Login from './screens/login/login';
import Register from './screens/register/register';
import Emotion from './screens/emotion/emotion';
import Health from './screens/health/health';


ReactDOM.render(
  <Router>
  <div className="App">
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Register} />
    <Route exact path="/emotion" component={Emotion} />
    <Route exact path="/health" component={Health} />


    
  </div>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

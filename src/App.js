import './App.css';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import LoginBox from './LoginBox'
import Signup from './Signup'
import axios from "axios";

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'; // <Link to={`/url/${i}}> instead of <a href>

const App = () => {
  const [token, setToken] = useState('');

  function saveToken(token) {
    setToken(token);
    window.localStorage.setItem('token', token);
  }

  return (
    <div className="App">
    Read This
     <Signup
     saveToken={saveToken} />
  
    </div>
  );
}

export default App;

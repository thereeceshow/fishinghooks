import './App.css';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './Signup'
import Login from './Login'
import Dash from './Dash'
// import axios from "axios";

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'; // <Link to={`/url/${i}}> instead of <a href>

const App = () => {
  const [token, setToken] = useState('');

  function saveToken(token) {
    console.log(token)
    setToken(token);
    window.localStorage.setItem('token', token);
  }

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact={true} path="/signup">
          <Signup saveToken={saveToken} />
        </Route>
        <Route exact={true} path="/login">
          <Login saveToken={saveToken} />
        </Route>
        <Route exact={true} path="/dash">
          <Dash saveToken={saveToken} />
        </Route>
      </Switch>
    </Router>
  
    </div>
  );
}

export default App;

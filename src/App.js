import './App.css';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import LoginBox from './LoginBox'

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'; // <Link to={`/url/${i}}> instead of <a href>

function App() {
  const [token, setToken] = useState(0);
  return (
    <div className="App">
     <LoginBox />
      <Router>
      <Switch>
        <Route>
          {/* <Comp /> */}

        </Route>
      </Switch>




      </Router>
    </div>
  );
}

export default App;

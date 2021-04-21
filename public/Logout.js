import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'; // <Link to={`/url/${i}}> instead of <a href>
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";


function Logout() {
  return (
    <div className="Logout">
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

export default Logout;

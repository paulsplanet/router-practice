import React from "react";
import About from "./About";
import Home from "./Home";
import { Link, Route, Switch } from "react-router-dom";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profiles">Profiles</Link></li>
        <li><Link to="/history">History</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route render={({ location }) => (
          <div>
            <h2>This page doesn't exist.</h2>
            <p>{location.pathname}</p>
          </div>
        )} />
      </Switch>
      
    </div>
  )
}

export default App;

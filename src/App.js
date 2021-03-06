import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Callback from "./Callback";

function App(props) {
  return (
    <div>
      <Nav />
      <div className="body">
        <Route exact path="/" component={Home} />
        <Route path="/callback" component={Callback} />
        <Route path="/profile" component={Profile} />
      </div>
    </div>
  );
}

export default App;

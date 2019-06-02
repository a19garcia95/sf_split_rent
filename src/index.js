import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import MatchListings from "./components/MatchListings";
import ContactInfo from "./components/ContactInfo";

import * as serviceWorker from "./serviceWorker";
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/users" component={Landing} />
      <Route path="/signin" component={SignIn} />
      <Route path="/matchlistings" component={MatchListings} />
      <Route path="/contactinfo" component={ContactInfo} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();

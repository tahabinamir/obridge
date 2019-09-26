import React from "react";
import {
  About,
  Contact,
  Projects,
  Services,
  Vision,
  Team,
  Obridge
} from "../views/screens";
import { Switch, Route } from "react-router-dom";

export default props => (
  <Switch>
    <Route exact path="/Vision" component={Vision}></Route>
    <Route exact path="/About" component={About}></Route>
    <Route exact path="/Contact" component={Contact}></Route>
    <Route exact path="/Projects" component={Projects}></Route>
    <Route exact path="/Team" component={Team}></Route>
    <Route exact path="/Services" component={Services}></Route>
  </Switch>
);

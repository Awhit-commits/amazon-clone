import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "../Navbar";

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="">
            <Switch>
              <Route path="/checkout">
                <h1>Checkout</h1>
              </Route>
              <Route path="/login">
                <h1>Login</h1>
              </Route>
              <Route path="/">
                  <Navbar/>
                <h1>Home Page</h1>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

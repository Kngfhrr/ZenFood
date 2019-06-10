import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import SignUp from "./components/pages/signUp";
import LoginPage from "./components/pages/loginPage";
import { Profile } from "./components/pages/profile";
import { Admin } from "./components/pages/admin";
import { Menu } from "./components/pages/menu";
import { Forgot } from "./components/pages/forgotpass";

render(
  <Router>
    <Route exact path="/" component={LoginPage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/profile" component={Profile} />
    <Route path="/admin" component={Admin} />
    <Route path="/menu" component={Menu} />
    <Route path="/forgot" component={Forgot} />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();

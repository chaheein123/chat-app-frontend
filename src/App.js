import React from "react";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

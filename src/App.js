import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import { Landing } from "./pages/Landing/SignInLanding.component";
import { SignUp } from "./components/SignUp/SignUp.component";

function App() {
  return (
    <Router>

      <div className="App">
        {/* <Navbar></Navbar> */}
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

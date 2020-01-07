import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import { Landing } from "./pages/Landing/Landing.component";

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

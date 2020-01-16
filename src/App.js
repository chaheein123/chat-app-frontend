import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Landing } from "./pages/Landing/Landing";
import AppPage from "./pages/AppPage/AppPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Friends from "./components/Friends/Friends";
import Messages from "./components/Messages/Messages";


// import Dashboard from "../../components/Dashboard/Dashboard";
// import Friends from "../../components/Friends/Friends";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/user" component={AppPage} />
          <Route path="/mama" component={Dashboard} />
        </Switch>






      </div>
    </Router>
  );
};

export default App;

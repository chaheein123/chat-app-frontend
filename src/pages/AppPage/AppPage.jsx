import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./AppPage.scss";
import axios from "axios";

import Dashboard from "../../components/Dashboard/Dashboard";
import FriendsLeft from "../../components/Friends/FriendsLeft/FriendsLeft";
import FriendsRight from "../../components/Friends/FriendsRight/FriendsRight";
import Messages from "../../components/Messages/Messages";
import SmallMessages from "../../components/SmallMessages/SmallMessages";
import ChatRoom from "../../components/ChatRoom/ChatRoom";
import { MainNavBar } from "../../components/MainNavBar/MainNavBar";
import Landing from "../Landing/Landing";
import Authenticate from "../../services/Authenticate";

class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    Authenticate.authenticate.bind(this);

    return (
      <Switch>
        <React.Fragment>
          <Route exact path="/" component={Landing} />
          <div className="AppPage">
            <Route path="/user" component={MainNavBar} />
            <div className="app-body-wrapper">
              <div className="app-body-flex">
                <div className="app-body-left">
                  <Route exact path="/user/:id" component={Dashboard} />
                  <Route
                    exact
                    path="/user/:id/message"
                    component={SmallMessages}
                  />
                  <Route
                    exact
                    path="/user/:id/message/:msgid"
                    component={SmallMessages}
                  />
                  <Route
                    exact
                    path="/user/:id/friend"
                    component={FriendsLeft}
                  />
                </div>

                <div className="app-body-right">
                  <Route exact path="/user/:id" component={Messages} />
                  <Route
                    exact
                    path="/user/:id/message/:msgid"
                    component={ChatRoom}
                  />
                  <Route
                    exact
                    path="/user/:id/friend"
                    component={FriendsRight}
                  />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Switch>
    );
  }
}

export default AppPage;

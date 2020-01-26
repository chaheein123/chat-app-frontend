import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./AppPage.scss";
import axios from "axios";

import Dashboard from "../../components/Dashboard/Dashboard";
import Friends from "../../components/Friends/Friends";
import Messages from "../../components/Messages/Messages";
import SmallMessages from "../../components/SmallMessages/SmallMessages";
import ChatRoom from "../../components/ChatRoom/ChatRoom";
import { MainNavBar } from "../../components/MainNavBar/MainNavBar";
import Landing from '../Landing/Landing';

class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    if (!localStorage.userToken) {
      this.props.history.push("/")
    };

    let authPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/auth/authenticate",
          { userToken: localStorage.userToken }
        )
        .then(
          (response) => {
            if (Number(response.data.length) != 1) {
              reject()
            }
          }
        )
    });
    authPromise
      .catch(error => {
        localStorage.removeItem("userToken");
        this.props.history.push("/");
      }

      )
    return (
      <Switch>
        <React.Fragment>
          <Route exact path="/" component={Landing} />
          <div className="AppPage">
            <Route path="/user" component={MainNavBar} />
            <div className="app-body-wrapper">
              <div className="app-body-flex">
                <div className="app-body-left">
                  <Route exact path="/user" component={Dashboard} />
                  <Route exact path="/user/message/:id" component={SmallMessages} />
                </div>

                <div className="app-body-right">
                  <Route exact path="/user" component={Messages} />
                  <Route exact path="/user/message/:id" component={ChatRoom} />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Switch>
    )
  }
};

export default AppPage;

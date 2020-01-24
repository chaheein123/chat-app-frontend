import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./AppPage.scss";
import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dashboard from "../../components/Dashboard/Dashboard";
import Friends from "../../components/Friends/Friends";
import Messages from "../../components/Messages/Messages";
import SmallMessages from "../../components/SmallMessages/SmallMessages";
import ChatRoom from "../../components/ChatRoom/ChatRoom";
import { MainNavBar } from "../../components/MainNavBar/MainNavBar";
import { isAuthenticated } from "../../services/auth_service";

class AppPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  };

  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {
    console.log("yoyoyo this is the real local storage mayne", localStorage);

    let authPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/auth/authenticate",
          { userToken: localStorage.userToken }
        )
        .then(
          (response) => {
            if (Number(response.data.length) == 1) {
              console.log(response.data.length, "kekeke")
              // resolve()
            }
            else {
              reject()
            }
          }
        )
    });
    authPromise
      // .then(response => console.log("it's a success"))
      .catch(error => this.props.history.push("/"))

    // axios
    //   .post(
    //     "http://localhost:5000/auth/authenticate",
    //     { userToken }
    //   )
    //   .then(
    //     (response) => {
    //       if (Number(response.data.length) == 1) {
    //         console.log(response.data.length, "kekeke")
    //         return true
    //       }
    //       else {
    //         return false
    //       }
    //     }
    //   )





    // let authPromise = new Promise((resolve, reject) => {


    //   if (!isAuthenticated(localStorage.userToken)) {
    //     reject("rejected!");
    //   }
    //   else {
    //     resolve("resolved!!!");
    //   }
    // });

    // authPromise
    //   .then((response) => console.log(response, "yoyo"))
    //   .catch((error) =>
    //     this.props.history.push("/")
    //     // console.log(error, "abcdefg")
    //   )




  }

  render() {
    return (
      <Router>
        <div className="AppPage">
          <MainNavBar />
          <div className="app-body-wrapper">
            <div className="app-body-flex">
              <div className="app-body-left">
                <Switch>
                  <Route exact path="/user" component={Dashboard} />
                  <Route exact path="/user/message/:id" component={SmallMessages} />
                </Switch>
              </div>

              <div className="app-body-right">
                <Switch>
                  <Route exact path="/user" component={Messages} />
                  <Route exact path="/user/message/:id" component={ChatRoom} />
                </Switch>

              </div>
            </div>

          </div>
        </div>
      </Router>
    )
  }
};

export default AppPage;

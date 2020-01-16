import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./AppPage.scss";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dashboard from "../../components/Dashboard/Dashboard";
import Friends from "../../components/Friends/Friends";
import Messages from "../../components/Messages/Messages";
import SmallMessages from "../../components/SmallMessages/SmallMessages";
import ChatRoom from "../../components/ChatRoom/ChatRoom";
import { MainNavBar } from "../../components/MainNavBar/MainNavBar";

class AppPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // turnedOnId: this.props.history,

    }
  };

  componentWillReceiveProps(nextProps) {
    console.log("ㅇ아아아아아앙")
    // console.log(nextProps, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", this.props);
  }



  render() {

    // console.log(this.state.turnedOnId, "mamamami");
    // console.log(Number(this.props.location.pathname.split("/")[3], "mamamamama"));

    // if (this.state.turnedOnId != Number(this.props.location.pathname.split("/")[3], "mamamamama")) {

    // }
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

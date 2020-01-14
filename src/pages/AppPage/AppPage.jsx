import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./AppPage.scss";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dashboard from "../../components/Dashboard/Dashboard";
import Friends from "../../components/Friends/Friends";
import Messages from "../../components/Messages/Messages";
import { MainNavBar } from "../../components/MainNavBar/MainNavBar";

export const AppPage = () => {
  return (
    <Router>
      <div className="AppPage">
        <MainNavBar />
        <div className="app-body-wrapper">

          <Route exact path="/user" component={Dashboard} />
          <Route exact path="/user/messages" component={Messages} />

        </div>
      </div>
    </Router>
  )
};

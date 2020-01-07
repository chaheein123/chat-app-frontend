import React from 'react';
import './SignInLanding.styles.scss';

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { SignIn } from "../../components/SignIn/SignIn.component";
// import { SignUp } from "../../components/SignUp/SignUp.component";

import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/styles';

export const Landing = () => {

  return (
    <div className="Landing">
      <div className="navbar">
        <div className="navbar-items"><p>Why ichat?</p></div>
        <div className="navbar-items"><p>Solutions</p></div>
        <div className="navbar-items"><p>Resources</p></div>
        <div className="navbar-items"><p>Pricing</p></div>
        <div className="navbar-items"><p>Contacts</p></div>
      </div>

      <div className="Landing-background-pic">
        {/* <SignIn /> */}

        <div className="SignIn">
          <div className="login-wrapper">
            <h1>Log In</h1>
            <form noValidate autoComplete="off">
              <div className="user-inputs-wrappers">
                <TextField label="Email" className="user-inputs" type="email" />
              </div>

              <div className="user-inputs-wrappers">
                <TextField label="Password" className="user-inputs" type="password" />
              </div>

              <div className="login-button">
                <Button variant="contained" color="primary" >
                  <span className="login-text">Log In</span>
                </Button>
              </div>

              <Link to="/signup">
                <p className="signup-forgot-text">Don't have an account? Sign up here!</p>
              </Link>

              <Link to="/">
                <p className="signup-forgot-text">I forgot my password</p>
              </Link>
            </form>
          </div>




        </div >

      </div>

    </div>
  )

};
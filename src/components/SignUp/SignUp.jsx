import React, { useState } from 'react';

import { authService } from "../../services";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./SignUp.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div className="SignIn-SignUp">
        <div className="SignIn-SignUp-wrapper">
          <h1>Sign Up</h1>
          <form autoComplete="off">
            <div className="user-inputs-wrappers">
              <TextField label="Email" className="user-inputs" type="email" />
            </div>

            <div className="user-inputs-wrappers">
              <TextField label="Password" className="user-inputs" type="password" />
            </div>

            <div className="user-inputs-wrappers">
              <TextField label="Confirm Password" className="user-inputs" type="password" />
            </div>

            <div className="login-button">
              <Button className="login-button-in" variant="contained" color="primary" onClick={() => authService().signup()} >
                <span className="login-text">Sign Up</span>
              </Button>
            </div>
          </form>

          <div className="signup-forgot-wrapper">
            Already have an account?
            <Link to="/">
              <span className="signup-forgot-text"> Log In!</span>
            </Link>
            <br />
            <Link to="/">
              <span className="signup-forgot-text">I forgot my password</span>
            </Link>
          </div>
        </div>
      </div >
    )
  }
};

export default SignUp;

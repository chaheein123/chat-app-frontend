import React, { useState } from 'react';

import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./SignIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  handleSubmit = () => {
    console.log("hihi")
  }

  render() {
    return (
      <div className="SignIn-SignUp">
        <div className="SignIn-SignUp-wrapper">
          <h1>Log In</h1>
          <form autoComplete="off">
            <div className="user-inputs-wrappers">
              <TextField label="Email" className="user-inputs" type="email" />
            </div>

            <div className="user-inputs-wrappers">
              <TextField label="Password" className="user-inputs" type="password" />
            </div>

            <div className="login-button">
              <Button className="login-button-in" variant="contained" color="primary" onClick={this.handleSubmit} >
                <span className="login-text">Log In</span>
              </Button>
            </div>
          </form>

          <div className="signup-forgot-wrapper">
            Don't have an account?
            <Link to="/signup">
              <span className="signup-forgot-text"> Sign up here!</span>
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

export default SignIn;

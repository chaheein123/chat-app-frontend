import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./SignIn.styles.scss";

export const SignIn = () => {
  return (
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

          <Link to="/">
            <span className="signup-forgot-text">Don't have an account? Sign up here!</span>
          </Link>
          <br />
          <Link to="/">
            <span className="signup-forgot-text">I forgot my password</span>
          </Link>
        </form>
      </div>
    </div >
  )


}



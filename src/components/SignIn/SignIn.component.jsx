import React, { useState } from 'react';
import "./SignIn.styles.scss";

import { Link } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/styles';

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

          <Link to="/signup">
            <p className="signup-forgot-text">Don't have an account? Sign up here!</p>
          </Link>

          <Link to="/">
            <p className="signup-forgot-text">I forgot my password</p>
          </Link>
        </form>
      </div>




    </div >
  )
};



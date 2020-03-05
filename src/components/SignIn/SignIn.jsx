import React, { useState } from "react";
import Authenticate from "../../services/Authenticate";

import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./SignIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
      errorEmail: "",
      errorPw: ""
    };
  }

  handleSubmit = event => {
    console.log(event)
    event.preventDefault();

    if (!this.state.email) {
      this.setState({
        errorEmail: "Please enter your email"
      });
    }

    if (!this.state.pw) {
      this.setState({
        errorPw: "Please enter your password"
      });
    }

    if (this.state.email && this.state.pw) {
      Authenticate.login(this, this.state.email, this.state.pw);
    }
  };

  enterSubmit = event => {
    if (event.keyCode == 13) {
      this.handleSubmit(event)
    }
  }

  render() {
    return (
      <div
        className="SignIn-SignUp"
        onKeyDown={this.enterSubmit}
      >
        <div className="SignIn-SignUp-wrapper">
          <h1>Log In</h1>
          <form autoComplete="off">
            {this.state.errorEmail ? (
              <div className="sign-warning-msg">{this.state.errorEmail}</div>
            ) : null}
            <div className="user-inputs-wrappers">
              <TextField
                label="Email"
                className="user-inputs"
                type="email"
                onChange={event =>
                  this.setState({
                    email: event.target.value,
                    errorEmail: ""
                  })
                }
              />
            </div>
            {this.state.errorPw ? (
              <div className="sign-warning-msg">{this.state.errorPw}</div>
            ) : null}

            <div className="user-inputs-wrappers">
              <TextField
                label="Password"
                className="user-inputs"
                type="password"
                onChange={event =>
                  this.setState({
                    pw: event.target.value,
                    errorPw: ""
                  })
                }
              />
            </div>

            <div className="login-button">
              <Button
                className="login-button-in"
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
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
      </div>
    );
  }
}

export default SignIn;

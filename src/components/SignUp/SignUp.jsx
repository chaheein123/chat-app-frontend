import React from 'react';
import axios from "axios";

import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./SignUp.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
      confirmpw: "",
      errorEmail: "",
      errorPw: "",
      // errorConfirm: ""
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let signupPromise = new Promise((resolve, reject) => {

      let errstorage = {};
      if (!this.state.email) {
        errstorage["errorEmail"] = "** Please type in your email **";
        reject(errstorage);
      }
      else {
        if (!this.state.email.includes("@") || this.state.email.length < 7) {
          errstorage["errorEmail"] = `** ${this.state.email} is not a valid email **`
          reject(errstorage);
        }
      };

      if (!this.state.pw) {
        errstorage["errorPw"] = "** Please type in your password **";
        reject(errstorage);
      }

      else {
        if (this.state.pw != this.state.confirmpw && (this.state.pw && this.state.confirmpw)) {
          errstorage["errorPw"] = "** Your passwords don't match **";
          reject(errstorage);
        };
      };

      resolve();
    })

    signupPromise
      .then(
        (response) => {
          console.log(response);
          axios
            .post(
              "http://localhost:5000/auth/signup",
              {
                email: this.state.email,
                pw: this.state.pw
              }
            )
            .then(response => {
              console.log(response.data.errorEmail)
              if (response.data.errorEmail) {
                this.setState(
                  {
                    errorEmail: `** ${response.data.errorEmail} **`
                  }
                )
              };
            })
        })
      .catch(
        (error) => {
          console.log(error, "yoyoyo")
        }
      )


  }



  render() {
    return (
      <div className="SignIn-SignUp">
        <div className="SignIn-SignUp-wrapper">
          <h1>Sign Up</h1>
          <form autoComplete="off">
            {
              this.state.errorEmail
                ?
                <div className="sign-warning-msg">
                  {
                    this.state.errorEmail
                  }
                </div>
                :
                null
            }
            <div className="user-inputs-wrappers">
              <TextField
                label="Email"
                className="user-inputs"
                type="email"
                onChange={(event) => {
                  this.setState(
                    {
                      email: event.target.value,
                      errorEmail: ""
                    }
                  )
                }}
              />
            </div>

            {
              this.state.errorPw
                ?
                <div className="sign-warning-msg">
                  {
                    this.state.errorPw
                  }
                </div>
                :
                null
            }

            <div className="user-inputs-wrappers">
              <TextField
                label="Password"
                className="user-inputs"
                type="password"
                onChange={(event) => {
                  this.setState(
                    {
                      pw: event.target.value,
                      errorPw: ""
                    })
                }}
              />
            </div>

            <div className="user-inputs-wrappers">
              <TextField
                label="Confirm Password"
                className="user-inputs"
                type="password"
                onChange={(event) => {
                  this.setState({ confirmpw: event.target.value })
                }}
              />
            </div>

            <div className="login-button">
              <Button className="login-button-in" variant="contained" color="primary" onClick={this.handleSubmit} >
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

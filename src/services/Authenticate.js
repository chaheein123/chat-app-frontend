import axios from "../utils/httpClient";

class Authenticate {
  constructor() {

  }

  // Authenticate
  static authenticate() {

    if (!localStorage.userToken) {
      this.props.history.push("/")
    };

    let userid = this.props.location.pathname.split("/")[2];

    axios
      .post(
        "http://localhost:5000/auth/authenticate", {
          userToken: localStorage.userToken,
          userid
        }
      )
      .catch(
        (error) => {
          console.log("error", error);
          localStorage.clear();
          this.props.history.push("/");
        }
      )
  }

  // Log in
  static login(email, pw) {
    axios
      .post(
        "http://localhost:5000/auth/login", {
          email,
          pw
        }
      )
      .then(
        (response) => {
          if (response.data.errorEmail) {
            this.setState({
              errorEmail: response.data.errorEmail
            })
          }
          if (response.data.errorPw) {
            this.setState({
              errorPw: response.data.errorPw
            })
          }
          if (response.data.token) {
            localStorage.setItem("userToken", response.data.token);
            this.props.history.push(`/user/${response.data.id}`);
          }
        }
      )
      .catch(
        (error) => {
          this.setState({
            errorEmail: "Sorry, something went wrong"
          })
        }
      )
  };

  // Sign Up
  static signup(THIS) {
    THIS.errstorage = {};
    let signupPromise = new Promise((resolve, reject) => {
      if (!THIS.state.email) {
        THIS.errstorage["errorEmail"] = "** Please type in your email **";
        reject(THIS.errstorage);
      } else {
        if (!THIS.state.email.includes("@") || THIS.state.email.length < 7) {
          THIS.errstorage["errorEmail"] = `** ${THIS.state.email} is not a valid email **`;
          reject(THIS.errstorage)
        }
      };

      if (!THIS.state.pw) {
        THIS.errstorage["errorPw"] = "** Please type in your password **";
        reject(THIS.errstorage);
      } else {
        if (THIS.state.pw != THIS.state.confirmpw && (THIS.state.pw && THIS.state.confirmpw)) {
          THIS.errstorage["errorPw"] = "** Your passwords don't match **";
          reject(THIS.errstorage);
        };
        if (THIS.state.pw.length < 8) {
          THIS.errstorage["errorPw"] = "** Your passwords must be longer than 7 characters **";
          reject(THIS.errstorage);
        }
      };
      resolve();
    });

    signupPromise
      .then(
        (response) => {
          axios
            .post(
              "http://localhost:5000/auth/signup", {
                email: THIS.state.email,
                pw: THIS.state.pw
              }
            )
            .then(response => {
              if (response.data.errorEmail) {
                THIS.errstorage["errorEmail"] = `** ${THIS.state.email} is already used **`;

                THIS.setState({
                  errorEmail: THIS.errstorage["errorEmail"]
                });
                return;
              } else {
                localStorage.setItem("userToken", response.data.token);
                THIS.props.history.push(`/user/${response.data.id}`);
                return response;
              }
            })
        })
      .catch(
        (error) => {
          THIS.setState({
            errorEmail: error.errorEmail,
            errorPw: error.errorPw
          })
        }
      )
  }
};

export default Authenticate;
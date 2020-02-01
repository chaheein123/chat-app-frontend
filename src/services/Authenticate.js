import axios from "../utils/httpClient";

class Authenticate {
  constructor() {

  }

  // Log in
  static login(email, pw, THIS) {
    axios
      .post(
        "http://localhost:5000/auth/login",
        { email, pw }
      )
      .then(
        (response) => {
          if (response.data.errorEmail) {
            THIS.setState({ errorEmail: response.data.errorEmail })
          }
          if (response.data.errorPw) {
            THIS.setState({ errorPw: response.data.errorPw })
          }
          if (response.data.token) {
            localStorage.setItem("userToken", response.data.token);
            THIS.props.history.push("/user");
          }
        }
      )
      .catch(
        (error) => {
          THIS.setState({ errorEmail: "Sorry, something went wrong" })
        }
      )
  };

  // Sign Up
  static signup(email, pw, THIS) {





  }

}

export default Authenticate;

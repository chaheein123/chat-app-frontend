import axios from '../utils/httpClient';

class Authenticate {
  constructor() {

  }

  // Authenticate
  static authenticate(THIS) {
    if (!localStorage.userToken) {
      THIS.props.history.push('/');
    }

    const userid = THIS.props.location.pathname.split('/')[2];

    axios
      .post(
        `${process.env.API_URL}/auth/authenticate`, {
        userToken: localStorage.userToken,
        userid,
      },
      )
      .catch(
        (error) => {
          console.log('error', error);
          localStorage.clear();
          THIS.props.history.push('/');
        },
      );
  }

  // Log in
  static login(THIS, email, pw) {
    axios
      .post(
        `${process.env.API_URL}/auth/login`, {
        email,
        pw,
      },
      )
      .then(
        (response) => {
          if (response.data.errorEmail) {
            THIS.setState({
              errorEmail: response.data.errorEmail,
            });
          }
          if (response.data.errorPw) {
            THIS.setState({
              errorPw: response.data.errorPw,
            });
          }
          if (response.data.token) {
            localStorage.setItem('userToken', response.data.token);
            THIS.props.history.push(`/user/${response.data.id}`);
          }
        },
      )
      .catch(
        (error) => {
          THIS.setState({
            errorEmail: 'Sorry, something went wrong',
          });
        },
      );
  }

  // Sign Up
  static signup(THIS) {
    THIS.errstorage = {};
    const signupPromise = new Promise((resolve, reject) => {
      if (!THIS.state.email) {
        THIS.errstorage.errorEmail = '** Please type in your email **';
        reject(THIS.errstorage);
      } else if (!THIS.state.email.includes('@') || THIS.state.email.length < 7) {
        THIS.errstorage.errorEmail = `** ${THIS.state.email} is not a valid email **`;
        reject(THIS.errstorage);
      }

      if (!THIS.state.pw) {
        THIS.errstorage.errorPw = '** Please type in your password **';
        reject(THIS.errstorage);
      } else {
        if (THIS.state.pw != THIS.state.confirmpw && (THIS.state.pw && THIS.state.confirmpw)) {
          THIS.errstorage.errorPw = "** Your passwords don't match **";
          reject(THIS.errstorage);
        }
        if (THIS.state.pw.length < 8) {
          THIS.errstorage.errorPw = '** Your passwords must be longer than 7 characters **';
          reject(THIS.errstorage);
        }
      }
      resolve();
    });

    signupPromise
      .then(
        (response) => {
          axios
            .post(
              `${process.env.API_URL}/auth/signup`, {
              email: THIS.state.email,
              pw: THIS.state.pw,
            },
            )
            .then((response) => {
              if (response.data.errorEmail) {
                THIS.errstorage.errorEmail = `** ${THIS.state.email} is already used **`;

                THIS.setState({
                  errorEmail: THIS.errstorage.errorEmail,
                });
              } else {
                localStorage.setItem('userToken', response.data.token);
                THIS.props.history.push(`/user/${response.data.id}`);
                return response;
              }
            });
        },
      )
      .catch(
        (error) => {
          THIS.setState({
            errorEmail: error.errorEmail,
            errorPw: error.errorPw,
          });
        },
      );
  }
}

export default Authenticate;

import httpClient from "../utils/httpClient";

let instance = null;

class AuthService {

  signup = () => {
    httpClient.post("/user", {
      email: 'heein@gmail.com',
      password: '123'
    });
  }


};

export default () => {
  if (!instance) {
    instance = new AuthService();
  }

  return instance;
};
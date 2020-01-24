import axios from "axios";

export const isAuthenticated = (userToken) => {
  // console.log("hi");
  axios
    .post(
      "http://localhost:5000/auth/authenticate",
      { userToken }
    )
    .then(
      (response) => {
        if (Number(response.data.length) == 1) {
          console.log(response.data.length, "kekeke")
          return true
        }
        else {
          return false
        }
      }
    )
}
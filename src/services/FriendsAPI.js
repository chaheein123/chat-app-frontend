import axios from "../utils/httpClient";

class FriendsAPI {

  static findAllUsers(THIS) {
    let userid = THIS.props.location.pathname.split("/")[2];
    let usersPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/friends/findusers",
          { usertoken: localStorage.getItem("userToken"), userid }
        )
        .then(
          (response) => {
            resolve(response);
          }
        )
        .catch(
          (error) => {
            console.log(error);
            reject();
          }
        )
    });

    usersPromise
      .then(
        (response) => {
          let requestSentUsers = new Set();
          for (let user of response["data"]["requestSentUsers"]) {
            requestSentUsers.add(user.useremail)
          };

          let requestReceivedUsers = new Set();
          for (let user of response["data"]["requestReceivedUsers"]) {
            requestReceivedUsers.add(user.useremail)
          };

          let friends = new Set();
          for (let user of response["data"]["friends"]) {
            friends.add(user.useremail)
          };

          THIS.setState({
            users: response["data"]["allusers"],
            filteredUsers: response["data"]["allusers"],
            requestSentUsers,
            requestReceivedUsers,
            friends
          })
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  };

  static sendRequest(friendemail, userid, THIS) {
    let requestPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/friends/addfriends",
          { friendemail, userid }
        )
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          console.log(error, "this is the error")
        })

    });

    requestPromise
      .then(THIS.setState({ sentRequest: true }))
  }

  static cancelRequest(friendemail, userid, THIS) {
    let requestPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/friends/cancelrequest",
          { friendemail, userid }
        )
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          console.log(error, "this is the error")
        })
    });

    requestPromise
      .then(THIS.setState({ sentRequest: false }))
  }

  static acceptRequest(friendemail, userid, THIS) {
    let acceptPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/friends/acceptrequest",
          { friendemail, userid }
        )
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          console.log(error, "this is the error")
        });
    });

    acceptPromise
      .then(
        THIS.setState({
          isFriends: true,
          sentRequest: false,
          receivedRequest: false
        }));
  };

  static allOtherUsers(THIS) {
    let userid = THIS.props.location.pathname.split("/")[2];
    axios
      .get(`http://localhost:5000/friends/${userid}/allOtherUsers`)
      .then(response => {

        THIS.setState(
          {
            recommendedUsers: response.data.recommendedUsers,
            pendingUsers: response.data.pendingUsers
          }
        )
      })
  }
};

export default FriendsAPI;

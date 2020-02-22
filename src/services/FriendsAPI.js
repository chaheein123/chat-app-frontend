import axios from "../utils/httpClient";

class FriendsAPI {

  static findAllUsers() {
    let userid = this.props.location.pathname.split("/")[2];
    let usersPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/friends/findusers", {
          usertoken: localStorage.getItem("userToken"),
          userid
        }
        )
        .then(
          (response) => {
            resolve(response);
          }
        )
        .catch(
          (error) => {
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

          this.setState({
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
          this.props.history.push("/");
        }
      )
  };

  static sendRequest(friendemail, userid, index) {
    let requestPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/friends/addfriends", {
          usertoken: localStorage.getItem("userToken"),
          friendemail,
          userid
        }
        )
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          console.log(error, "this is the error")
        })
    });

    requestPromise
      .then(
        this.setState({
          sentRequest: true
        })
      );

    if (index >= 0) {
      let recommendedUsers = [...this.state.recommendedUsers];
      recommendedUsers.splice(index, 1);
      this.setState({
        recommendedUsers
      })
    }


  }

  static cancelRequest(friendemail, userid) {
    let requestPromise = new Promise((resolve, reject) => {
      axios
        .delete(
          "http://localhost:5000/friends/cancelrequest", {
          data: {
            usertoken: localStorage.getItem("userToken"),
            friendemail,
            userid
          }
        }
        )
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          console.log(error, "this is the error")
        })
    });

    requestPromise
      .then(this.setState({
        sentRequest: false
      }))
  }

  static acceptRequest(friendemail, userid) {
    let acceptPromise = new Promise((resolve, reject) => {
      axios
        .put(
          "http://localhost:5000/friends/acceptrequest", {
          usertoken: localStorage.getItem("userToken"),
          friendemail,
          userid
        }
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
        this.setState({
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

        THIS.setState({
          recommendedUsers: response.data.recommendedUsers,
          pendingUsers: response.data.pendingUsers
        }, () => { console.log(THIS.state.recommendedUsers) })
      })
  }
};

export default FriendsAPI;
import axios from '../utils/httpClient';

class FriendsAPI {
  static findAllUsers() {
    const userid = this.props.location.pathname.split('/')[2];
    const usersPromise = new Promise((resolve, reject) => {
      axios
        .post(
          `${process.env.API_URL}/friends/findusers`, {
          usertoken: localStorage.getItem('userToken'),
          userid,
        },
        )
        .then(
          (response) => {
            resolve(response);
          },
        )
        .catch(
          (error) => {
            reject();
          },
        );
    });

    usersPromise
      .then(
        (response) => {
          const requestSentUsers = new Set();
          for (const user of response.data.requestSentUsers) {
            requestSentUsers.add(user.useremail);
          }

          const requestReceivedUsers = new Set();
          for (const user of response.data.requestReceivedUsers) {
            requestReceivedUsers.add(user.useremail);
          }

          const friends = new Set();
          for (const user of response.data.friends) {
            friends.add(user.useremail);
          }

          this.setState({
            users: response.data.allusers,
            filteredUsers: response.data.allusers,
            requestSentUsers,
            requestReceivedUsers,
            friends,
          });
        },
      )
      .catch(
        (error) => {
          this.props.history.push('/');
        },
      );
  }

  static async sendRequest(friendemail, userid, index) {
    if (index >= 0) {
      const recommendedUsers = [...this.state.recommendedUsers];
      recommendedUsers.splice(index, 1);
      await this.setState({
        recommendedUsers,
      });
    }

    return await axios
      .post(
        `${process.env.API_URL}/friends/addfriends`, {
        usertoken: localStorage.getItem('userToken'),
        friendemail,
        userid,
      },
      );
  }

  static async cancelRequest(friendemail, userid) {
    return axios
      .delete(
        `${process.env.API_URL}/friends/cancelrequest`, {
        data: {
          usertoken: localStorage.getItem('userToken'),
          friendemail,
          userid,
        },
      },
      );
  }

  static async acceptRequest(friendemail, userid) {
    return await axios
      .put(
        `${process.env.API_URL}/friends/acceptrequest`, {
        usertoken: localStorage.getItem('userToken'),
        friendemail,
        userid,
      },
      );
  }

  static allOtherUsers(THIS) {
    const userid = THIS.props.location.pathname.split('/')[2];
    axios
      .get(`${process.env.API_URL}/friends/${userid}/allOtherUsers`)
      .then((response) => {
        THIS.setState({
          recommendedUsers: response.data.recommendedUsers,
          pendingUsers: response.data.pendingUsers,
        });
      });
  }

  static async findAllFriends(ownId) {
    const allFriends = await axios
      .get(`${process.env.API_URL}/friends/allFriends`, {
        params: {
          ownId,
          userToken: localStorage.getItem('userToken'),
        },
      });
    return allFriends;
  }
}

export default FriendsAPI;

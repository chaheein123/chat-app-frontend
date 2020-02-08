import axios from "../utils/httpClient";

class MessagesAPI {

  static allRecentMessages(userid, THIS) {

    let chatPromise = new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:5000/chats/allchats/${userid}`)
        .then(response => {
          resolve(response)
        })
    });
    chatPromise
      .then(response => {
        THIS.setState({ chatData: response["data"] })
      })
  }

};

export default MessagesAPI;

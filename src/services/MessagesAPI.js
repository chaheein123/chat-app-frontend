import axios from '../utils/httpClient';

class MessagesAPI {
  static allRecentMessages(userid, THIS) {
    const chatPromise = new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/chats/allchats`, {
          params: {
            usertoken: localStorage.getItem('userToken'),
            ownId: userid,
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          THIS.props.history.push('/');
        });
    });
    chatPromise
      .then((response) => {
        THIS.setState({ chatData: response.data });
      });
  }

  static chatroom(THIS) {
    const chatPromise = new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/chats/${THIS.state.ownId}/chatroom/${THIS.state.msgId}`, {
          params: {
            usertoken: localStorage.getItem('userToken'),
          },
        })
        .then((response) => resolve(response));
    });

    chatPromise
      .then((response) => {
        if (JSON.stringify(THIS.state.chatters) != JSON.stringify(response.data.chatters)) {
          THIS.setState({
            chatters: response.data.chatters,
            messages: response.data.messages,
          });
        }
      });
  }

  static chatroomMessage(ownId, chatroomId, msg, THIS) {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/chats/sentmsg`,
        {
          ownId,
          chatroomId,
          msg,
          usertoken: localStorage.getItem('userToken'),
        },
      )
      .then((response) => THIS.setState({ msgInput: null }))
      .catch((error) => console.log(error));
  }

  static async updateMsgRead(msgId, ownId) {
    return await axios
      .get(`${process.env.REACT_APP_API_URL}/chats/chatroomId/${msgId}/ownId/${ownId}`);
  }

  static async readMsg(msgId, ownId) {
    await axios.put(`${process.env.REACT_APP_API_URL}/chats/chatroomId/${msgId}/ownId/${ownId}`);
    this.setState({
      unreadMsgs: 0,
    });
  }

  static async getChatId(ownId, userId) {
    return await
      axios
        .get(`${process.env.REACT_APP_API_URL}/chats/${ownId}/${userId}`);
  }
}

export default MessagesAPI;

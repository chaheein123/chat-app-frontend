import React from 'react';
import { Link } from 'react-router-dom';
import Message from "./Message/Message";

import MessagesAPI from "../../services/MessagesAPI";

import "./Messages.scss";

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: null,
      userid: this.props.location.pathname.split("/")[2]
    };

  };

  componentDidMount() {

    MessagesAPI.allRecentMessages(this.state.userid, this);
  };

  reorderMsg = (chatroomId) => {
    let chatData = this.state.chatData;

    let chatIndex = chatData.findIndex(chat => chat.chatroomid == chatroomId);

    let temp = chatData[chatIndex];
    chatData.splice(chatIndex, 1);
    chatData.unshift(temp);

    this.setState({
      chatData
    })
  }

  render() {
    return (
      <div className="Messages">

        {
          this.state.chatData ?
            this.state.chatData.map((chat) => {
              return (
                <Link
                  to={`/user/${this.state.userid}/message/${chat.chatroomid}`}
                  className="Applinks"
                  key={chat.chatroomid}
                >
                  <Message
                    key={chat.chatroomid}
                    chat={chat}
                    ownId={this.state.userid}
                    reorderMsg={this.reorderMsg.bind(this, chat.chatroomid)}
                  />
                </Link>
              )
            }) :
            null
        }

      </div>
    )
  }
};

export default Messages;

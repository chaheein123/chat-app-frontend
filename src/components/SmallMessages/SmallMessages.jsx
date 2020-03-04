import React from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

import "./SmallMessages.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SmallMessage from "../SmallMessage/SmallMessage";

import MessagesAPI from "../../services/MessagesAPI";

class SmallMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: null,
      clickedChatId: this.props.match.params.msgid,
      userid: this.props.match.params.id
    };
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

  componentDidMount() {
    let userid = this.props.location.pathname.split("/")[2];
    MessagesAPI.allRecentMessages(userid, this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      clickedChatId: nextProps.match.params.msgid
    });
  }

  render() {
    return (
      <div className="SmallMessages">
        {this.state.chatData ?

          this.state.chatData.length > 0 ?

            this.state.chatData.map(chat => {
              return (
                <Link
                  to={`/user/${this.state.userid}/message/${chat.chatroomid}`}
                  className="Applinks"
                  key={chat.chatroomid}
                >
                  <SmallMessage
                    key={chat.chatroomid}
                    id={chat.chatroomid}
                    userName={chat.username}
                    userEmail={chat.useremail}
                    msgContent={chat.msgcontent}
                    sentTime={chat.createdat}
                    clickedChatId={this.state.clickedChatId}
                    ownId={this.props.match.params.id}
                    reorderMsg={this.reorderMsg.bind(this, chat.chatroomid)}
                  />
                </Link>
              );
            }) :

            <div className="smallmessages-nofriends">
              Add friends to chat
            </div> :
          null
        }
      </div>
    );
  }
}

export default SmallMessages;

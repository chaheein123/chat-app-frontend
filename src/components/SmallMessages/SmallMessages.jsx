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
        {!this.state.chatData
          ? null
          : this.state.chatData.map(chat => {
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
                />
              </Link>
            );
          })}
      </div>
    );
  }
}

export default SmallMessages;

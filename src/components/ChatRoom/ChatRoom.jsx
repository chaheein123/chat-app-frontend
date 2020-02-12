import React from 'react';
import "./ChatRoom.scss";

import { ChatRoomTop } from "./ChatRoomTop/ChatRoomTop";
import { ChatRoomMsgs } from "./ChatRoomMsgs/ChatRoomMsgs";
import ChatRoomMessager from "./ChatRoomMessager/ChatRoomMessager";

import io from "socket.io-client";
import MessagesAPI from "../../services/MessagesAPI";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msgId: this.props.match.params.msgid,
      ownId: this.props.match.params.id,

      // for the chatrooms below
      chatters: null,
      messages: null,
    };

    // this.ENDPOINT = "http://localhost:5000";
  };

  componentDidMount() {
    MessagesAPI.chatroom(this);
    // let socket = io(this.ENDPOINT);
    // console.log(socket);

  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.match.params.msgid != this.props.match.params.msgid) {
      this.setState({
        msgId: nextProps.match.params.msgid
      }, MessagesAPI.chatroom.bind(null, this))
    };
  };

  render() {
    return (
      <div className="ChatRoom">

        <ChatRoomTop
          chatters={this.state.chatters}
        />
        <ChatRoomMsgs
          messages={this.state.messages}
          ownId={this.state.ownId}
        />
        <ChatRoomMessager
          chatters={this.state.chatters}
          chatroomId={this.state.msgId}
          ownId={this.state.ownId}
        />
      </div>
    )
  }
};

export default ChatRoom;

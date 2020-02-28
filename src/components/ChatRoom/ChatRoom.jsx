import React from "react";
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
      messages: null
    };
    this.socket = null;
  };

  componentDidMount() {
    this.socket = io("http://localhost:5000");
    this.socket.on("chatroomIdRequest", () => {
      this.socket.emit("sendingChatroomId", this.state.msgId)
    });

    this.socket.on("sendMsg", data => {
      let { messages } = this.state;
      messages.push(data);
      this.setState({
        messages
      })
    });

    MessagesAPI.chatroom(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.msgid != this.props.match.params.msgid) {
      this.setState(
        {
          msgId: nextProps.match.params.msgid
        },
        () => {
          MessagesAPI.chatroom(this);
          this.socket.disconnect();
          this.socket = io("http://localhost:5000");
          this.socket.on("chatroomIdRequest", () => {
            this.socket.emit("sendingChatroomId", this.state.msgId)
          });

          this.socket.on("sendMsg", data => {
            let { messages } = this.state;
            messages.push(data);
            this.setState({
              messages
            })
          })
        }
      );
    }
  };

  componentWillUnmount() {
    this.socket.disconnect();
  }

  render() {
    return (
      <div className="ChatRoom">
        <ChatRoomTop chatters={this.state.chatters} />
        <ChatRoomMsgs messages={this.state.messages} ownId={this.state.ownId} />
        <ChatRoomMessager
          chatters={this.state.chatters}
          chatroomId={this.state.msgId}
          ownId={this.state.ownId}
          theSocket={this.socket}
        />
      </div>
    );
  }
}

export default ChatRoom;

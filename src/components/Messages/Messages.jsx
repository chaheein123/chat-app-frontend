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

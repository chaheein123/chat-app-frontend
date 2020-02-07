import React from 'react';
import "./ChatRoom.scss";

import { DATA } from "../../data";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: DATA,
      sentId: this.props.match.params.msgid,
    }
  };

  componentWillReceiveProps(nextProps) {

    if (nextProps.match.params.msgid != this.props.match.params.msgid) {
      this.setState({
        sentId: nextProps.match.params.msgid
      })
    };
  };

  render() {
    return (
      <div className="ChatRoom">
        {
          this.state.sentId
        }
        {
          this.state.chatData.map((chat) => {
            if (chat.sentBy == this.state.sentId) {
              return (
                <div>
                  {chat.msgContent}
                </div>
              )
            }

          })
        }
      </div>
    )
  }
};

export default ChatRoom;

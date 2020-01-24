import React from 'react';
import "./ChatRoom.scss";

import { DATA } from "../../data";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: DATA,
      sentId: this.props.match.params.id,
      // pathHistory: this.props.history.location.pathname

    }
  };

  componentWillReceiveProps(nextProps) {

    if (nextProps.match.params.id != this.props.match.params.id) {
      this.setState({
        sentId: nextProps.match.params.id
      })
    };
  }

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

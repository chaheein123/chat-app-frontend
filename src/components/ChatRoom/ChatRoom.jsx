import React from 'react';
import "./ChatRoom.scss";

import { DATA } from "../../data";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

      </div>
    )
  }
};

export default ChatRoom;

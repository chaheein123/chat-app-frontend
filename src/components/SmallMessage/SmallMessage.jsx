import React from 'react';
import "./SmallMessage.scss";

import io from "socket.io-client";

class SmallMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      turnedOn: false,
      msgContent: this.props.msgContent,
      createdAt: this.props.sentTime
    };
    this.socket = null;
  }

  componentDidMount() {
    if (this.state.id == this.props.clickedChatId) {
      this.setState({ turnedOn: true })
    }

    this.socket = io("http://localhost:5000");
    this.socket.on("chatroomIdRequest", () => {
      this.socket.emit("sendingChatroomId", this.state.id)
    });

    this.socket.on("sendMsg", data => {
      this.setState({
        msgContent: data.msgcontent,
        createdAt: data.createdat
      })
    });
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.clickedChatId == this.state.id) {
      this.setState({ turnedOn: true });
    }

    else {
      this.setState({ turnedOn: false })
    }
  }

  render() {

    return (
      <div
        className="SmallMessage"
      >
        <div
          className={
            !this.state.turnedOn ? "SmallMessage-inboxes" : "SmallMessage-inboxes SmallMessageTurned"
          }
        >
          <div className="SmallMessage-inboxes-middle">
            <div className="SmallMessage-inboxes-sentTo">
              {
                this.props.userName ?
                  <span>{this.props.userName} ({this.props.userEmail})</span> :
                  <span>{this.props.userEmail}</span>
              }
            </div>

            <div className="SmallMessage-inboxes-msgContent">
              {
                this.state.msgContent ?
                  <span>
                    {
                      this.state.msgContent.length < 52 ?
                        this.state.msgContent :
                        this.state.msgContent.substring(0, 40) + " ..."
                    }
                  </span> :
                  <span>You are now friends</span>
              }
            </div>
          </div>

          <div className="SmallMessage-inboxes-sentTime">
            {
              this.state.createdAt ?
                <span>{this.state.createdAt}</span> :
                <span>Start a conversation</span>
            }
          </div>
        </div>
      </div>
    )
  }
};

export default SmallMessage;
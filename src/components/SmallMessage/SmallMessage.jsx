import React from 'react';
import "./SmallMessage.scss";
import MessagesAPI from "../../services/MessagesAPI";

import io from "socket.io-client";

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -16,
    top: 9,
    border: '2px solid rgb(172, 169, 169)',
    padding: '0 4px',
    backgroundColor: 'rgb(245, 158, 172)',
    fontWeight: 'bolder'
  },
}))(Badge);

class SmallMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      turnedOn: false,
      msgContent: this.props.msgContent,
      createdAt: this.props.sentTime,
      unreadMsgs: 0,
      ownId: this.props.ownId
    };
    this.socket = null;
  }

  componentDidMount() {

    MessagesAPI
      .updateMsgRead(this.state.id, this.state.ownId)
      .then(response => {
        this.setState({
          unreadMsgs: Number(response.data.total)
        })
      });

    if (this.state.id == this.props.clickedChatId) {
      this.setState({ turnedOn: true })
    };

    // Sockets
    this.socket = io("http://localhost:5000");
    this.socket.on("chatroomIdRequest", () => {
      this.socket.emit("sendingChatroomId", this.state.id)
    });

    this.socket.on("sendMsg", data => {
      this.setState({
        msgContent: data.msgcontent,
        createdAt: data.createdat,
      })
    });

    this.socket.on("receivedMsg", (data) => {
      if (this.state.ownId != data && !this.state.turnedOn) {
        this.setState({
          unreadMsgs: this.state.unreadMsgs + 1
        })
      }
    })
  };

  componentWillReceiveProps(nextProps) {

    if (nextProps.clickedChatId == this.state.id) {
      this.setState({ turnedOn: true });
    }

    else {
      this.setState({ turnedOn: false })
    }
  };

  componentWillUnmount() {
    this.socket.disconnect();
  };

  render() {

    return (
      <div
        className="SmallMessage"
        onClick={MessagesAPI.readMsg.bind(this, this.state.id, this.state.ownId)}
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
                  <span>{this.props.userName}
                    ({
                      this.props.userEmail.length > 30 ? this.props.userEmail.substring(0, 14) + "..." + this.props.userEmail.substring(this.props.userEmail.length - 15, this.props.length) :
                        this.props.userEmail
                    })
                  </span>
                  :
                  <span>{
                    this.props.userEmail.length > 30 ? this.props.userEmail.substring(0, 14) + "..." + this.props.userEmail.substring(this.props.userEmail.length - 15, this.props.length) :
                      this.props.userEmail
                  }</span>
              }
            </div>

            <div className="SmallMessage-inboxes-msgContent">
              {
                this.state.msgContent ?
                  <StyledBadge
                    badgeContent={this.state.unreadMsgs}
                  >
                    <span>
                      {
                        this.state.msgContent.length < 37 ?
                          this.state.msgContent :
                          this.state.msgContent.substring(0, 34) + " ..."
                      }
                    </span>
                  </StyledBadge>
                  :
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
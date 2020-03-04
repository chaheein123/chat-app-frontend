import React from 'react';
import io from "socket.io-client";

import MessagesAPI from "../../../services/MessagesAPI";

import "./Message.scss";

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

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msgContent: this.props.chat.msgcontent,
      createdAt: this.props.chat.createdat,
      unreadMsgs: 0,
      ownId: this.props.ownId,
      imgUrl: this.props.imgUrl
    };

    this.socket = null;
  };

  componentDidMount() {
    this.socket = io("http://localhost:5000");
    this.socket.on("chatroomIdRequest", () => {
      this.socket.emit("sendingChatroomId", this.props.chat.chatroomid)
    });

    this.socket.on("sendMsg", data => {
      this.setState({
        msgContent: data.msgcontent,
        createdAt: data.createdat,
      })
    });

    this.socket.on("receivedMsg", (data) => {
      if (this.state.ownId != data) {
        this.props.reorderMsg();
        this.setState({
          unreadMsgs: this.state.unreadMsgs + 1
        })
      }
    });

    MessagesAPI
      .updateMsgRead(this.props.chat.chatroomid, this.state.ownId)
      .then(response => {
        this.setState({
          unreadMsgs: Number(response.data.total)
        })
      })
  };

  componentWillUnmount() {
    this.socket.disconnect();
  }

  render() {
    return (
      <div className="Message">

        <div className="Messages-inboxes">
          <div className="Messages-inboxes-backgroundhover">
            <div className="Messages-inboxes-pics">
              {
                this.state.imgUrl ?
                  <img className="message-portrait" src={this.state.imgUrl} /> :
                  null
              }

            </div>
            <div className="Messages-inboxes-middle">
              <div className="Messages-inboxes-sentTo">
                {
                  this.props.chat.username ?
                    <span>
                      {this.props.chat.username} ({this.props.chat.useremail.length > 30 ?
                        this.props.chat.useremail.substring(0, 14) + "..." + this.props.chat.useremail.substring(this.props.chat.useremail.length - 15, this.props.chat.useremail.length) :
                        this.props.chat.useremail})
                    </span> :
                    <span>
                      {
                        this.props.chat.useremail.length > 30 ?
                          this.props.chat.useremail.substring(0, 14) + "..." + this.props.chat.useremail.substring(this.props.chat.useremail.length - 15, this.props.chat.useremail.length) :
                          this.props.chat.useremail
                      }
                    </span>
                }
              </div>

              <div className="Messages-inboxes-msgContent">
                {
                  this.state.msgContent ?
                    this.state.msgContent.length > 50 ?
                      <StyledBadge
                        badgeContent={this.state.unreadMsgs}
                      >
                        {this.state.msgContent.substring(0, 44) + " ..."}
                      </StyledBadge> :
                      <StyledBadge
                        badgeContent={this.state.unreadMsgs}
                      >
                        {this.state.msgContent}
                      </StyledBadge>
                    :
                    null
                }
              </div>
            </div>

            <div className="Messages-inboxes-sentTime">
              {
                this.state.createdAt ?
                  <span>{this.state.createdAt}</span> :
                  <span>Start conversation</span>
              }
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default Message;

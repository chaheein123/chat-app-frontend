import React from 'react';
import { Link } from 'react-router-dom';
import "./SmallMessages.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "../../utils/httpClient";

import SmallMessage from "../SmallMessage/SmallMessage";
import { DATA } from "../../data";

class SmallMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: null,
      clickedChatId: this.props.match.params.msgid,
      userid: this.props.match.params.id
    };
  };

  componentDidMount() {
    let userid = this.props.location.pathname.split("/")[2];
    let chatPromise = new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:5000/chats/allchats/${userid}`)
        .then(response => {
          resolve(response)
        })
    });
    chatPromise
      .then(response => {
        this.setState({ chatData: response["data"] })
      })
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      clickedChatId: nextProps.match.params.msgid
    })
  };

  render() {
    console.log(this.state.chatData, "rendered chatdata")
    return (
      <div className="SmallMessages">
        {
          !this.state.chatData
            ?
            null
            :
            this.state.chatData.map((chat) => {
              return (
                <Link to={`/user/${this.state.userid}/message/${chat.chatroomid}`}>

                  <SmallMessage
                    key={chat.chatroomid}
                    id={chat.chatroomid}
                    sentTo={chat.username}
                    msgContent={chat.msgcontent}
                    sentTime={chat.createdat}
                    clickedChatId={this.state.clickedChatId}
                  />

                </Link>
              )
            })
        }
      </div>
    )
  }
};

export default SmallMessages;

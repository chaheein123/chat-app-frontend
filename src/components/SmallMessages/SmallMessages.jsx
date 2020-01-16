import React from 'react';
import { Link } from 'react-router-dom';
import "./SmallMessages.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SmallMessage from "../SmallMessage/SmallMessage";
import { DATA } from "../../data";

class SmallMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: DATA,
      clickedChatId: this.props.match.params.id,
    };
  };

  componentWillReceiveProps(nextProps) {

    this.setState({
      clickedChatId: nextProps.match.params.id
    })
  };

  render() {
    console.log("wefwefwefwfwwww", this.state.clickedChatId)
    return (
      <div className="SmallMessages">
        {
          this.state.chatData.map((chat, index) => {
            return (
              <Link to={`/user/message/${chat.id}`}>

                <SmallMessage
                  key={index}
                  id={chat.id}
                  sentTo={chat.sentTo}
                  msgContent={chat.msgContent}
                  sentTime={chat.sentTime}
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

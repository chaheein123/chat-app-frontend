import React from 'react';
import { Link } from 'react-router-dom';
import "./Messages.scss";

import MessagesAPI from "../../services/MessagesAPI";

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
  }

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
                  <div className="Messages-inboxes">
                    <div className="Messages-inboxes-backgroundhover">
                      <div className="Messages-inboxes-pics">
                      </div>

                      <div className="Messages-inboxes-middle">
                        <div className="Messages-inboxes-sentTo">
                          {
                            chat.username ?
                              <span>
                                {chat.username} ({chat.useremail})
                              </span> :
                              <span>
                                {chat.useremail}
                              </span>
                          }
                        </div>

                        <div className="Messages-inboxes-msgContent">
                          {chat.msgcontent}
                        </div>
                      </div>

                      <div className="Messages-inboxes-sentTime">
                        {
                          chat.createdat ?
                            <span>{chat.createdat}</span> :
                            <span>Start conversation</span>
                        }
                      </div>
                    </div>
                  </div>
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

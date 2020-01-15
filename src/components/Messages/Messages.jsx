import React from 'react';
import { Link } from 'react-router-dom';
import "./Messages.scss";

import { DATA } from "../../data";

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: DATA
    };
  };

  render() {
    console.log(this.state.chatData, "wefwefwef")
    return (
      <div className="Messages">

        {
          this.state.chatData.map((chat) => {
            return (
              <Link to={`/user/message/${chat.id}`}>
                <div className="Messages-inboxes">
                  <div className="Messages-inboxes-pics">
                  </div>

                  <div className="Messages-inboxes-middle">
                    <div className="Messages-inboxes-sentTo">
                      {chat.sentTo}
                    </div>

                    <div className="Messages-inboxes-msgContent">
                      {chat.msgContent}
                    </div>
                  </div>

                  <div className="Messages-inboxes-sentTime">
                    {chat.sentTime}
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    )
  }
};

export default Messages;

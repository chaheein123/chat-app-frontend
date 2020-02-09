import React from "react";

import "./ChatRoomMsgs.scss";

export const ChatRoomMsgs = (props) => {

  console.log(props);


  return (

    <div className="ChatRoomMsgs">
      {
        props.messages ?
          props.messages.map(message =>
            <div
              key={message.id}
              className="msgs-chatter-wrapper"
            >
              <div
                className="msgs-chatter-portrait"
              >
              </div>
              <div
                className="msgs-chatter-namecontent-wrapper"
              >
                <div className="msgs-chatter-name">
                  {
                    message.sentby == props.ownId ?
                      <p>You</p> :
                      <p>
                        {
                          message.username ?
                            message.username :
                            message.useremail
                        }
                      </p>
                  }
                </div>
                <div className="msgs-chatter-content">
                  {message.msgcontent}
                </div>
              </div>
            </div>
          ) :
          null
      }
    </div>
  )

};

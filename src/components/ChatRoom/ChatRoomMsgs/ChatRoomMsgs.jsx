import React, { useRef, useEffect } from "react";

import "./ChatRoomMsgs.scss";

export const ChatRoomMsgs = (props) => {

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView()
  })

  return (

    <div className="ChatRoomMsgs">
      {
        props.messages ?
          props.messages.map((message, index) =>
            <div key={index}>
              {
                message.sentby != props.ownId ?

                  <div
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
                        <p>
                          {
                            message.username ?
                              message.username :
                              message.useremail
                          }
                        </p>
                      </div>
                      <div className="msgs-chatter-content">
                        {message.msgcontent}
                      </div>
                    </div>
                  </div> :

                  // own chatter ********************
                  <div
                    className="msgs-own-wrapper"
                  >
                    <div
                      className="msgs-own-namecontent-wrapper"
                    >
                      <div className="msgs-own-content">
                        {message.msgcontent}
                      </div>
                    </div>
                    <div
                      className="msgs-own-portrait"
                    >
                    </div>
                  </div>
              }
            </div>
          ) :
          null
      }
      <div ref={messagesEndRef} />
    </div>
  )
};

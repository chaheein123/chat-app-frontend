import React from "react";

import "./ChatRoomTop.scss";

export const ChatRoomTop = (props) => {
  return (
    <div className="ChatRoomTop">
      {
        props.chatters ?
          <div>
            {props.chatters.map(chatter =>
              <div
                key={chatter.useremail}
              >
                {
                  chatter.username ?
                    chatter.username :
                    chatter.useremail
                }
              </div>
            )}
          </div> :
          null
      }
    </div>
  )




};

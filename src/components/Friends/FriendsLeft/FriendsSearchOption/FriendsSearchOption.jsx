import React from 'react';

import "./FriendsSearchOption.scss";

export const FriendsSearchOption = (props) => {

  return (
    <div className="FriendsSearchOption">
      <div className="search-option-wrapper">
        <div className="search-option-img">

        </div>

        <div className="search-option-username">
          {
            props.username ?

              `${props.username} (${props.useremail})`
              :
              props.useremail
          }
        </div>
      </div>
    </div>
  )
};

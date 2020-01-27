import React from "react";

import "./FriendsLeft.scss";

class FriendsLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div className="FriendsLeft">
      sss
        <div className="friends-search-wrapper">
          <input
            className="friends-search"
            type="text"
            placeholder="Search for people to add"
          />
          <div className="friends-search-button-wrapper">
            <img
              src="https://img.icons8.com/android/50/000000/search.png"
              className="friends-search-button"
            />
          </div>
        </div>


      </div>
    )
  }




};

export default FriendsLeft;
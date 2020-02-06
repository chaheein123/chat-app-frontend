import React from "react";
import FriendsSearchOption from "./FriendsSearchOption/FriendsSearchOption";
import FriendsAPI from "../../../services/FriendsAPI";

import "./FriendsLeft.scss";

class FriendsLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      requestSentUsers: null,
      requestReceivedUsers: null,
    };
    this.searchInputRef = React.createRef();
    this.searchResultRef = React.createRef();
  };

  componentDidMount() {
    document.addEventListener(
      "mousedown", (event) => {
        if (
          event.target != this.searchInputRef.current &&
          !event.target.className.includes("clickstay")
          &&
          this.state.users.length != 0
        ) {
          this.setState({
            filteredUsers: [],
          })
        }
      }
    )
  }

  render() {
    let filteredUsers = [];

    return (
      <div className="FriendsLeft">
        <div className="friends-search-wrapper">
          <input
            className="friends-search"
            type="text"
            placeholder="Search for people to add"
            onClick={FriendsAPI.findAllUsers.bind(null, this)}
            onChange={(event) => {
              filteredUsers = [...this.state.users];
              filteredUsers = [...this.state.users].filter(user =>
                (
                  user.username.toLowerCase().includes(event.target.value.toLowerCase())
                  ||
                  user.useremail.toLowerCase().includes(event.target.value.toLowerCase())
                )
              );
              this.setState({ filteredUsers })
            }
            }
            ref={this.searchInputRef}
          />
          <div
            className="friends-search-button-wrapper"
          >
            <img
              src="https://img.icons8.com/android/50/000000/search.png"
              className="friends-search-button"
            />
          </div>

          {
            this.state.filteredUsers.length ?
              <div
                className="friends-search-results"
              >
                {
                  this.state.filteredUsers.map((user) =>
                    <FriendsSearchOption
                      theid={this.props.location.pathname.split("/")[2]}
                      useremail={user.useremail}
                      username={user.username}
                      sentRequest={this.state.requestSentUsers.has(user.useremail)}
                      receivedRequest={this.state.requestReceivedUsers.has(user.useremail)}
                    />
                  )
                }
              </div>
              :
              null
          }

        </div>
      </div>
    )
  }
};

export default FriendsLeft;

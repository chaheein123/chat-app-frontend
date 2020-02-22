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
      friends: null,
      recommendedUsers: null,
      pendingUsers: null
    };
    this.searchInputRef = React.createRef();
    this.searchResultRef = React.createRef();

  }

  componentDidMount() {
    document.addEventListener("mousedown", event => {
      if (
        event.target != this.searchInputRef.current &&
        !event.target.className.includes("clickstay") &&
        this.state.users.length != 0
      ) {
        this.setState({
          filteredUsers: []
        });
      }
    });

    FriendsAPI.allOtherUsers(this);
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
            onClick={FriendsAPI.findAllUsers.bind(this)}
            onChange={event => {
              filteredUsers = [...this.state.users].filter(
                user =>
                  user.username
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase()) ||
                  user.useremail
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
              );
              this.setState({ filteredUsers });
            }}
            ref={this.searchInputRef}
          />
          <div className="friends-search-button-wrapper">
            <img
              src="https://img.icons8.com/android/50/000000/search.png"
              className="friends-search-button"
            />
          </div>

          {this.state.filteredUsers.length ? (
            <div className="friends-search-results">
              {this.state.filteredUsers.map(user => (
                <FriendsSearchOption
                  key={user.useremail}
                  theid={this.props.location.pathname.split("/")[2]}
                  useremail={user.useremail}
                  username={user.username}
                  sentRequest={this.state.requestSentUsers.has(user.useremail)}
                  receivedRequest={this.state.requestReceivedUsers.has(
                    user.useremail
                  )}
                  isFriends={this.state.friends.has(user.useremail)}
                />
              ))}
            </div>
          ) : null}
        </div>

        {this.state.recommendedUsers ? (
          <div className="friends-recommend-pending-wrapper">
            <p className="friends-recommend-pending-header">
              People you may know
            </p>
            <div className="friends-recommend-pending">
              {this.state.recommendedUsers.map((user, index) => {
                if (index < 3) {
                  return (
                    <div
                      className="friends-recommend-pending-each"
                      key={user.useremail}
                    >
                      <div
                        className="friends-recommend-pending-img"
                        onClick={
                          FriendsAPI.sendRequest.bind(this, user.useremail, this.props.location.pathname.split("/")[2], index)
                        }
                      />
                      <div className="friends-recommend-pending-texts">
                        {user.username ? (
                          <p>
                            {user.username}(
                            {user.useremail.length > 27
                              ? user.useremail.substring(10) +
                              "..." +
                              user.useremail.substring(
                                user.useremail.length - 12,
                                user.useremail.length
                              )
                              : user.useremail}
                            )
                          </p>
                        ) : (
                            <p>
                              {user.useremail.length > 27
                                ? user.useremail.substring(0, 10) +
                                "..." +
                                user.useremail.substring(
                                  user.useremail.length - 12,
                                  user.useremail.length
                                )
                                : user.useremail}
                            </p>
                          )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : null}

        {this.state.pendingUsers ? (
          <div className="friends-recommend-pending-wrapper">
            <p className="friends-recommend-pending-header">Requests pending</p>
            <div className="friends-recommend-pending">
              {this.state.pendingUsers.map(user => {
                return (
                  <div
                    className="friends-recommend-pending-each"
                    key={user.useremail}
                  >
                    <div
                      className="friends-recommend-pending-img"
                      onClick={FriendsAPI.acceptRequest.bind(this, user.useremail, this.props.location.pathname.split("/")[2])}
                    />
                    <div className="friends-recommend-pending-texts">
                      {user.username ? (
                        <p>
                          {user.username}(
                          {user.useremail.length > 27
                            ? user.useremail.substring(10) +
                            "..." +
                            user.useremail.substring(
                              user.useremail.length - 12,
                              user.useremail.length
                            )
                            : user.useremail}
                          )
                        </p>
                      ) : (
                          <p>
                            {user.useremail.length > 27
                              ? user.useremail.substring(0, 10) +
                              "..." +
                              user.useremail.substring(
                                user.useremail.length - 12,
                                user.useremail.length
                              )
                              : user.useremail}
                          </p>
                        )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default FriendsLeft;

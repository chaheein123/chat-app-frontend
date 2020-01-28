import React from "react";
import { FriendsSearchOption } from "./FriendsSearchOption/FriendsSearchOption";

import "./FriendsLeft.scss";

import axios from 'axios';

class FriendsLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isInputEmpty: true,
      filteredUsers: [],
    };
    this.searchInputRef = React.createRef();
    this.searchResultRef = React.createRef();
  };

  componentDidMount() {
    document.addEventListener(
      "mousedown", (event) => {
        if (
          event.target != this.searchInputRef.current &&
          event.target.className != "search-option-username" &&
          event.target.className != "search-option-wrapper" &&
          event.target.className != "search-option-img" &&
          this.state.users.length != 0
        ) {
          this.setState({
            filteredUsers: [],
          })
        }
      }
    )
  }

  handleSearch = () => {
    let usersPromise = new Promise((resolve, reject) => {
      axios
        .get(
          "http://localhost:5000/auth/findusers"
        )
        .then(
          (response) => {
            resolve(response);
          }
        )
        .catch(
          (error) => {
            console.log(error)
          }
        )
    });

    usersPromise.then(
      (response) => {
        this.setState({
          users: response["data"],
          filteredUsers: response["data"]
        })
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
            onClick={this.handleSearch}
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
                      useremail={user.useremail}
                      username={user.username}
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

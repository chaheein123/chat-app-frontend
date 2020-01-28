import React from "react";

import "./FriendsLeft.scss";

import axios from 'axios';
import { createTypeAnnotationBasedOnTypeof } from "@babel/types";

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
          event.target.className != "Users-search" &&
          this.state.users.length != 0
        ) {
          this.setState({
            filteredUsers: []
          })
        }
      }
    )
  }

  handleSearch = () => {
    // console.log(this.searchResultsRef.current);
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
                user.useremail.includes(event.target.value)
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
                    <div
                      className="Users-search"
                    >
                      {user.useremail}
                    </div>
                  )
                }
              </div>
              :
              null
          }


          {/* {
            this.state.users.length ?
              <div
                className="friends-search-results"
              >
                {
                  this.state.users.map((user) =>
                    <div
                      className="Users-search"
                    >
                      {user.useremail}
                    </div>
                  )
                }
              </div>
              :
              null
          } */}
        </div>
      </div>
    )
  }
};

export default FriendsLeft;

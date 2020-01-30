import React from 'react';

import "./FriendsSearchOption.scss";

import axios from 'axios';
class FriendsSearchOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentRequest: props.sentRequest,
      receivedRequest: props.receivedRequest
    };
  };

  sendRequest = (friendemail) => {
    let requestPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/friends/addfriends",
          { friendemail, usertoken: localStorage.getItem("userToken") }
        )
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          console.log(error, "this is the error")
        })

    });

    requestPromise
      .then(this.setState({ sentRequest: true }))
  };

  cancelRequest = (friendemail) => {
    let requestPromise = new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:5000/friends/cancelrequest",
          { friendemail, usertoken: localStorage.getItem("userToken") }
        )
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          console.log(error, "this is the error")
        })
    });

    requestPromise
      .then(this.setState({ sentRequest: false }))
  }

  render() {
    return (
      <div
        className="FriendsSearchOption"
      >
        <div className="search-option-wrapper">

          <div className="search-option-img">
          </div>

          <div className="search-option-username">
            {
              this.props.username ?
                <span className="search-option-username-span">
                  <strong className="search-option-username-span">{this.props.username}</strong> ({this.props.useremail})
                </span>
                :
                <strong className="search-option-username-span">{this.props.useremail}</strong>
            }
          </div>

          {
            this.state.sentRequest
              ?
              <div className="search-option-checkmark clickstay">
              </div>
              :
              null
          }

          {
            this.state.sentRequest
              ?
              <div
                className="search-option-request clickstay"
                onClick={
                  this.cancelRequest.bind(null, this.props.useremail)
                }
              >
                <p className="clickstay">Click to cancel friend request</p>
              </div>
              :
              <div
                className="search-option-not-request clickstay"
                onClick={
                  this.sendRequest.bind(null, this.props.useremail)
                }
              >
                <p className="clickstay">Click to send friend request</p>
              </div>
          }
          {
            this.state.receivedRequest
              ?
              <div className="search-option-requestreceived clickstay">
                request received
              </div>
              :
              null
          }
        </div>
      </div>
    )
  }
};

export default FriendsSearchOption;

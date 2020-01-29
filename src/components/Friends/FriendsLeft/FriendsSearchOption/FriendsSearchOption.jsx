import React from 'react';

import "./FriendsSearchOption.scss";

import axios from 'axios';
class FriendsSearchOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequested: props.isRequested
    };
  };

  handleClickOption = (useremail) => {
    axios
      .post(
        "http://localhost:5000/friends/addfriends",
        { useremail, usertoken: localStorage.getItem("userToken") }
      )
      .then((response) => {
        console.log(response, "this is the response")
      })
      .catch((error) => {
        console.log(error, "this is the error")
      })
  }

  render() {
    return (
      <div
        className="FriendsSearchOption"
        onClick={this.handleClickOption.bind(null, this.props.useremail)}
      >
        {/* Make it green when the user already sent the request */}
        {
          this.state.isRequested
            ?
            <div className="search-option-status">
              <div>Request sent</div>
            </div>
            :
            null
        }
        {/*  */}

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


        </div>
      </div>
    )


  }

};

export default FriendsSearchOption;

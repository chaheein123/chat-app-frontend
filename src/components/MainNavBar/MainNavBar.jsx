import React from 'react';
import "./MainNavBar.scss";
import NavbarAPI from "../../services/NavbarAPI";

export const MainNavBar = (props) => {
  return (

    <div className="nav-bar-wrapper">
      <div className="MainNavBar">

        <div
          className="nav-icon-wrappers"
          onClick={NavbarAPI.homeClick.bind(null, props)}
        >
          <div className="nav-icons home-icon">
          </div>
          <p className="nav-icons-texts">Home</p>
        </div>

        <div
          className="nav-icon-wrappers"
          onClick={NavbarAPI.chatClick.bind(null, props)}
        >
          <div className="nav-icons chat-icon">
          </div>
          <p className="nav-icons-texts">Chats</p>
        </div>

        <div
          className="nav-icon-wrappers"
          onClick={NavbarAPI.friendClick.bind(null, props)}
        >
          <div className="nav-icons friends-icon">
          </div>
          <p className="nav-icons-texts">Friends</p>
        </div>

        <div
          className="nav-icon-wrappers"
          onClick={() => {
            localStorage.clear();
            props.history.push("/");
          }}
        >
          <div className="nav-icons logout-icon">
          </div>
          <p className="nav-icons-texts">Log Out</p>
        </div>
      </div>
    </div>
  );
};

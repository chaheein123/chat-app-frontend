import React from "react";

import "./ChatRoomMessager.scss";

import MessagesAPI from "../../../services/MessagesAPI";

class ChatRoomMessager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgInput: null
    }
    this.textareaRef = React.createRef();
    this.formRef = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    this.textareaRef.current.focus();

  }

  render() {
    return (
      <div className="ChatRoomMessager">
        <form>
          <textarea
            ref={this.textareaRef}
            className="chatroom-textarea"
            placeholder="Message here"
            rows="3"
            onChange={
              (event) => this.setState({ msgInput: event.target.value })
            }
            onKeyDown={
              event => {
                if (event.key == "Enter") {
                  event.preventDefault();
                  event.target.value = "";
                  MessagesAPI.chatroomMessage(this.props.ownId, this.props.chatroomId, this.state.msgInput, this)
                }
              }
            }
          />
        </form>
      </div>
    )
  }
};

export default ChatRoomMessager;

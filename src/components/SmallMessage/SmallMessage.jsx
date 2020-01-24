import React from 'react';
import "./SmallMessage.scss";

class SmallMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      turnedOn: false,
    }
  }

  componentDidMount() {
    if (this.state.id == this.props.clickedChatId) {
      this.setState({ turnedOn: true })
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.clickedChatId == this.state.id) {
      this.setState({ turnedOn: true });
    }

    else {
      this.setState({ turnedOn: false })
    }
  }

  render() {

    return (
      <div
        className="SmallMessage"
      >

        <div
          className={

            !this.state.turnedOn ? "SmallMessage-inboxes" : "SmallMessageTurned"
          }
        >
          <div className="SmallMessage-inboxes-pics">
          </div>

          <div className="SmallMessage-inboxes-middle">
            <div className="SmallMessage-inboxes-sentTo">
              {this.props.sentTo}
            </div>

            <div className="SmallMessage-inboxes-msgContent">
              {this.props.msgContent}
            </div>
          </div>

          <div className="SmallMessage-inboxes-sentTime">
            {this.props.sentTime}
          </div>
        </div>
      </div>
    )
  }
};

export default SmallMessage;
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
            !this.state.turnedOn ? "SmallMessage-inboxes" : "SmallMessage-inboxes SmallMessageTurned"
          }
        >
          <div className="SmallMessage-inboxes-middle">
            <div className="SmallMessage-inboxes-sentTo">
              {
                this.props.userName ?
                  <span>{this.props.userName} ({this.props.userEmail})</span> :
                  <span>{this.props.userEmail}</span>
              }
            </div>

            <div className="SmallMessage-inboxes-msgContent">
              {
                this.props.msgContent ?
                  <span>
                    {
                      this.props.msgContent.length < 52 ?
                        this.props.msgContent :
                        this.props.msgContent.substring(0, 40) + " ..."
                    }
                  </span> :
                  <span>You are now friends</span>
              }
            </div>
          </div>

          <div className="SmallMessage-inboxes-sentTime">
            {
              this.props.sentTime ?
                <span>{this.props.sentTime}</span> :
                <span>Start a conversation</span>
            }
          </div>
        </div>
      </div>
    )
  }
};

export default SmallMessage;
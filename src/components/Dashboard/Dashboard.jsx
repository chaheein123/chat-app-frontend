import React from 'react';
import "./Dashboard.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  render() {
    return (
      <div className="app-body-flex">
        <div className="app-body-left">

          {/* From this point on, use the Dashboard.scss */}
          <div className="dashboard-img-div">
          </div>
          <p>
            User Name: Ian Cha
            <br />
            <br />
            Email: chaheein@gmail.com
          </p>



        </div>

        <div className="app-body-right">

          <Container className="dashboard-top-pins">
            <Row>
              <Col>
                Change my top chats
              </Col>
            </Row>
            <Row className="dashboard-top-pins-rows">
              <Col xs={12} md={6} className="dashboard-top-pins-columns">
                <div className="dashboard-top-pins-rows-img">
                </div>
                <div className="dashboard-top-pins-rows-convo">
                  sdfsfsdf
                </div>
              </Col>
              <Col xs={12} md={6} className="dashboard-top-pins-columns">
                <div className="dashboard-top-pins-rows-img">
                </div>
                <div className="dashboard-top-pins-rows-convo">
                  sdfsfsdf
                </div>
              </Col>
            </Row>

            <Row className="dashboard-top-pins-rows">
              <Col xs={12} md={6} className="dashboard-top-pins-columns">
                <div className="dashboard-top-pins-rows-img">
                </div>
                <div className="dashboard-top-pins-rows-convo">
                  sdfsfsdf
                </div>
              </Col>
              <Col xs={12} md={6} className="dashboard-top-pins-columns">
                <div className="dashboard-top-pins-rows-img">
                </div>
                <div className="dashboard-top-pins-rows-convo">
                  sdfsfsdf
                </div>
              </Col>
            </Row>

            <Row className="dashboard-top-pins-rows">
              <Col xs={12} md={6} className="dashboard-top-pins-columns">
                <div className="dashboard-top-pins-rows-img">
                </div>
                <div className="dashboard-top-pins-rows-convo">
                  sdfsfsdf
                </div>
              </Col>
              <Col xs={12} md={6} className="dashboard-top-pins-columns">
                <div className="dashboard-top-pins-rows-img">
                </div>
                <div className="dashboard-top-pins-rows-convo">
                  sdfsfsdf
                </div>
              </Col>
            </Row>

            <Row className="dashboard-top-pins-rows">
              <Col xs={12} md={6} className="dashboard-top-pins-columns">
                <div className="dashboard-top-pins-rows-img">
                </div>
                <div className="dashboard-top-pins-rows-convo">
                  sdfsfsdf
                </div>
              </Col>
              <Col xs={12} md={6} className="dashboard-top-pins-columns">
                <div className="dashboard-top-pins-rows-img">
                </div>
                <div className="dashboard-top-pins-rows-convo">
                  sdfsfsdf
                </div>
              </Col>
            </Row>

          </Container>

        </div>




      </div>

    )
  }

};

export default Dashboard;

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
      <div className="Dashboard">
        <div className="dashboard-img-div">
        </div>
        <p>
          User Name: Ian Cha
        </p>
        <p>
          Email: chaheein@gmail.com
        </p>
      </div>

    )
  }

};

export default Dashboard;

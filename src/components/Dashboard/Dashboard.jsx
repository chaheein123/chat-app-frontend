import React from 'react';
import { storage } from "../../firebase";
import axios from "../../utils/httpClient";
import ImageAPI from "../../services/ImageAPI";

import "./Dashboard.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      ownId: this.props.match.params.id
    };
  };

  componentDidMount() {
    ImageAPI
      .getImg(this.state.ownId)
      .then(response => {
        this.setState({
          url: response.data
        })
      })
  }

  handleChange = (e) => {
    let chosenImage = e.target.files[0];
    if (chosenImage) {
      let uploadTask = storage.ref(`portraits/${this.state.ownId}`).put(chosenImage);
      uploadTask.on("state_changed",
        (snapshot) => {

        },
        (error) => {
          console.log(error)
        },
        () => {
          storage.ref("portraits").child(this.state.ownId)
            .getDownloadURL()
            .then(url => {
              ImageAPI.sendImg(url, this.state.ownId)
                .then(response => {
                  this.setState({
                    url: response.data
                  })
                })
            })
        }
      )
    }
  };

  render() {
    return (
      <div className="Dashboard">
        <div className="dashboard-img-div-wrapper">
          <div className="dashboard-img-div">
            {
              this.state.url ?
                <img
                  src={this.state.url}
                /> :
                null
            }

          </div>
          <div className="dashboard-img-input-wrapper">
            <input
              className="dashboard-img-input"
              id="file"
              type="file"
              onChange={this.handleChange}
            />
            <label
              htmlFor="file"
              className="dashboard-file-button"
            >
              Choose your image
            </label>
          </div>
        </div>
      </div>
    )
  }
};

export default Dashboard;

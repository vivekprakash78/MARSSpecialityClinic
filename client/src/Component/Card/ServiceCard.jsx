import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faBrain, faBug, faHospitalUser, faProcedures } from "@fortawesome/free-solid-svg-icons";

class Card extends Component {
  render() {
    return (
      <div class="media block-6 d-block text-center">
        <div
          class="icon d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon icon={this.getIcon(this.props.service.id)} size="2x" />
        </div>
        <div class="media-body p-2 mt-3">
          <h3 class="heading">{this.props.service.serviceName}</h3>
          <p>
            {this.props.service.serviceDesciption}
          </p>
        </div>
      </div>
    );
  }
  getIcon(info) {
    switch (info) {
      case 1:
        return faBaby;
      case 2:
        return faBrain;
      case 3:
        return faProcedures;
      case 4:
        return faHospitalUser;
      default:
        return faBug;
    }
  }
}

export default Card;

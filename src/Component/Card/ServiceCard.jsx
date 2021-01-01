import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faBrain, faBug, faProcedures, faVenusDouble } from "@fortawesome/free-solid-svg-icons";

class Card extends Component {
  render() {
    return (
      <div className="media block-6 d-block text-center">
        <div
          className="icon d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon icon={this.getIcon(this.props.service.id)} size="2x" />
        </div>
        <div className="media-body p-2 mt-3">
          <h3 className="heading">{this.props.service.serviceName}</h3>
          <ul className="serviceList">
            {this.props.service.serviceDesciption.map((medicalService) => {
              return (
                <li key={medicalService}>{medicalService}</li>
              );
            })}
          </ul>
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
        return faVenusDouble;
      default:
        return faBug;
    }
  }
}

export default Card;

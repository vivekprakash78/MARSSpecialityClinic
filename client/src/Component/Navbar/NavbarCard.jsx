import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faClock,
  faBug,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../Asset/Style/NavbarCard.css";

class NavbarCard extends Component {
  render() {
    return (
      <div className="navbarCard">
        <div className="navCardIcon">
          <FontAwesomeIcon
            icon={this.getIcon(this.props.info)}
            className="cardIcon"
          />
        </div>
        <div className="navCardText">{this.getText(this.props.info)}</div>
      </div>
    );
  }

  getIcon(info) {
    switch (info) {
      case "Call":
        return faPhoneAlt;
      case "Location":
        return faMapMarkedAlt;
      case "Timing":
        return faClock;
      default:
        return faBug;
    }
  }
  getText(info) {
    switch (info) {
      case "Call":
        return "+91 12345 12345";
      case "Location":
        return "Shaguna More, Patna";
      case "Timing":
        return "9:00 AM - 5:00 PM everyday";
      default:
        return "Unexpected Call";
    }
  }
}

export default NavbarCard;

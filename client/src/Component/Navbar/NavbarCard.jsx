import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faClock,
  faBug,
} from "@fortawesome/free-solid-svg-icons";
import "../../Asset/Style/NavbarCard.css";

class NavbarCard extends Component {
  render() {
    return (
      <div className="navbarCard">
        <div className="navCardIcon">
          <FontAwesomeIcon
            icon={this.getIcon(this.props.info)}
            size="lg"
            className="cardIcon"
          />
        </div>
        <div className="navCardText">{this.getText(this.props.info)}</div>
      </div>
    );
  }

  getIcon(info) {
    fetch("https://api.github.com/users/hacktivist123/repos")
      .then((response) => response.json())
      .then((data) => console.log(data));

    switch (info) {
      case "Call":
        return faPhoneAlt;
      case "Location":
        return faMapMarkerAlt;
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
        return "9:00AM - 5:00 PM everyday";
      default:
        return "Unexpected Call";
    }
  }
}

export default NavbarCard;
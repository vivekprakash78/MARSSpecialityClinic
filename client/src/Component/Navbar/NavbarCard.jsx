import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faBug,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../Asset/Style/NavbarCard.css";
import infoData from "../../Asset/Data/HospitalInfo.json";

class NavbarCard extends Component {
  render() {
    return (
      <a
        href={this.getLink(this.props.info)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="navbarCard">
          <div className="navCardIcon">
            <FontAwesomeIcon
              icon={this.getIcon(this.props.info)}
              className="cardIcon"
            />
          </div>
          <div className="navCardText">{this.getText(this.props.info)}</div>
        </div>
      </a>
    );
  }

  getIcon(info) {
    switch (info) {
      case "Call":
        return faPhoneAlt;
      case "Location":
        return faMapMarkedAlt;
      default:
        return faBug;
    }
  }
  getText(infoKey) {
    var info = infoData.find((item) => {
      return item.infoName === infoKey;
    });
    if (info) {
      return info.infoValue;
    } else return "You found a bug!!";
  }
  getLink(infoKey) {
    var info = infoData.find((item) => {
      return item.infoName === infoKey;
    });
    if (info) {
      return info.infoLink;
    } else return "You found a bug!!";
  }
}

export default NavbarCard;

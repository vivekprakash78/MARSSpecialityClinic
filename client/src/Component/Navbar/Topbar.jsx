import React, { Component } from "react";
import NavbarCard from "./NavbarCard";
import "../../Asset/Style/Topbar.css";

class Topbar extends Component {
  render() {
    return (
      <div className="topbar row no-gutters">
        <div className="topbar-item brand col-lg-4 col-sm-12">
          <div className="brand-image">
            <img
              src="/logo192.png"
              className="d-inline-block align-top"
              alt="MARS Speciality Clinic"
              loading="lazy"
            />
          </div>
          <div className="brand-text"> Speciality Clinic</div>
        </div>
        <div className="col-lg-2"></div>
        <div className="topbar-item info-cards col-lg-6">
          <NavbarCard info="Call" />
          <NavbarCard info="Timing" />
          <NavbarCard info="Location" />
        </div>
      </div>
    );
  }
}

export default Topbar;

import React, { Component } from "react";
import NavbarCard from "./NavbarCard";
import "bootstrap/dist/css/bootstrap.css";
import "../../Asset/Style/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="/logo192.png"
            width="75"
            height="75"
            className="d-inline-block align-top"
            alt="MARS Speciality Clinic"
            loading="lazy"
          />
          Speciality Clinic
        </a>
        <ul className="nav ml-auto">
          <li className="nav-item">
            <NavbarCard info="Call" />
          </li>
          <li className="nav-item">
            <NavbarCard info="Location" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

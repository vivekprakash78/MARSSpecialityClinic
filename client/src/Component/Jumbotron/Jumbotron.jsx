import React, { Component } from "react";
import "../../Asset/Style/Jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">MARS Speciality Clinic</h1>
          <p className="lead">Passion for Cure</p>
        </div>
      </div>
    );
  }
}
export default Jumbotron;

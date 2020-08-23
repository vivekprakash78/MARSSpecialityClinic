import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body text-center">
          <p>
            <img className="img-fluid" src="" alt="card" />
          </p>
          <h4 className="card-title">Sunlimetech</h4>
          <p className="card-text">
            This is basic card with image on top, title, description and button.
          </p>
          <a href="/" className="btn btn-primary btn-sm">
            <FontAwesomeIcon icon={faPlus} />
          </a>
        </div>
      </div>
    );
  }
  getDoctorDetail() {
    console.log("Get Doctor Detail");
  }
}

export default Card;

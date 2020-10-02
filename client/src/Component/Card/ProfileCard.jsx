import React, { Component } from "react";
class ProfileCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body text-center">
          <p>
            <img
              className="img-fluid"
              src={this.getImagePath(this.props.doctor.picture)}
              alt="card"
            />
          </p>
          <h4 className="card-title">{this.props.doctor.name}</h4>
          <p className="card-text">{this.props.doctor.degree}</p>
          <p className="card-text">{this.props.doctor.specialisation}</p>
        </div>
      </div>
    );
  }
  getImagePath(imageFile) {
    return "./Image/Doctors/".concat(imageFile);
  }
}

export default ProfileCard;

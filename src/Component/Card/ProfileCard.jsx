import React, { Component } from "react";
class ProfileCard extends Component {
  render() {
    return (
      <div className="card profile-card-1">
        <img src="./Image/Doctors/doctorBackground.png" alt="profileBack" className="background" />
        <img src={this.getImagePath(this.props.doctor.picture)} alt="profile" className="profile" />
        <div className="card-content">
          <h2>{this.props.doctor.name}<small>{this.props.doctor.degree}</small></h2>
          <h4>{this.props.doctor.specialisation}</h4>
        </div>
      </div>
    );
  }
  getImagePath(imageFile) {
    return "./Image/Doctors/".concat(imageFile);
  }
}

export default ProfileCard;

import React, { Component } from "react";
import "../../Asset/Style/ContentSection.css";
import Card from "../Card/ProfileCard";
import doctorsData from "../../Asset/Data/Doctors.json";

class Doctor extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="sectionHeader">Doctors</h1>
        <div className="row justify-content-around">
          {doctorsData.map((doctor) => {
            return (
              <div className="col-md-3" key={doctor.id}>
                <Card doctor={doctor} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Doctor;

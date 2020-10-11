import React, { Component } from "react";
import Card from "../Card/ProfileCard";
import doctorsData from "../../Asset/Data/Doctors.json";
import "../../Asset/Style/Doctor.css";

class Doctor extends Component {
  render() {
    return (
      <section id="doctor">
        <div className="container">
          <h1 className="sectionHeader">Our Doctors</h1>
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
      </section>
    );
  }
}

export default Doctor;

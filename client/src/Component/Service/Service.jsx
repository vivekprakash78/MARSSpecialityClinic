import React, { Component } from "react";
import "../../Asset/Style/ContentSection.css";
import Card from "../Card/ServiceCard";
import servicesData from "../../Asset/Data/Services.json";

class Service extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="sectionHeader">Services</h1>
        <div className="row justify-content-around">
          {servicesData.map((service) => {
            return (
              <div className="col-md-3" key={service.id}>
                <Card service={service} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Service;

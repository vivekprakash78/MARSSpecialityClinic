import React, { Component } from "react";
import "../../Asset/Style/Service.css";
import Card from "../Card/ServiceCard";
import servicesData from "../../Asset/Data/Services.json";

class Service extends Component {
  render() {
    return (

      <section class="services">
        <div class="container">
          <div class="row no-gutters">
            {servicesData.map((service) => {
              return (
                <div className="col-md-3 d-flex align-self-stretch p-4 servicesCard" key={service.id}>
                  <Card service={service} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Service;

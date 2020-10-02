import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">{this.props.service.serviceName}</h5>
          <div className="card-text">
            <ul>
              {this.props.service.serviceList.map((element) => {
                return <li>{element}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

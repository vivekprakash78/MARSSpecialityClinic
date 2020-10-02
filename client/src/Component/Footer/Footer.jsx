import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import "../../Asset/Style/Footer.css";

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black">
              <p className="h5">
                Made with{" "}
                <FontAwesomeIcon icon={faHeartbeat} className="heartIcon" /> in
                2020
              </p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;

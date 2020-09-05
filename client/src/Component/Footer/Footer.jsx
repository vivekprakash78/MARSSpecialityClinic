import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../../Asset/Style/Footer.css";

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <a href="http://www.marsclinicpatna.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.marsclinicpatna.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.marsclinicpatna.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.marsclinicpatna.com/">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black">
              <p className="h6">
                Made with{" "}
                <FontAwesomeIcon icon={faHeart} className="heartIcon" /> in 2020
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

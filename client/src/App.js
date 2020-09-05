import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import Topbar from "./Component/Navbar/Topbar";
import Jumbotron from "./Component/Jumbotron/Jumbotron";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Topbar />
      <Jumbotron />
      <div className="container">
        <div className="containerIcon">
          <FontAwesomeIcon
            icon={faHeartbeat}
            size="10x"
            className="heartLogo"
          />
        </div>
        <div className="containerText">Coming Soon</div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;

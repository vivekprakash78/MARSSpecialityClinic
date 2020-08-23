import React from "react";
import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="containerIcon">
          <FontAwesomeIcon icon={faHeartbeat} size="10x" />
        </div>
        <div className="containerText">Coming Soon</div>
      </div>
    </React.Fragment>
  );
}

export default App;

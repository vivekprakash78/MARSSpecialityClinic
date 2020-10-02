import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Topbar from "./Component/Navbar/Topbar";
import Jumbotron from "./Component/Jumbotron/Jumbotron";
import Service from "./Component/Service/Service";
import Doctor from "./Component/Doctor/Doctor";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Topbar />
      <Jumbotron />
      <Service />
      <Doctor />
      <Footer />
    </React.Fragment>
  );
}

export default App;

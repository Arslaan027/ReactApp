import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/nav";
import Listgrp from "./components/listGrp";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Listgrp />
    </React.Fragment>
  );
}

export default App;

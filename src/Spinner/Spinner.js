import React from "react";
import logo from "../logo.svg";
import "./Spinner.scss";

const Spinner = () => (
  <div className="Spinner">
    <img src={logo} className="logo" alt="logo" />
    <p>Coming soon!</p>
  </div>
);

export default Spinner;

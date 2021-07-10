import React, { Component } from "react";
import "./styles/navbar.css";
import logo from "../components/resources/logo.JPG";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          {" "}
          <div className="img-container">
            <img src={logo} alt="house" />
          </div>
          <div>
            <button className="main-btn">Buy a House </button>
            <button className="main-btn"> Rest a House</button>
            <button className="main-btn">Mortgage </button>
          </div>
          <div>
            <button className="sign-up-btn"> Sign up</button>{" "}
          </div>
        </div>
      </div>
    );
  }
}

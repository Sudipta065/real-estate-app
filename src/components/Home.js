import React, { Component } from "react";
import Navbar from "./Navbar";
import SearchCitySection from "./SearchCitySection";
import Footer from "./Footer";
import "../components/styles/home.css";
class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <Navbar />
          <SearchCitySection />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;

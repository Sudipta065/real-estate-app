import React, { Component } from "react";
import "../components/styles/footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="footer-title">Housen © 2020</div>
          <div>
            <button className="footer-btn"> About</button>
            <button className="footer-btn"> FAQ</button>
            <button className="footer-btn"> Terms & Condition</button>
            <button className="footer-btn"> Privacy Policy</button>
          </div>
        </div>
      </div>
    );
  }
}

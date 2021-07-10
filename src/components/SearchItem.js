import React, { Component } from "react";
import "./styles/search-item.css";
export default class SearchItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const { city, bedNumber, find, rate, shortName } = this.props;

    return (
      <div className="item-card">
        <div className="city-title">
          {city},{shortName}{" "}
        </div>
        <div className="city-info">
          <i className="fas fa-sliders-h icon-i"></i>
          {(rate / 1000).toFixed(1)}k+ / {bedNumber}Beds/Appt. ...{find} More
          <i className="fas fa-chevron-right icon-i"></i>
        </div>
      </div>
    );
  }
}

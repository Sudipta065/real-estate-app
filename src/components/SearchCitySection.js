import React, { Component } from "react";
import "../components/styles/search-city.css";
import axios from "axios";
import SearchItem from "./SearchItem";
export default class SearchCitySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      searchData: [],
      isFetched: false,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let { searchKey } = this.state;
    if (searchKey !== "") {
      axios
        .get(
          `https://dev.gozayaan.com/api/gozayaan_campaign/real_estate_list/?city_name=${searchKey}`
        )
        .then((response) => {
          console.log(response.data.result);

          this.setState({ searchData: response.data.result, isFetched: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { searchData, isFetched } = this.state;
    return (
      <div className="section-container">
        <div className="section">
          <div className="section-title">Find your ideal home</div>
          <div className="section-info">
            Search from more than 19 million of inspected appartments, houses,
            cottages, villas, manors and mansions
          </div>
          <div className="form-section">
            <form className="form" onSubmit={this.handleSubmit}>
              <i className="fas fa-search icon"></i>
              <input
                className="input"
                type="text"
                placeholder="Search for Address"
                name="searchKey"
                value={this.state.searchKey}
                onChange={(e) => {
                  this.onChange(e);
                }}
              />
              <button className="search-btn" onClick={this.handleSubmit}>
                Search
              </button>
            </form>
          </div>

          {isFetched &&
            searchData.length > 0 &&
            searchData.map((item) => (
              <SearchItem
                city={item.city_name}
                bedNumber={item.apartment_bed}
                find={item.find_more}
                rate={item.rate}
                shortName={item.short_code}
              />
            ))}

          {isFetched && searchData.length <= 0 && <h2> No Result </h2>}
        </div>
      </div>
    );
  }
}

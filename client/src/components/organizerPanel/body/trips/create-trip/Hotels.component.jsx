import React, { Component } from "react";
import Hotel from "./Hotel.component";
import { MDBBtn, MDBIcon } from "mdbreact";
import { connect } from "react-redux";
import { getLocation } from "../../../../../actions/apiActions";

import SearchBar from "../../../../../common/SearchBar.component";
class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  componentDidMount() {

    }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  handleSubmit = e => {
      e.preventDefault()
      this.props.getLocation(this.state.search)
  }
  render() {
    const { search } = this.state;
    return (
      <div className="ml-5 mr-5 pt-2">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Hotels</h3>
          <MDBBtn color="link" className="blue-text" onClick={this.continue}>
            Skip
          </MDBBtn>
        </div>
        <hr />
        <div className="d-flex flex-row-reverse">
          <SearchBar
            iconColor="text-info"
            placeholder="Enter City"
            value={search}
            onChange={this.handleChange("search")}
            onClick={this.handleSubmit}
            
          />

        </div>
        <Hotel />
        <Hotel />
        <div className="d-flex flex-row-reverse">
          <MDBBtn
            color="link"
            size="lg"
            onClick={this.continue}
            className="blue-text"
          >
            Continue
          </MDBBtn>
          <MDBBtn
            color="link"
            size="lg"
            onClick={this.back}
            className="blue-text"
            
          >
            Back
          </MDBBtn>
        </div>
      </div>
    );
  }
}

export default connect(null,{getLocation})(Hotels);

import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import ExploreTripsCard from "./ExploreTripsCard.component";

class ExploreTrips extends Component {
  componentDidMount() {}

  render() {
    const { trips } = this.props.trip;
    return (
      <div>
        <MDBContainer>
          <h1>Explore</h1>
          {trips && trips.map(trip=> <ExploreTripsCard key={trip._id} trip={trip}/>)}
        </MDBContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  trip: state.trip,
  auth: state.auth,
});
export default connect(mapStateToProps)(ExploreTrips);

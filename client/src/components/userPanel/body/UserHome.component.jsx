import React, { Component } from 'react';
import FeaturedTrips from './FeaturedTrips.component';
import PopularTrips from './PopularTrips.component';
import RecentTrips from './RecentTrips.component';
import CustomiseTrip from '../../homepage/trips/CustomiseTrip.component';
import { MDBContainer } from 'mdbreact';
import CreateTripUser from './CreateTripUser.component';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../../actions/userProfileActions'

 
export class UserHome extends Component {

    
    
    render() {
        return (
            <div>
               <FeaturedTrips/>
               <RecentTrips/>
               <PopularTrips/>
               <CreateTripUser/>
            </div>
        );
    }
}

UserHome.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps)(UserHome);

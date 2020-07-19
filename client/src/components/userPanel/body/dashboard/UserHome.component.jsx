import React, { Component } from 'react';
import FeaturedTrips from './FeaturedTrips.component';
import PopularTrips from './PopularTrips.component';
import RecentTrips from './RecentTrips.component';
import CustomiseTrip from '../../../homepage/trips/CustomiseTrip.component';
import { MDBContainer } from 'mdbreact';
import CreateTripUser from './CreateTripUser.component';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../../../actions/userProfileActions'
import ExploreTrips from './ExploreTrips.component';
import {getTrips} from '../../../../actions/tripActions'

 
export class UserHome extends Component {

    componentDidMount(){
        this.props.getTrips()
    }

    
    render() {
        return (
            <div>

                <ExploreTrips/>
               <CreateTripUser/>
            </div>
        );
    }
}


export default connect(null, {getTrips})(UserHome);

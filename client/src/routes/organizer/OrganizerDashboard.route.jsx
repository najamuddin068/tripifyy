import React, { Component } from 'react';
import  OrganizerHeader  from '../../components/organizerPanel/header/OrganizerHeader.component';
import  UserHome  from '../../components/userPanel/body/dashboard/UserHome.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrganizerSidebar from '../../components/organizerPanel/body/dashboard/OrganizerSidebar.component';
import OrganizerInboxSidebar from '../../components/organizerPanel/body/dashboard/OrganizerInboxSidebar.component';
import ActiveTrips from '../../components/organizerPanel/body/dashboard/ActiveTrips.component';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Footer from '../../components/organizerPanel/footer/Footer.component';
import { getCurrentProfile } from '../../actions/organizerProfileActions'
import PropTypes from 'prop-types'
import OrganizerBio from '../../components/organizerPanel/body/dashboard/OrganizerBio.component';
import OrganizerDashboardPanel from '../../components/organizerPanel/body/dashboard/OrganizerDashboardPanel.component';

class Organizer extends Component {
  
    render() {
        return (
            <div>
                <OrganizerHeader/>
                <OrganizerDashboardPanel/>
                
            </div>
        );
    }
}

export default withRouter(Organizer);
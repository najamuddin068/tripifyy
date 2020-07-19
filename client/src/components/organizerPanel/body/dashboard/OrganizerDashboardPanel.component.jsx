import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import OrganizerSidebar from './OrganizerSidebar.component'
import OrganizerInboxSidebar from './OrganizerInboxSidebar.component'
import OrganizerBio from './OrganizerBio.component'
import ActiveTrips from './ActiveTrips.component'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCurrentProfile } from '../../../../actions/organizerProfileActions'
import { getTripsByOrganizer } from '../../../../actions/tripActions'


class OrganizerDashboardPanel extends Component {
    componentDidMount(){
        this.props.getCurrentProfile();
        this.props.getTripsByOrganizer(this.props.auth.organizer.id)
    }
    render() {
        return (
            <div>
                <MDBContainer fluid style={{padding: '30px 100px'}}>
                <MDBRow>
                    <MDBCol md='4'>
                        <OrganizerSidebar/>
                        <OrganizerInboxSidebar/>
                    </MDBCol>
                    <MDBCol md='8'>
                        <OrganizerBio/>
                        <ActiveTrips/>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
OrganizerDashboardPanel.propType = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth,
    
})

export default connect(mapStateToProps, {getCurrentProfile, getTripsByOrganizer})(OrganizerDashboardPanel)

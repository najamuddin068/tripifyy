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

class Organizer extends Component {
    componentDidMount(){
        this.props.getCurrentProfile();
        if(!this.props.auth.isOrganizer){
            this.props.history.push('/sign-in')
        }
    }
    render() {
        return (
            <div>
                <OrganizerHeader/>
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
        );
    }
}
Organizer.propType = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, {getCurrentProfile})(withRouter(Organizer));
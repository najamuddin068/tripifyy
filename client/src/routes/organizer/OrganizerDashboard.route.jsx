import React, { Component } from 'react';
import  OrganizerHeader  from '../../components/organizerPanel/header/OrganizerHeader.component';
import  UserHome  from '../../components/userPanel/body/UserHome.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrganizerSidebar from '../../components/organizerPanel/body/dashboard/OrganizerSidebar.component';
import OrganizerInboxSidebar from '../../components/organizerPanel/body/dashboard/OrganizerInboxSidebar.component';
import ActiveTrips from '../../components/organizerPanel/body/dashboard/ActiveTrips.component';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Footer from '../../components/organizerPanel/footer/Footer.component';

class Organizer extends Component {
    componentDidMount(){
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
                        <ActiveTrips/>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
                
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(Organizer));
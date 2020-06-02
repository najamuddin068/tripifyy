import React, { Component } from 'react';
import './OrganizerSidebar.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { MDBRating, MDBIcon, MDBRow, MDBCol, MDBProgress } from 'mdbreact';
import { Container } from 'react-bootstrap';

class OrganizerSidebar extends Component {
    
    render() {
        const {organizer} = this.props.auth
        return (
            <div className='sidebar-container'>
                <div className='info'>
                    <img src={organizer.avatar} className='organizer-avatar' alt=""/>
                        <div>
                            <h5 style={{display:'inline'}}>@{organizer.username} </h5>
                            <MDBIcon icon="star" style={{color:'#FFC107'}}/> N/A
                        </div>
                </div>
                <hr/>
                    <MDBRow>
                        <MDBCol md='6'>
                            Trip Completion
                        </MDBCol>
                        <MDBCol md='4' >
                        <div class="progress md-progress">
                            <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </MDBCol>
                        <MDBCol md='2'>
                            80%
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='6'>
                            On Time
                        </MDBCol>
                        <MDBCol md='4' >
                        <div class="progress md-progress">
                            <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </MDBCol>
                        <MDBCol md='2'>
                            80%
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='6'>
                            Behaviour
                        </MDBCol>
                        <MDBCol md='4' >
                        <div class="progress md-progress">
                            <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </MDBCol>
                        <MDBCol md='2'>
                            80%
                        </MDBCol>
                    </MDBRow>
                    <hr/>
                    <MDBRow>
                        <MDBCol md='8'>
                            Earned This Month
                        </MDBCol>
                       
                        <MDBCol md='4'>
                            <span style={{float:'right'}}>80K PKR</span>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='8'>
                            Total Earned
                        </MDBCol>
                       
                        <MDBCol md='4'style={{float:'right'}}>
                            <span style={{float:'right'}}>
                            150K PKR
                            </span>
                        </MDBCol>
                    </MDBRow>
            </div>
        );
    }
}

OrganizerSidebar.propTypes ={
    auth:PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth:state.auth
  })


export default connect(mapStateToProps)(withRouter(OrganizerSidebar));
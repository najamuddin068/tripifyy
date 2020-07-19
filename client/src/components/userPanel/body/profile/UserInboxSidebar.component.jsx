import React, { Component } from 'react';
import './UserInboxSidebar.styles.scss'
import { MDBRow, MDBCol } from 'mdbreact';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class UserInboxSidebar extends Component {
    render() {
        const {user} = this.props.auth
        return (
            <div className='sidebar-container-inbox'>
                <div className='inbox-heading'>
                    <MDBRow>
                        <MDBCol md='6'>
                            Inbox
                        </MDBCol>
                        <MDBCol md='6' >
                            <a href="" style={{float:'right'}}>View All</a>
                        </MDBCol>
                    </MDBRow>
                </div>
                <hr/>
                <div className='inbox-padding'>
                    <MDBRow>
                        <MDBCol md='2'>
                            <img src={user.avatar} alt="" className='inbox-img'/>
                        </MDBCol>
                        <MDBCol md='7'>
                            <MDBRow>
                                <MDBCol>
                                    <span className='username-inbox'>@{user.username}</span>
                                    
                                </MDBCol>
                                
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <span className='inbox-msg'>
                                    Hello
                                    </span>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md='3'>
                            <span className='inbox-time'>
                            just now
                            </span>
                        </MDBCol>
                    </MDBRow>
                </div>
                <hr style={{marginTop:'2px'}}/>
                <div className='inbox-padding'>
                    <MDBRow>
                        <MDBCol md='2'>
                            <img src={user.avatar} alt="" className='inbox-img'/>
                        </MDBCol>
                        <MDBCol md='7'>
                            <MDBRow>
                                <MDBCol>
                                    <span className='username-inbox'>@{user.username}</span>
                                    
                                </MDBCol>
                                
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <span className='inbox-msg'>
                                    Hello
                                    </span>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md='3'>
                            <span className='inbox-time'>
                            just now
                            </span>
                        </MDBCol>
                    </MDBRow>
                </div>
                <hr style={{marginTop:'2px'}}/>
                <div className='inbox-padding'>
                    <MDBRow>
                        <MDBCol md='2'>
                            <img src={user.avatar} alt="" className='inbox-img'/>
                        </MDBCol>
                        <MDBCol md='7'>
                            <MDBRow>
                                <MDBCol>
                                    <span className='username-inbox'>@{user.username}</span>
                                    
                                </MDBCol>
                                
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <span className='inbox-msg'>
                                    Hello
                                    </span>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md='3'>
                            <span className='inbox-time'>
                            just now
                            </span>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        );
    }
}
UserInboxSidebar.propTypes ={
    auth:PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth:state.auth
  })

  export default connect(mapStateToProps)(withRouter(UserInboxSidebar));
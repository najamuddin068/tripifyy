import React, { Component } from 'react';
import { MDBNavbar, MDBContainer,MDBDropdownItem, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavLink, MDBNavbarBrand, MDBNavItem, MDBBtn, MDBFormInline, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBBadge, MDBInputGroup, MDBCol } from 'mdbreact';
import {logoutOrganizer} from '../../../actions/authActions'
import { clearCurrentProfile} from '../../../actions/userProfileActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

class OrganizerHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          collapse: false,
          isWideEnough: false,
          search:''
        };
        this.onClick = this.onClick.bind(this);
      }
      style = 
      {
        navContent:
        {
          marginTop:'5px',
          marginBottom:'5px',


        },
        userImage:
        {
          height:'40px',
          borderRadius:'100%',
          width:'40px',
          position:'relative',
          top:'0px'
        },
        navLink:
        {
           marginTop:'7.5px'
        }
      }
    
      onClick() {
        this.setState({
          collapse: !this.state.collapse,
        });
      }

      onLogOutClick = e =>{
        e.preventDefault();
        this.props.logoutOrganizer(this.props.history);
      }

    render() {
        const {organizer} = this.props.auth

        return (
            <div>
            <MDBNavbar  color="bg-default" scrolling dark expand="md" fixed="top"  >
                <MDBContainer fluid style={this.style.navContent} >
              <MDBNavbarBrand href="/" >
                <span>TRIPifyy</span>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar >
              
               
                    <MDBNavbarNav left >
                    <MDBNavItem>
                    <MDBNavLink to=""> Dashboard </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/organizer/myfeed">My Feed</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Messages</MDBNavLink>
                  </MDBNavItem>
                  
                  <MDBNavItem>
                    <MDBNavLink to="#">Trips</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Analytics</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Earnings</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Community</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav>
                                <div>More</div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                              
                            <MDBDropdownItem href="#!">Tourist Request</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Create Trip</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Update Trip</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Report an issue</MDBDropdownItem>
                            
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        </MDBNavItem>
                 
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                        <MDBNavItem >
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                            <img src={organizer.avatar} style={this.style.userImage} alt=""/>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                              
                            <MDBDropdownItem href="#!">View Profile</MDBDropdownItem>
                            <MDBDropdownItem href="#!" divider></MDBDropdownItem>
                            <MDBDropdownItem href="#!">Saved</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Joined</MDBDropdownItem>
                            <MDBDropdownItem href="#!" divider></MDBDropdownItem>
                            <MDBDropdownItem href="#!">Payments</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Customize Your Trips</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Settings</MDBDropdownItem>
                            <MDBDropdownItem href="#!" divider></MDBDropdownItem>
                            <MDBDropdownItem href="#" onClick={this.onLogOutClick}>Sign Out</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        </MDBNavItem>
                        </MDBNavbarNav>
              </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            <div style={{marginBottom:'100px'}}/>
            </div>
        );
    }
}

OrganizerHeader.propTypes ={
    logoutOrganizer: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth:state.auth
  })


export default connect(mapStateToProps,{logoutOrganizer})(withRouter(OrganizerHeader));
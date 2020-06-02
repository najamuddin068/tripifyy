import React, { Component } from 'react';
import { MDBNavbar, MDBContainer,MDBDropdownItem, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavLink, MDBNavbarBrand, MDBNavItem, MDBBtn, MDBFormInline, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBBadge, MDBInputGroup, MDBCol } from 'mdbreact';
import {logoutUser} from '../../../actions/authActions'
import { clearCurrentProfile} from '../../../actions/userProfileActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
export class UserHeader extends Component {
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
        this.props.clearCurrentProfile()
        this.props.logoutUser(this.props.history);
      }
     
    render() {
        const {user} = this.props.auth

        return (
            <div style={{marginBottom:'100px'}}>
            <MDBNavbar  color="bg-default" dark expand="md" fixed="top"   style={{padding:'0px 10px 0px 30px'}}>
                <MDBContainer fluid style={this.style.navContent} >
              <MDBNavbarBrand href="/" >
                <span style={{fontWeight:'bold',marginRight:'20px'}}>TRIPifyy</span>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar >
              <MDBNavbarNav left>
                <MDBNavItem>
                <MDBFormInline className="md-form mr-auto m-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <MDBBtn color='white' size="sm" type="submit" className="mr-auto">
                  Search
                </MDBBtn>
              </MDBFormInline>
                </MDBNavItem>
            </MDBNavbarNav>
               
                    <MDBNavbarNav right >
                    <MDBNavItem>
                    <MDBNavLink to="/dashboard" style={this.style.navLink}><MDBIcon icon="globe" /> Explore </MDBNavLink>
                  </MDBNavItem>
                 
                    <MDBNavItem>
                    <MDBNavLink to="#" style={this.style.navLink} >
                      <MDBIcon icon="envelope" /> Message<MDBBadge color="danger" className="ml-2">{this.props.message}</MDBBadge></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" style={this.style.navLink}><MDBIcon icon="bell" /> Notification<MDBBadge color="danger" className="ml-2">4</MDBBadge></MDBNavLink>
                  </MDBNavItem>
                   
                 
                 
                        <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                            <img src={user.avatar} style={this.style.userImage} alt=""/>
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
            </div>
            
        );
    }
}

UserHeader.propTypes ={
  logoutUser: PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps,{logoutUser, clearCurrentProfile})(withRouter(UserHeader));

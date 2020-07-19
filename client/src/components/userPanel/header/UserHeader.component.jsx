import React, { Component } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBDropdownItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavbarBrand,
  MDBNavItem,
  MDBBtn,
  MDBFormInline,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBBadge,
  MDBInputGroup,
  MDBCol,
} from "mdbreact";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/userProfileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNotificationByUser } from "../../../actions/notificationActions";
import {getPost} from '../../../actions/postActions'
export class UserHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      search: "",
    };
    this.onClick = this.onClick.bind(this);
  }
  style = {
    userImage: {
      height: "40px",
      borderRadius: "100%",
      width: "40px",
      position: "relative",
      top: "0px",
    },
  };

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  onLogOutClick = (e) => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser(this.props.history);
  };
  componentDidMount() {
    this.props.getNotificationByUser(this.props.auth.user.id);
  }
  render() {
    const { user } = this.props.auth;
    const { notification } = this.props.notification;

    return (
      <div>
        <MDBNavbar color="bg-dark" dark expand="md" fixed="top" scrolling>
          <MDBContainer fluid>
            <MDBNavbarBrand href="/">
              <span>TRIPifyy</span>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBFormInline className="md-form mr-auto m-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <MDBBtn
                      color="white"
                      size="sm"
                      type="submit"
                      className="mr-auto"
                    >
                      Search
                    </MDBBtn>
                  </MDBFormInline>
                </MDBNavItem>
              </MDBNavbarNav>

              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="/user/dashboard" className="pt-3">
                    <MDBIcon icon="globe" /> Explore{" "}
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/user/myfeed" className="pt-3">
                    <MDBIcon icon="rss-square" /> My Feed{" "}
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/user/messages" className="pt-3">
                    <MDBIcon icon="envelope" /> Message
                    <MDBBadge color="danger" className="ml-2">
                      {this.props.message}
                    </MDBBadge>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  {/* <MDBNavLink to="#" style={this.style.navLink}>
                    <MDBIcon icon="bell" /> Notification
                    <MDBBadge color="danger" className="ml-2">
                      {notification && notification.length}
                    </MDBBadge>
                  </MDBNavLink> */}
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav className="pt-3">
                      <MDBIcon icon="bell" /> Notification
                      <MDBBadge color="danger" className="ml-2">
                        {notification && notification.length}
                      </MDBBadge>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu
                      className="dropdown-default mr-2 overflow-auto float-left"
                      style={{ width: "450px", maxHeight:'400px' }}
                    >
                      <MDBDropdownItem header className='mb-0 mt-0 pb-3 pt-3'>Notification</MDBDropdownItem>
                      {notification &&
                        notification.map((notify) => (
                          <div key ={notify._id}>
                            <MDBDropdownItem divider></MDBDropdownItem>
                            <MDBDropdownItem href={`/user/post/${notify.notification[0].link}`} className="small" >
                              {notify.notification[0].message}
                            </MDBDropdownItem>{" "}
                          </div>
                        ))}
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <img
                        src={user.avatar}
                        style={this.style.userImage}
                        alt=""
                      />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="/user/profile">
                        View Profile
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" divider></MDBDropdownItem>
                      <MDBDropdownItem href="#!">Saved</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Joined</MDBDropdownItem>
                      <MDBDropdownItem href="#!" divider></MDBDropdownItem>
                      <MDBDropdownItem href="#!">Payments</MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Customize Your Trips
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">Settings</MDBDropdownItem>
                      <MDBDropdownItem href="#!" divider></MDBDropdownItem>
                      <MDBDropdownItem href="#" onClick={this.onLogOutClick}>
                        Sign Out
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        <div className="mb-5 pb-5" />
      </div>
    );
  }
}

UserHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getNotificationByUser: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  notification: state.notification,
});

export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile,
  getNotificationByUser,
  getPost
})(withRouter(UserHeader));

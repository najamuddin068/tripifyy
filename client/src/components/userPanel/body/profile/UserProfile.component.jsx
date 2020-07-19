import React, { Component } from "react";
import {
  MDBContainer,
  MDBCardHeader,
  MDBIcon,
  MDBMedia,
  MDBRow,
  MDBCol,
} from "mdbreact";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import UserInboxSidebarComponent from "./UserInboxSidebar.component";
import UserPosts from "./UserPosts.components";
import UCreatePost from "../myfeed/UCreatePost.component";

class UserProfile extends Component {
  render() {
    const { profile } = this.props.profile;
    const { auth } = this.props;  
    return (
      <div>
        <MDBContainer>
          {profile && profile.user._id !== auth.user.id && (
            <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
              <p className="mr-4 mb-0">Profile</p>
              <Link to='/user/messages' className="text-default">
                <MDBIcon className="mr-2" icon="envelope" />
                Send message
              </Link>
            </MDBCardHeader>
          )}
          <MDBMedia className="p-4 rounded">
            <MDBMedia>
              <img
                className="card-img-100 rounded-circle d-flex z-depth-1 mr-3"
                src={profile && profile.user.avatar}
                alt=""
              />
            </MDBMedia>
            <MDBMedia body>
              <div className="d-flex">
                <h5 className="font-weight-bold text-default mt-0 ">
                  {profile &&
                    `${profile.user.firstName} ${profile.user.lastName}`}
                </h5>
                &nbsp;
                <span className="grey-text small pt-1">
                  @{profile && profile.handle}
                </span>
              </div>

              <ul className="list-unstyled list-inline mb-2 pt-1">
                {profile && profile.social && profile.social.facebook && (
                  <li className="list-inline-item">
                    <a
                      href={profile && profile.social.facebook}
                      target="_blank"
                    >
                      <MDBIcon
                        fab
                        className="grey-text"
                        size="lg"
                        icon="facebook"
                      />
                    </a>
                  </li>
                )}

                {profile && profile.social && profile.social.twitter && (
                  <li className="list-inline-item">
                    <a href={profile && profile.social.twitter} target="_blank">
                      <MDBIcon
                        fab
                        className="grey-text"
                        size="lg"
                        icon="twitter"
                      />
                    </a>
                  </li>
                )}
                {profile && profile.social && profile.social.google && (
                  <li className="list-inline-item">
                    <a href={profile && profile.social.google} target="_blank">
                      <MDBIcon
                        fab
                        className="grey-text"
                        size="lg"
                        icon="google-plus"
                      />
                    </a>
                  </li>
                )}
                {profile && profile.social && profile.social.linkedin && (
                  <li className="list-inline-item">
                    <a
                      href={profile && profile.social.linkedin}
                      target="_blank"
                    >
                      <MDBIcon
                        fab
                        className="grey-text"
                        size="lg"
                        icon="linkedin"
                      />
                    </a>
                  </li>
                )}
                {profile && profile.social && profile.social.instagram && (
                  <li className="list-inline-item">
                    <a
                      href={profile && profile.social.instagram}
                      target="_blank"
                    >
                      <MDBIcon
                        fab
                        className="grey-text"
                        size="lg"
                        icon="instagram"
                      />
                    </a>
                  </li>
                )}
              </ul>
              {profile && profile.bio}
            </MDBMedia>
          </MDBMedia>
          <MDBRow>
            {profile && profile.user._id === auth.user.id && (
              <MDBCol md="4">
                <UserInboxSidebarComponent />
              </MDBCol>
            )}

            <MDBCol md="8">
              <div className="mt-4" />
              {profile && profile.user._id === auth.user.id && <UCreatePost />}
              <div className="mt-4" />
              {profile && <UserPosts profile={profile} />}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

UserProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps)(withRouter(UserProfile));

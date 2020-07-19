import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBFooter, MDBCardFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UProfileItem extends Component {
    render() {
        const {profile} = this.props
        const MAX_LENGTH = 50;
        console.log(profile)
        return (
            <div className='mr-5 mb-5' style={{ width: "22rem", height:'32rem'}}>
                    <MDBCard className='h-100'>
                    <MDBCardImage className="img-fluid w-100" src={profile.user.avatar}
                        waves />
                    <MDBCardBody className='h-50'>
                        <MDBCardTitle>{`${profile.user.firstName} ${profile.user.lastName}`}</MDBCardTitle>
                        <MDBCardText>
                        {profile.bio.length<MAX_LENGTH ? profile.bio: <>{profile.bio.substring(0, MAX_LENGTH)}... <Link to={`/user/profile`}>read more</Link></>}    
                        </MDBCardText>
                        <div>
                        <ul className="list-unstyled list-inline mb-2 pt-1">
              {profile && profile.social && profile.social.facebook && (<li className="list-inline-item">
                    <a href={profile && profile.social.facebook} target='_blank'>
                        <MDBIcon
                      fab
                      className="grey-text"
                      size="lg"
                      icon="facebook"
                    /></a>
                  </li>)}
                  
                  {profile && profile.social && profile.social.twitter && (<li className="list-inline-item">
                  <a href={profile && profile.social.twitter} target='_blank'>
                    <MDBIcon
                      fab
                      className="grey-text"
                      size="lg"
                      icon="twitter"
                    />
                    </a>
                  </li>)}
                  {profile && profile.social && profile.social.google && <li className="list-inline-item">
                  <a href={profile && profile.social.google} target='_blank'>

                    <MDBIcon
                      fab
                      className="grey-text"
                      size="lg"
                      icon="google-plus"
                    />
                    </a>
                  </li>}
                  {profile && profile.social && profile.social.linkedin &&  <li className="list-inline-item">
                  <a href={profile && profile.social.linkedin} target='_blank'>

                    <MDBIcon
                      fab
                      className="grey-text"
                      size="lg"
                      icon="linkedin"
                    />
                    </a>
                  </li>}
                  {profile && profile.social && profile.social.instagram && <li className="list-inline-item">
                  <a href={profile && profile.social.instagram} target='_blank'>

                    <MDBIcon
                      fab
                      className="grey-text"
                      size="lg"
                      icon="instagram"
                    />
                    </a>
                  </li>}
                </ul> 
                

                        </div>
                    </MDBCardBody>  
                        <div className='ml-4 mr-4 mb-3'>
                            <Link className='float-right' to={`/user/${profile.user._id}`}>View Profile</Link>

                        </div>
                    </MDBCard>
                    
            </div>
        )
    }
}



export default connect() (UProfileItem)
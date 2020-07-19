import React, { Component } from 'react'
import { connect } from 'react-redux'
import UProfileItem from './UProfileItem.component'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import PropTypes from 'prop-types'

class UserProfiles extends Component {
    render() {
        const {profiles} = this.props.profile
        return (
            <div className={`d-flex flex-wrap ${profiles && profiles.length < 3 ? `justify-content-start`: `justify-content-between`}`}>
                {profiles && profiles.map(profile => <UProfileItem key={profile._id} profile={profile} />)}
                

            </div>
        )
    }
}

UserProfiles.propTypes = {
    profile: PropTypes.object.isRequired,
    
}

const mapStateToProps = state => ({
    profile: state.profile
})
export default connect(mapStateToProps) (UserProfiles)

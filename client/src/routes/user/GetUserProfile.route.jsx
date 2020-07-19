import React, { Component } from 'react'
import UserProfile from '../../components/userPanel/body/profile/UserProfile.component'
import UserHeader from '../../components/userPanel/header/UserHeader.component'
import { getUserProfile } from '../../actions/userProfileActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class UProfile extends Component {
    componentDidMount(){
        this.props.getUserProfile(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <UserHeader/>
                <UserProfile/>
            </div>
        )
    }
}
export default connect(null, {getUserProfile})(withRouter(UProfile))


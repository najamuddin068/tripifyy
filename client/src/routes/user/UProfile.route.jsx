import React, { Component } from 'react'
import UserProfile from '../../components/userPanel/body/profile/UserProfile.component'
import UserHeader from '../../components/userPanel/header/UserHeader.component'
import { getCurrentProfile } from '../../actions/userProfileActions'
import { connect } from 'react-redux'


class UProfile extends Component {
    componentDidMount(){
        this.props.getCurrentProfile()
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
export default connect(null, {getCurrentProfile})(UProfile)


import React, { Component } from 'react';
import  UserHeader  from '../../components/userPanel/header/UserHeader.component';
import  UserHome  from '../../components/userPanel/body/dashboard/UserHome.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/userProfileActions'
import PropTypes from 'prop-types'
import Spinner from '../../common/Spinner.component'
import CreateUserProfileRoute from './CreateUserProfile.route';
import {getNotificationByUser} from '../../actions/notificationActions'

class User extends Component {

    componentDidMount(){
        this.props.getCurrentProfile()
        
    }

    render() {
        const {user} = this.props.auth
        
        const { profile, loading} = this.props.profile

        let userHomeContent;

        if (profile === null || loading){
            userHomeContent = (<Spinner/>)
        } else {
            if (Object.keys(profile).length > 0) {
                userHomeContent = (
                <div>

                <UserHeader/>
                <UserHome/>
                </div>)
            } else {
                this.props.history.push('/user/create-profile')
            }
            
        }

        return (
            <div>
                {userHomeContent}
            </div>
        );
    }
}

User.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    profile: state.profile,
    auth: state.auth
})
export default connect(mapStateToProps,{getCurrentProfile, getNotificationByUser})(withRouter(User));
import React, { Component } from 'react';
import CreateProfile from '../../components/userPanel/profile/CreateProfile.component';
import  UserHeader  from '../../components/userPanel/header/UserHeader.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CreateUserProfile extends Component {

    componentDidMount(){
        if(!this.props.auth.isAuthenticated){
            this.props.history.push('/sign-in')
        }
    }

    render() {
        return (
            <div>
                <UserHeader/>
                <CreateProfile/>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(CreateUserProfile));
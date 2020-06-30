import React, { Component } from 'react';
import  UserHeader  from '../../components/userPanel/header/UserHeader.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateProfile from '../../components/userPanel/body/profile/CreateProfile.component';

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
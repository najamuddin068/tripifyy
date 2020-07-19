import React, { Component } from 'react';
import  UserHeader  from '../../components/userPanel/header/UserHeader.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateProfile from '../../components/userPanel/body/profile/CreateProfile.component';

class CreateUserProfile extends Component {


    render() {
        return (
            <div>
                <UserHeader/>
                <CreateProfile/>
            </div>
        );
    }
}

export default (withRouter(CreateUserProfile));
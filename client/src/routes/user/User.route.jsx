import React, { Component } from 'react';
import  UserHeader  from '../../components/userPanel/header/UserHeader.component';
import  UserHome  from '../../components/userPanel/body/dashboard/UserHome.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class User extends Component {

    componentDidMount(){
        if(!this.props.auth.isAuthenticated){
            this.props.history.push('/sign-in')
        }
    }

    render() {
        return (
            <div>
                <UserHeader/>
                <UserHome/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(User));
import React, { Component } from 'react'
import  UserHeader  from '../../components/userPanel/header/UserHeader.component';
import UMyFeed from '../../components/userPanel/body/myfeed/UMyFeed.component';

class UserFeed extends Component {
    render() {
        return (
            <div>
                <UserHeader/>
                <UMyFeed/>
            </div>
        )
    }
}
export default UserFeed

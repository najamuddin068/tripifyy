import React, { Component } from 'react'
import UserHeader from '../../components/userPanel/header/UserHeader.component'
import UPost from '../../components/userPanel/body/post/UPost.component'
export default class UserPost extends Component {
    render() {
        return (
            <div>
                <UserHeader/>
                <UPost/>
            </div>
        )
    }
}

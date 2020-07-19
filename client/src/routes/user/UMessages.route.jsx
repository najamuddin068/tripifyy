import React, { Component } from 'react'
import  UserHeader  from '../../components/userPanel/header/UserHeader.component'
import Messages from '../../components/userPanel/body/message/Messages.component'

export default class UMessages extends Component {
    render() {
        return (
            <div>
                <UserHeader/>
                <Messages/>
            </div>
        )
    }
}

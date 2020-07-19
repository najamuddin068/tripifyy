import React, { Component } from 'react'
import OrganizerHeader from '../../components/organizerPanel/header/OrganizerHeader.component'
import Notification from '../../components/organizerPanel/body/notification/Notification.component'

export default class OrganizerAnalytics extends Component {
    render() {
        return (
            <div>
                <OrganizerHeader/>
                <Notification/>
            </div>
        )
    }
}

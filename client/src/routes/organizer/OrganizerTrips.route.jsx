import React, { Component } from 'react'
import OrganizerHeader from '../../components/organizerPanel/header/OrganizerHeader.component'
import ViewTrips from '../../components/organizerPanel/body/trips/view-trip/ViewTrips.component'


export default class OrganizerTrips extends Component {
    render() {
        return (
            <div>
                    <OrganizerHeader/>
                    <ViewTrips/>

            </div>
        )
    }
}

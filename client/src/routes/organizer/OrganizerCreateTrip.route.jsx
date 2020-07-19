import React, { Component } from 'react'
import OrganizerHeader from '../../components/organizerPanel/header/OrganizerHeader.component'
import CreateTrips from '../../components/organizerPanel/body/trips/create-trip/CreateTrips.component'

export default class OrganizerCreateTrip extends Component {
    render() {
        return (
            <div>
                <OrganizerHeader/>
                <CreateTrips/>

            </div>
        )
    }
}

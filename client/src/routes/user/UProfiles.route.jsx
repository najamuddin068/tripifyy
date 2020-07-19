import React, { Component } from 'react'
import  UserHeader from '../../components/userPanel/header/UserHeader.component'
import Profiles from '../../components/userPanel/body/profiles/Profiles.component'

class UProfiles extends Component {
    render() {
        return (
            <div>
                <UserHeader/>
                <Profiles/>
            </div>
        )
    }
}

export default UProfiles

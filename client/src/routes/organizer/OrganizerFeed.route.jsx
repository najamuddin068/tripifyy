import React, { Component } from 'react';
import MyFeed from '../../components/organizerPanel/body/myfeed/MyFeed.component';
import  OrganizerHeader  from '../../components/organizerPanel/header/OrganizerHeader.component';
import { MDBContainer } from 'mdbreact';

class OrganizerFeed extends Component {
    render() {
        return (
            <div>
                <OrganizerHeader/>
                <MyFeed/>
                
            </div>
        );
    }
}

export default OrganizerFeed;
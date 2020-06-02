import React, { Component } from 'react';
import Post from '../../components/organizerPanel/body/post/Post.component';
import OrganizerHeader from '../../components/organizerPanel/header/OrganizerHeader.component';

class OrganizerPost extends Component {
    render() {
        return (
            <div>
                <OrganizerHeader/>
                <Post/>
            </div>
        );
    }
}

export default OrganizerPost;

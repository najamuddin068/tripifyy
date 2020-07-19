import React, { Component } from 'react';
import UserFeedItem from './UserFeedItem.component';

class UserPostFeed extends Component {
    render() {
        const {posts} = this.props; 
        return (
            <div style={{ backgroundColor: '#E9ECEF', padding: '10px 0px', borderRadius:'3px'}}>
                {posts.map(post => <UserFeedItem key={post.id} post={post} />)}
               

            </div>
        );
    }
}

export default UserPostFeed;

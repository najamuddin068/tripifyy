import React, { Component } from 'react';
import UFeedItem from './UFeedItem.component';

class UPostFeed extends Component {
    render() {
        const {posts} = this.props; 
        return (
            <div style={{ backgroundColor: '#E9ECEF', padding: '10px 0px', borderRadius:'3px'}}>
                {posts.map(post => <UFeedItem key={post.id} post={post} />)}
               

            </div>
        );
    }
}

export default UPostFeed;

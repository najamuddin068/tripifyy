import React, { Component } from 'react';
import FeedItem from './FeedItem.component';

class PostFeed extends Component {
    render() {
        const {posts} = this.props; 
        return (
            <div>
                {posts.map(post => <FeedItem key={post.id} post={post} />)}
            </div>
        );
    }
}

export default PostFeed;

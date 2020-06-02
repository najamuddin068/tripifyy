import React, { Component } from 'react';
import FeedItem from './FeedItem.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getPosts } from '../../../../actions/postActions'
import  Spinner  from './Spinner.component';
import PostFeed from './PostFeed.component';
class NewFeed extends Component {
    componentDidMount(){
        this.props.getPosts();
    }
    render() {
        const { posts, loading } = this.props.post;
        let postContent;

        if(posts === null || loading ){
            postContent = <Spinner/>
        } else {
            postContent = <PostFeed posts={posts}/>
        }

        return (
            <div>
                <span style={{fontSize:'22px'}}>New Feeds</span><hr style={{width:'82%',float:'right',color:'black'}}/>
                {postContent}
                
                
            </div>
        );
    }
}

NewFeed.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    post: state.post
})
export default connect(mapStatetoProps, {getPosts}) (NewFeed);
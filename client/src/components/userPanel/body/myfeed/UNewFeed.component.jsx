import React, { Component } from 'react';
import UFeedItem from './UFeedItem.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getPosts } from '../../../../actions/postActions'
import  Spinner  from '../../../../common/Spinner.component';
import UPostFeed from './UPostFeed.component';
class UNewFeed extends Component {
    componentDidMount(){
        this.props.getPosts();
    }
    render() {
        const { posts, loading } = this.props.post;
        let postContent;

        if(posts === null || loading ){
            postContent = <Spinner/>
        } else {
            postContent = <UPostFeed posts={posts}/>
        }

        return (
            <div>
                <span style={{fontSize:'22px'}}>New Feeds</span><hr style={{width:'82%',float:'right',color:'black'}}/>
                {postContent}
                
                
            </div>
        );
    }
}

UNewFeed.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    post: state.post
})
export default connect(mapStatetoProps, {getPosts}) (UNewFeed);
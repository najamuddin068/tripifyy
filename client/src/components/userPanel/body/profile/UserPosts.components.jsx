import React, { Component } from 'react'
import Spinner from '../../../../common/Spinner.component';
import UserPostFeed from './UserPostFeed.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getPostsByUser } from '../../../../actions/postActions'


class UserPosts extends Component {
    componentDidMount(){

        this.props.getPostsByUser(this.props.profile.user._id);
    }
    render() {
        const { posts, loading } = this.props.post;
        
        const {profile} = this.props.profile  
      const {auth} = this.props

        let postContent;

        if(posts === null || loading ){
            postContent = <Spinner/>
        } else {
            postContent = <UserPostFeed posts={posts}/>
        }

        return (
            <div>
                <span style={{fontSize:'22px'}}>{profile && profile.user._id === auth.user.id ? `My Posts` : `User Posts`}</span><hr style={{width:'82%',float:'right',color:'black'}}/>
                {postContent}
                
                
            </div>
        );
    }
}
UserPosts.propTypes = {
    getPostsByUser: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired

}

const mapStatetoProps = state => ({
    auth: state.auth,
    post: state.post,
})
export default connect(mapStatetoProps, {getPostsByUser}) (UserPosts);

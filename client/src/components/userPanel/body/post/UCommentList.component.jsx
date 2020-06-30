import React, { Component } from 'react';
import PropTypes from 'prop-types'
import UPostComment from './UPostComment.component';

class UCommentList extends Component {
    render() {
        const {comments, postId} = this.props
        return (
            <div>
                {comments.map(comment=> <UPostComment key={comment._id} comment={comment} postId={postId}/>)}
            </div>
        );
    }
}
UCommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
}
export default UCommentList;

import React, { Component } from "react";
import {
  MDBContainer,
  MDBCardHeader,
  MDBIcon,
  MDBMedia,
  MDBBtn,
  MDBPageItem,
  MDBPagination,
  MDBPageNav,
} from "mdbreact";
import { Link } from "react-router-dom";

class PostComment extends Component {
  render() {
      const {comment, postId} = this.props
    return (
      <div>
          {console.log(comment)}
        <MDBContainer>
          
          <MDBMedia className="d-block d-md-flex mt-4">
            <img
              className="card-img-64 d-flex mx-auto mb-3 rounded-circle"
              src={comment.avatar}
              alt=""
            />
            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                <div className='d-flex justify-content-between'>
              <h5 className="font-weight-bold mt-0">
                {comment.name}
              </h5>
              <span className='grey-text' style={{fontSize:'15px'}}>{comment.date}</span>
             
              </div>
             <div> {comment.text}</div>
             <Link className='red-text' to='' style={{fontSize:'15px', float:'right'}}>delete</Link>

              
            </MDBMedia>
            </MDBMedia>
            </MDBContainer>
      </div>
    );
  }
}

export default PostComment;

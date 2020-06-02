import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color='dark' >
      
      <div className="footer-copyright py-3">
        <MDBContainer style={{margin:'0px 100px'}}>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://secret-scrubland-81844.herokuapp.com/" target='_blank'> Najam Uddin </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    );
}

export default Footer;

import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn, MDBCardBody } from 'mdbreact';

export class PopulatTripCard extends Component {
    render() {
        const {price,
        img,
        duration,
        organizer,
        total,
        joined,
        date,
        destination} = this.props
        return (
            <MDBCol md="3">
            <MDBCard className="mb-2" style={{height:'400px'}}>
              <MDBCardImage 
              className="img-fluid" 
              src={require(`../../../../assets/trips/${img}.jpg`)} 
              style={{height:'180px'}}
               />
              <MDBCardBody>
                <MDBCardTitle>{`${destination}`}</MDBCardTitle>
                <MDBCardText>
                  <strong>{`${duration} to ${destination}`}</strong>
                  <br/>
                  {`Organizer: ${organizer}`} <br/>
                  {`Price: ${price}`} <br/>
                  {`date: ${date}`}
                </MDBCardText>
                <MDBBtn color="primary" size='sm'>Join</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        );
    }
}

export default PopulatTripCard;

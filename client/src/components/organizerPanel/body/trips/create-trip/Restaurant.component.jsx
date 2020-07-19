import React, { Component } from "react";
import {
  MDBRow,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBCol,
  MDBBtn,
} from "mdbreact";

import StarRatings from "react-star-ratings";

export default class Hotel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

        <div className="pb-3 pt-3">
          <MDBRow>
            <MDBCol md="6">
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Others/documentation/img%20(136)-mini.jpg"
                        alt="First slide"
                      />
                      <MDBMask overlay="black-light" />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Others/documentation/img%20(137)-mini.jpg"
                        alt="Second slide"
                      />
                      <MDBMask overlay="black-light" />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
                        alt="Third slide"
                      />
                      <MDBMask overlay="black-light" />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
            <MDBCol md="6">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                    <h4>Roaster</h4>

                  <div className="mb-2">
                    address: h24, st#2, pk rd, islamabad
                  </div>
                </div>
                <div className="d-flex flex-column">
                    <span>
                    <h5>Price: 1500</h5>
                    </span>
                    <div className='d-flex align-items-center'>

                    <span>
                    <StarRatings
                      rating={2.403}
                      starDimension="28px"
                      starSpacing="0px"
                      starRatedColor="#FFC007"
                    />
                    </span>
                    <span className="ml-2">1726 reviews</span>
                    <span>
                     <MDBBtn color='link' className='blue-text'>Book</MDBBtn>
                     </span>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
        <hr />

      </div>
    );
  }
}

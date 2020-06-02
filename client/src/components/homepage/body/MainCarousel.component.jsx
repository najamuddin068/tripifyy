import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';
import './MainCarousel.styles.scss'

const MainCarousel = () => {
    return (
        <div>
       
        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        fade
        
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" className="C-item">
            <MDBView>
              <img
                className="d-block w-100 imageView"
                src={require("../../../assets/pic7.jpg")}
                alt="First slide"
              />
              
            </MDBView>
            
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2" className="C-item">
            <MDBView>
              <img
                className="d-block w-100 imageView"
                src={require("../../../assets/pic4.jpg")}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" className="C-item">
            <MDBView>
              <img
                className="d-block w-100 imageView"
                src={require("../../../assets/pic11.jpg")}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </div>
    );
}

export default MainCarousel;

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bgimage from "../assets/image/Rectangle 43.png";
import sloganimg from "../assets/image/Mask group.png";
import roundarrow from "../assets/image/Group 65.svg";

const Section1 = () => {
  return (
    <>
    <div className='slider-main'>
    <Carousel>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100 bg-image"
        src={bgimage}
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100 bg-image"
        src={bgimage}
        alt="Second slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 bg-image"
        src={bgimage}
        alt="Third slide"
      />
      
    </Carousel.Item>
  </Carousel>

  <div className='slider-content'>
    <div className='slider-slogan'>
    <div class="slogan-text">Fresh Mango</div>
    <div class="slogan-img">
            <img src={sloganimg} />
            <div class="slogan-text">IT Support</div>
          </div>
          <div class="slogan-text">Services</div>
    </div>
    <div className='slider-services'>
    <div class="services">
      <div>FIND OUT MORE</div>
      <img src={roundarrow} />
    </div>
    <div class="services">
      <div>CALL FOR IT SUPPORT</div>
      <img src={roundarrow} />
    </div>
    <div class="services">
      <div>BOOK FREE CUNSULTANCY</div>
      <img src={roundarrow} />
    </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Section1
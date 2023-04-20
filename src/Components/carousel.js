import React from 'react'
import image2 from "../Images/main2.jpg"
import image1 from "../Images/main1.jpg"
import Carousel from 'react-bootstrap/Carousel';


function CarouselA() {
  return (
    <div>
    <div className='carousel-shown-down'>
    <Carousel fade>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
        
      </Carousel.Item>
      
    </Carousel>





        {/* <div className='carousel-shown-down-btn'>Shop Now</div> */}
    </div>
 
</div>
  )
}

export default CarouselA;
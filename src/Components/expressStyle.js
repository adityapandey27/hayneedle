import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import 'swiper/css';
import "../CSS/style.css";
import c1 from "../Images/a1.jpg";
import c2 from "../Images/a2.jpg";
import c3 from "../Images/a3.jpg";
import c4 from "../Images/a4.jpg";
import c5 from "../Images/a5.jpg";
import { expressData } from "../Data/express.js";


function ExpressStyle() {

    
  return (
    <div className='expressStyle-slide-container'>
        <div className="expressStyle-heading">Express your style for less</div>

    <Swiper spaceBetween={30}
     slidesPerView={4}
     slidesPerGroup={1}
     loop={true}
     loopFillGroupWithBlank={true}
     className="mySwiper"
     pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}>
       {
        expressData.map((data)=> 
        <SwiperSlide><div className='expressStyle-container'>
        <div className='expressStyle-element'>
            <img className='expressStyle-element-img' src={data.image}></img>
            
        </div>
        <p className='expressStyle-img-title'>{data.title}</p>
    </div></SwiperSlide>
        )
      }
    </Swiper>
    </div>
  )
}

export default ExpressStyle
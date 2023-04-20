import React from 'react'
import "../CSS/style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { CuratedData } from '../Data/curated';
function Curated() {
  function doIt(data)
  {
    // alert(data.id)
    return data.title
  }
  return (
    <div className='curated-container'>
      
        <div className="expressStyle-heading">Curated Just For You</div>
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
        <div className='curated-cards'>
            {
                CuratedData.map((data)=>
                <SwiperSlide>
            <div className='curated-card'>
                <img className='curated-img' src={data.image}></img>
                <p className='curated-title'>{doIt(data)}</p>
                <div className='curated-rating'>{data.rating}</div>
                <p className='curated-price'>{data.price}</p>
                <p className='curated-btn' type="button">Add To Cart</p>
            </div>
        </SwiperSlide>)
            }
        
                </div>
        </Swiper>
    </div>
  )
}

export default Curated
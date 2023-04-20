import React from 'react'
import "../CSS/style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import o1 from "../Images/ok1.jpg";
import o2 from "../Images/ok2.jpg";
import o3 from "../Images/ok3.jpg";
import o4 from "../Images/ok4.jpg";
import o5 from "../Images/ok5.jpg";
import o6 from "../Images/ok6.jpg";
import o7 from "../Images/ok7.jpg";
import o8 from "../Images/ok8.jpg";


function Trending() {
  return (
    <div className='square-slide-container'>
        <div className="square-heading">Trending Style</div>

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
      <SwiperSlide><div className='square-container'>
                <div className='square-element'>
                    <img className='square-element-img' src={o1}></img>
                    <p className='square-img-title'>Modern</p>
                </div>
            </div></SwiperSlide>
      <SwiperSlide><div className='square-container'>
                <div className='square-element'>
                    <img className='square-element-img' src={o2}></img>
                    <p className='square-img-title'>Farmhouse</p>
                </div>
            </div></SwiperSlide>
      <SwiperSlide><div className='square-container'>
                <div className='square-element'>
                    <img className='square-element-img' src={o3}></img>
                    <p className='square-img-title'>Traditional</p>
                </div>
            </div></SwiperSlide>
      <SwiperSlide><div className='square-container'>
                <div className='square-element'>
                    <img className='square-element-img' src={o4}></img>
                    <p className='square-img-title'>Mid-Century</p>
                </div>
            </div></SwiperSlide>
    
            <SwiperSlide><div className='square-container'>
                <div className='square-element'>
                    <img className='square-element-img' src={o5}></img>
                    <p className='square-img-title'>Industrial</p>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className='square-container'>
                <div className='square-element'>
                    <img className='square-element-img' src={o6}></img>
                    <p className='square-img-title'>Boho</p>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className='square-container'>
                <div className='square-element'>
                    <img className='square-element-img' src={o7}></img>
                    <p className='square-img-title'>Coastal</p>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className='square-container'>
                <div className='square-element'>
                    <img className='square-element-img' src={o8}></img>
                    <p className='square-img-title'>Boho Outdoor</p>
                </div>
            </div></SwiperSlide>
            </Swiper>
            </div>
  )
}

export default Trending
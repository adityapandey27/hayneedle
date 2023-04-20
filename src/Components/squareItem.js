import React from 'react'
import "../CSS/style.css";

// import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SquareData } from '../Data/square.js';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SquareItem() {
  return (

    

    <div className='square-slide-container'>
        <div className="square-heading">Shop By Department</div>

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
      modules={[Pagination, Navigation]}
     >
       {
        SquareData.map((data)=>
        <SwiperSlide><div className='square-container'>
                <div className='square-element'>
                    <img className='square-element-img' src={data.Image}></img>
                    <p className='square-img-title'>{data.Title}</p>
                </div>
            </div>
        </SwiperSlide>
        )
       } 
    </Swiper>

    
        {/* <div className='square-slide-content'>
            
            <div className='square-slide-wrraper square-container'>
                <div className='square-card square-element'>
                    <img className='square-card-img square-element-img' src={c1}></img>
                    <p className='square-card-title square-element-title'></p>
                </div>
            </div>

            <div className='square-slide-wrraper square-container'>
                <div className='square-card square-element'>
                    <img className='square-card-img square-element-img' src={c2}></img>
                    <p className='square-card-title square-element-title'></p>
                </div>
            </div>

            <div className='square-slide-wrraper square-container'>
                <div className='square-card square-element'>
                    <img className='square-card-img square-element-img' src={c3}></img>
                    <p className='square-card-title square-element-title'></p>
                </div>
            </div>

                        <div className='square-slide-wrraper square-container'>
                <div className='square-card square-element'>
                    <img className='square-card-img square-element-img' src={c4}></img>
                    <p className='square-card-title square-element-title'></p>
                </div>
            </div>

                        <div className='square-slide-wrraper square-container'>
                <div className='square-card square-element'>
                    <img className='square-card-img square-element-img' src={c1}></img>
                    <p className='square-card-title square-element-title'></p>
                </div>
            </div>
            

        </div> */}
    </div>
  )
}

//     <>
//     <Carousel slide={false}>
//     <Carousel.Item>
//             <div className='square-element'>
//             <img className='square-element-img' src={c1}></img>
//             <p className='square-img-title'>Furniture</p>
//         </div>
//     </Carousel.Item>
//     <Carousel.Item>
//     <div className='square-element'>
//             <img className='square-element-img' src={c2}></img>
//             <p className='square-img-title'>Furniture</p>
//         </div>
    
//     </Carousel.Item>
//     <Carousel.Item>
//     <div className='square-element'>
//             <img className='square-element-img' src={c3}></img>
//             <p className='square-img-title'>Furniture</p>
//         </div>
//     </Carousel.Item>
//     <Carousel.Item>
//     <div className='square-element'>
//             <img className='square-element-img' src={c4}></img>
//             <p className='square-img-title'>Furniture</p>
//         </div>
//     </Carousel.Item>
//   </Carousel>





/* 
    <div className="square-Items">
    <div className="square-heading">Shop By Department</div>
    <div className='square-container'>
        <div className='square-element'>
            <img className='square-element-img' src={c1}></img>
            <p className='square-img-title'>Furniture</p>
        </div>
        <div className='square-element'>
        <img className='square-element-img' src={c2}></img>
            <p className='square-img-title'>Outdoor</p>
        </div>
        <div className='square-element'>
        <img className='square-element-img' src={c3}></img>
            <p className='square-img-title'>Home Deco</p>
        </div>
        <div className='square-element'>
        <img className='square-element-img' src={c4}></img>
            <p className='square-img-title'>Rugs</p>
        </div>
    </div>
    </div> */
    
    
  


export default SquareItem
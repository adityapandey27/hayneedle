import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../CSS/style.css";

// import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper";

import c1 from "../Images/a1.jpg";
import c2 from "../Images/a2.jpg";
import c3 from "../Images/a3.jpg";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Temp() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#000"
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );


















  // return (
  //   <div className="temp-cont">
  //     <Swiper
  //       // style={{
  //       //   "--swiper-navigation-color": "#fff",
  //       //   "--swiper-pagination-color": "#000",
  //       // }}
  //       spaceBetween={10}
  //       navigation={true}
  //       thumbs={{ swiper: thumbsSwiper }}
  //       modules={[FreeMode, Navigation, Thumbs]}
  //       className="mySwiper2"
  //     >
  //       <SwiperSlide>
  //         <img className="a"src={c1} />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img className="a"src={c2} />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img className="a"src={c3} />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img className="a"src={c3} />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide> 
  //         <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
  //       </SwiperSlide>
  //     </Swiper>
  //     <Swiper
  //       // onSwiper={setThumbsSwiper}
  //       spaceBetween={10}
  //       slidesPerView={4}
  //       freeMode={true}
  //       watchSlidesProgress={true}
  //       modules={[FreeMode, Navigation, Thumbs]}
  //       className="mySwiper"
  //     >
  //       <SwiperSlide>
  //         <img src={c1} />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src={c2} />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src={c3} />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src={c3}/>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
  //       </SwiperSlide>
  //     </Swiper>
  //   </div>
  // );
}

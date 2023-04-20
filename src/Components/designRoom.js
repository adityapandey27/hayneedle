import React from 'react'
import "../CSS/style.css";

// import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BackGround } from '../Data/Design Room/background';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import a1 from "../Images/Background images/background1.jpg";
import a2 from "../Images/Background images/background2.jpg";
import a3 from "../Images/Background images/background4.jpg";
import a4 from "../Images/Background images/background23jpg.jpg";

// sub images/
import animal1 from "../Images/sub images/animal1.png";
import animal2 from "../Images/sub images/animal2.png";
import animal3 from "../Images/sub images/animal3.png";
import boat1 from "../Images/sub images/boat1.png";
import boat2 from "../Images/sub images/boat2.png";
import boat3 from "../Images/sub images/boat3.png";
import boy1 from "../Images/sub images/boy1.png";
import boy2 from "../Images/sub images/boy2.png";
import bus1 from "../Images/sub images/bus1.png";
import car1 from "../Images/sub images/car1.png";
import car2 from "../Images/sub images/car2.png";
import car3 from "../Images/sub images/car3.png";
import car4 from "../Images/sub images/car4.png";
import car5 from "../Images/sub images/car5.png";
import rocket1 from "../Images/sub images/rocket1.png";
import rocket2 from "../Images/sub images/rocket2.png";
import rocket3 from "../Images/sub images/rocket3.png";
import rocket4 from "../Images/sub images/rocket4.png";
import tree1 from "../Images/sub images/tree1.png";
import tree2 from "../Images/sub images/tree2.png";
import tree3 from "../Images/sub images/tree3.png";
import truck1 from "../Images/sub images/truck1.png";
import x1 from "../Images/sub images/x1.png"
import dolphine1 from "../Images/sub images/dolphine1.png"
import dolphine2 from "../Images/sub images/dolphine2.png"
import fish1 from "../Images/sub images/fish.png";
import submarine1 from "../Images/sub images/submarine1.png"
import submarine2 from "../Images/sub images/submarine2.png"

import A from './a';
import { useState,useEffect } from 'react';


function DesignRoom() {
  const [img,setImg]=useState(1);

  const [clickBtn,setClick]=useState(0);
  useEffect(()=>{
    setClick();
  },[])

  const [dotBtn,setBtn]=useState(1);

  // Java Scipt part
  // document.querySelector('')

  // changing the image in hidden div
  // function changeImage(){
  //   // img==1 && dotBtn==1?car1:dotBtn==2?car2:car1}></img>
  //   if(img==1)
  //   {
  //     if(dotBtn==1)
  //     {
  //       <>return car1;</>
  //     }
  //   }
  // }
  
    
  return (
    
    <div className='design-room-container'>
        <div className='design-room-top'>
    <Swiper spaceBetween={30}
     slidesPerView={3}
     slidesPerGroup={1}
     loop={false}
     loopFillGroupWithBlank={true}
     className="mySwiper"
    //  pagination={{
    //     clickable: true,
    //   }}
      navigation={true}
      modules={[Pagination, Navigation]}
     >
       {
        BackGround.map((data)=>
        <SwiperSlide style={{margin:"0 0 0 0",padding:"0 0 0 0",width:"400px"}}>
            <div className=' design-container' >
                <div className=' design-element'>
                   <img className=' design-element-img' src={data.image} onClick={()=>{
                    setImg(data.id)
                 const aVar=document.querySelector('.a-left-sub-a');
                 const bVar=document.querySelector('.a-left-sub-b');
                 const cVar=document.querySelector('.a-left-sub-c');

                 const doA=document.querySelector(".dot1");
                 const doB=document.querySelector(".dot2");
                 const doC=document.querySelector(".dot3");
                 
                    if(data.id==1)
                    {
                      // alert("here")
                      
                      aVar.style.height="600px";
                      aVar.style.width="640px";
                      aVar.style.marginTop="160px";
                      aVar.style.marginLeft="10px";
                      // aVar.style.zIndex="1"

                      

                      bVar.style.height="300px";
                      bVar.style.width="150px";
                      bVar.style.marginTop="300px";
                      bVar.style.marginLeft="780px";
                      // bVar.style.zIndex="0"

                      cVar.style.height="600px";
                      cVar.style.width="420px";
                      cVar.style.marginTop="10px";
                      cVar.style.marginLeft="100px";
                      // bVar.style.zIndex="0"


                      
                      doA.style.marginTop="460px";
                      doA.style.marginLeft="200px";

                      doB.style.marginTop="450px";
                      doB.style.marginLeft="840px";

                      doC.style.marginTop="200px";
                      doC.style.marginLeft="450px";

                     
                    }
                    else if(data.id==2)
                    {
                      // alert("there")

                      aVar.style.height="300px";
                      aVar.style.width="330px";
                      aVar.style.marginTop="350px";
                      aVar.style.marginLeft="380px";
                      // aVar.style.zIndex="1";


                      bVar.style.height="330px";
                      bVar.style.width="130px";
                      bVar.style.marginTop="330px";
                      bVar.style.marginLeft="680px";
                      // bVar.style.zIndex="1"

                      cVar.style.height="500px";
                      cVar.style.width="420px";
                      cVar.style.marginTop="50px";
                      cVar.style.marginLeft="70px";
                      // cVar.style.zIndex="1"

                      doA.style.marginTop="400px";
                      doA.style.marginLeft="550px";

                      doB.style.marginTop="500px";
                      doB.style.marginLeft="740px";
                      
                      doC.style.marginTop="200px";
                      doC.style.marginLeft="300px";
                    }
                    else if(data.id==3){

                      aVar.style.height="450px";
                      aVar.style.width="750px";
                      aVar.style.marginTop="240px";
                      aVar.style.marginLeft="380px";
                      // aVar.style.zIndex="1";


                      bVar.style.height="120px";
                      bVar.style.width="150px";
                      bVar.style.marginTop="200px";
                      bVar.style.marginLeft="450px";
                      // bVar.style.zIndex="1"

                      cVar.style.height="150px";
                      cVar.style.width="210px";
                      cVar.style.marginTop="300px";
                      cVar.style.marginLeft="50px";

                      
                      doA.style.marginTop="260px";
                      doA.style.marginLeft="510px";

                      doB.style.marginTop="500px";
                      doB.style.marginLeft="740px";
                      
                      doC.style.marginTop="350px";
                      doC.style.marginLeft="150px";

                    }
                    else{

                      aVar.style.height="350px";
                      aVar.style.width="550px";
                      aVar.style.marginTop="240px";
                      aVar.style.marginLeft="480px";
                      // aVar.style.zIndex="1";


                      bVar.style.height="220px";
                      bVar.style.width="200px";
                      bVar.style.marginTop="100px";
                      bVar.style.marginLeft="450px";
                      // bVar.style.zIndex="1"

                      cVar.style.height="100px";
                      cVar.style.width="80px";
                      cVar.style.marginTop="300px";
                      cVar.style.marginLeft="50px";

                      
                      doA.style.marginTop="400px";
                      doA.style.marginLeft="750px";

                      doB.style.marginTop="200px";
                      doB.style.marginLeft="570px";
                      
                      doC.style.marginTop="330px";
                      doC.style.marginLeft="100px";

                    }
                    
                  
                  }}></img>         
                </div>
                           
            </div>
        </SwiperSlide>
        )
       } 
    </Swiper>
    <div className='dot-div'>     
      <div className='dot1' 
      
     
      onClick={()=>{
        setClick(0);
        setClick(1+clickBtn);
        setBtn(1);
        console.log("after click"+clickBtn);
        const hiddenItem1=document.querySelector('.hidden-div');
        hiddenItem1.style.display="none"; 
        if(clickBtn==0)
        {
          hiddenItem1.style.display="block";
        }
        else{
          hiddenItem1.style.display="none"; 
          setClick(0);
        }       
       }}
      ></div>
      <div className='dot2' onClick={()=>{
        setClick(0);
        setClick(clickBtn+1);
        setBtn(2);
        console.log("after click"+clickBtn);
       const hiddenItem1=document.querySelector('.hidden-div');
       hiddenItem1.style.display="none";
       if(clickBtn==0)
        {
          hiddenItem1.style.display="block";
          
        }
        else{
          hiddenItem1.style.display="none"; 
          setClick(0);
        } 
       
      }}
      ></div>
      <div className='dot3' onClick={()=>{
        setClick(0);
        setBtn(3);
        setClick(clickBtn+1);
        console.log("after click"+clickBtn);
       const hiddenItem1=document.querySelector('.hidden-div');
       hiddenItem1.style.display="none"; 
       if(clickBtn==0)
       {
         hiddenItem1.style.display="block";
         
       }
       else{
         hiddenItem1.style.display="none"; 
         setClick(0);
       } 

      }} 
      ></div>
    </div>

    <div className="a-conainter">
      <div className="a-left">
        <div className='a-left-div-img'>
          <img className='a-left-img' src={img==1?a1:img==2?a2:img==3?a3:img==4?a4:a1} alt="a1"></img>
          <img className='a-left-sub-a' src={img==1?x1:img==2?car4:img==3?boat1:img==4?submarine2:car1} ></img>
          <img className='a-left-sub-b' src={img==1?boy1:img==2?boy2:img==3?boat2:img==4?dolphine1:boat1}></img>
          <img className='a-left-sub-c' src={img==1?tree1:img==2?tree2:img==3?dolphine2:img==4?fish1:tree1}></img>
          <div className='hidden-div'>
                      <img className='hidden1-img' src={
                      img==1 && dotBtn==1?x1:img==1 && dotBtn==2?boy2:img==1 && dotBtn==3?tree3:
                      img==2 && dotBtn==1?car5:img==2 && dotBtn==2?boy1:img==2 && dotBtn==3?tree1:
                      img==3 && dotBtn==1?boat3:img==3 && dotBtn==2?boat3:img==3 && dotBtn==3?dolphine2:
                      img==4 && dotBtn==1?car5:img==4 && dotBtn==2?boy1:img==4 && dotBtn==3?tree1:tree3
                      } 
                      onClick={()=>{
                        if(dotBtn==1)
                        {
                          document.querySelector('.a-left-sub-a').setAttribute("src",document.querySelector(".hidden1-img").getAttribute("src")); 
                        }
                        else if(dotBtn==2)
                        {
                          document.querySelector('.a-left-sub-b').setAttribute("src",document.querySelector(".hidden1-img").getAttribute("src")); 
                        }
                        else
                        {
                          document.querySelector('.a-left-sub-c').setAttribute("src",document.querySelector(".hidden1-img").getAttribute("src")); 
                        }
                        
                      }}></img>
                      <img className='hidden2-img' src={
                      img==1 && dotBtn==1?car5:img==1 && dotBtn==2?boy1:img==1 && dotBtn==3?tree1:
                      img==2 && dotBtn==1?car1:img==2 && dotBtn==2?boy2:img==2 && dotBtn==3?tree2:
                      img==3 && dotBtn==1?boat2:img==3 && dotBtn==2?boat3:img==3 && dotBtn==3?dolphine2:
                      img==4 && dotBtn==1?car3:img==4 && dotBtn==2?boy1:img==4 && dotBtn==3?tree1:tree3
                      }
                      onClick={()=>{
                        if(dotBtn==1)
                        {
                        document.querySelector('.a-left-sub-a').setAttribute("src",document.querySelector(".hidden2-img").getAttribute("src")); 
                        }
                        else if(dotBtn==2)
                        {
                          document.querySelector('.a-left-sub-b').setAttribute("src",document.querySelector(".hidden2-img").getAttribute("src")); 
                        }
                        else
                        {
                          document.querySelector('.a-left-sub-c').setAttribute("src",document.querySelector(".hidden2-img").getAttribute("src")); 
                        }
                        // document.querySelector('.a-left-sub-b').setAttribute("src",document.querySelector(".hidden2-img").getAttribute("src")); 
                      }}
                      ></img>
                      <img className='hidden3-img' src={
                      img==1 && dotBtn==1?car4:img==1 && dotBtn==2?boy2:img==1 && dotBtn==3?tree2:
                      img==2 && dotBtn==1?car3:img==2 && dotBtn==2?boy1:img==2 && dotBtn==3?tree3:
                      img==3 && dotBtn==1?boat3:img==3 && dotBtn==2?boat3:img==3 && dotBtn==3?dolphine2:
                      img==4 && dotBtn==1?car5:img==4 && dotBtn==2?boy1:img==4 && dotBtn==3?tree1:tree3}
                      onClick={()=>{
                        if(dotBtn==1)
                        {
                        document.querySelector('.a-left-sub-a').setAttribute("src",document.querySelector(".hidden3-img").getAttribute("src")); 
                        }
                        else if(dotBtn==2)
                        {
                          document.querySelector('.a-left-sub-b').setAttribute("src",document.querySelector(".hidden3-img").getAttribute("src")); 
                        }
                        else
                        {
                          document.querySelector('.a-left-sub-c').setAttribute("src",document.querySelector(".hidden3-img").getAttribute("src")); 
                        }

                      }}
                      ></img>
          </div>
          
        </div>
      </div>
      <div className="a-right">
        <div className='a-right-card-container'>
          <div className='a-right-card'>
            <img className='a-right-card-img' src={img==1?x1:img==2?car4:img==3?boat1:img==4?submarine2:car1}></img>
            <p className='a-right-card-text'>{img==1?"4x4 Truck":img==2?"Tesala":img==3?"Luxury Cruise":img==4?"Under Water Submarine":car1}</p>
          </div>
          <div className='a-right-card'>
            <img className='a-right-card-img' src={img==1?boy1:img==2?boy2:img==3?boat2:img==4?dolphine1:boat1}></img>
            <p className='a-right-card-text'>{img==1?"A Boy":img==2?"A Boy":img==3?"Old Boat":img==4?"Dolphine":car1}</p>
          </div>
          <div className='a-right-card'>
            <img className='a-right-card-img' src={img==1?tree1:img==2?tree2:img==3?dolphine2:img==4?fish1:tree1}></img>
            <p className='a-right-card-text'>{img==1?"Tree":img==2?"Tree":img==3?"Dolphine":img==4?"Golden Fish":car1}</p>
          </div>
          
        </div>
      </div>
    </div>       
        </div>
    </div>
  )
}

export default DesignRoom;


// <div className='heading'>
//                     <h3 className='section-heading'>Popular Mobile Offers</h3>
//                     <button
//                         className='sub-btn py-1 px-2 mx-3'
//                         // onClick={goToProductList}
//                     >
//                         View All
//                     </button>
//                 </div>
//                 <div className='tabs'>
//                     <Tabs
//                         defaultActiveKey='10000'
//                         id='justify-tab-example'
//                         className='mb-3'
//                     >
//                         <Tab
//                             eventKey='10000'
//                             title='Under Rs. 10,000'
//                             className='custom-tab'
//                         >
//                             <PopularOffersPhones />
//                         </Tab>
//                         <Tab
//                             eventKey='15000'
//                             title='Rs. 10,000 - Rs. 15,000'
//                             className='custom-tab'
//                         >
//                             <PopularOffersPhones />
//                         </Tab>
                
import React from 'react'
import "../CSS/style.css";
import { hashTagData } from '../Data/hashTag';

function HashTag() {
  return (
    <div className='hashtag-container'>
        <div className="expressStyle-heading hastag-heading">#HayneedleHome</div>
        <div></div>
        <p className='hastag-text'>Share your unique style & get inspired</p>
        <div className='hashtag-bottom'>
            <div className='hashtag-bottom-img'>
               {
                hashTagData.map((data)=>
                <div className='hathtag-card'>
                    <img className='hashtag-card-img' src={data.image}></img>
                    <div className='hashtag-card-text'>{data.rating}</div>
                </div>
                )
               }
              </div>
              <div className='hashtag-bottom-img'>
               {
                hashTagData.map((data)=>
                <div className='hathtag-card'>
                    <img className='hashtag-card-img' src={data.image}></img>
                    <div className='hashtag-card-text'>{data.rating}</div>
                </div>
                )
               }
              </div>
              <div className='hashtag-bottom-img'>
               {
                hashTagData.map((data)=>
                <div className='hathtag-card'>
                    <img className='hashtag-card-img' src={data.image}></img>
                    <div className='hashtag-card-text'>{data.rating}</div>
                </div>
                )
               }
              </div>
            {/* <button type='button' className='hashtag-btn'>VIEW MORE POSTS</button> */}
        </div>
    </div>
  )
}

export default HashTag
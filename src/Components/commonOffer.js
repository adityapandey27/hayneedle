import React from 'react'
import "../CSS/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CommonOffer() {
  return (
    <div className='carousel-shown-option carousel-border'>
    <div className='carousel-shown-option'>
        <div className='carousel-icons'><i className="fa-solid fa-truck-fast"></i></div>
        <div className='carousel-shown-option-text'>
        Free Shipping on EVERYTHING!
        </div>
    </div>
    
    

    <div className='carousel-shown-option'>
        <div className='carousel-icons'><i className="fa-solid fa-people-carry-box"></i></div>
        <div className='carousel-shown-option-text'>
        Quick & Easy Returns
        </div>
    </div>
    

    <div className='carousel-shown-option'>
        <div className='carousel-icons'><i className="fa-solid fa-truck-fast"></i></div>
        <div className='carousel-shown-option-text'>
        Protection Plans Available
        </div>
    </div>

    <div className='carousel-shown-option'>
        <div className='carousel-icons'><i className="fa-solid fa-truck-fast"></i></div>
        <div className='carousel-shown-option-text'>
        As Low as 0% APR* Financing Available
        </div>
    </div>
 </div>
  )
}

export default CommonOffer
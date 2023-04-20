import React from 'react';
import Hayneddle from "../../Images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faFaceBook,faMagnifyingGlass,fashoppingcart} from '@fortawesome/free-solid-svg-icons';

function NavbarShow() {
  return (
    <div className='navbar-shown-contianer'>
        <div className='navbar-shown-top'>
            <img src={Hayneddle} alt="hayneedle logo"></img>
            <div className='navbar-shown-input-container'>
                <div className='navbar-shown-search'><i className="fa-solid fa-magnifying-glass"></i></div>
                <input type="text" className='navbar-shown-input' placeholder='Search (ex: bar stool with arms )'></input>
            </div>
            <div className='navbar-shown-top-right'>
            <div className='navbar-shown-right-element'>Login</div>
            <div className='navbar-shown-right-element'>/</div>
            <div className='navbar-shown-right-element'>Sign UP</div>
            <div className='navbar-shown-right-element'><i className="fa-regular fa-circle-question"></i></div>
            <div className='navbar-shown-right-element'><i className="fa-regular fa-heart"></i></div>
            <div className='navbar-shown-right-element'><i className="fa-solid fa-cart-shopping"></i></div>
            </div>   
        </div>
        <div className='navbar-shown-bottom'>
            <div className='navbar-shown-bottom-element'>FURNITURE</div>
            <div className='navbar-shown-bottom-element'>OUTDOOR</div>
            <div className='navbar-shown-bottom-element'>HOME DECOR</div>
            <div className='navbar-shown-bottom-element'>LIGHTING</div>
            <div className='navbar-shown-bottom-element'>BED & BATH</div>
            <div className='navbar-shown-bottom-element'>HOME STORAGE</div>
            <div className='navbar-shown-bottom-element'>NEW ARRIVALS</div>
            <div className='navbar-shown-bottom-element'>MORE</div>
            <div className='navbar-shown-bottom-element'>SALE</div>
            <div className='navbar-shown-bottom-element'>STYLE & INSPIRATION</div>
        </div>
    </div>
  )
}

export default NavbarShow
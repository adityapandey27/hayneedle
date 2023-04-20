import React from 'react'
import "../CSS/style.css";
import BottomLogo from "../Images/bottomLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Bottom() {
  return (
    <div className='bottom-cotainer'>
        <div className='bottom-main'>
            <div className='bottom-left'>
                <img className='bottom-left-img' src={BottomLogo}></img>
            </div>
            <div className='bottom-right'>
                <ul className='bottom-part1'>
                    <li className='bottom-part-element'>Privay Notice</li>
                    <li className='bottom-part-element'>Term of use</li>
                    <li className='bottom-part-element'>YOur privacy choices</li>
                    <li className='bottom-part-element'>Request personal information</li>
                </ul>
                <ul className='bottom-part1'>
                    <li className='bottom-part-element'>Contact us</li>
                    <li className='bottom-part-element'>Help center</li>
                    <li className='bottom-part-element'>Track Your Order</li>
                    <li className='bottom-part-element'>Start return</li>
                    <li className='bottom-part-element'>Email preference</li>
                    <li className='bottom-part-element'>Gift Certificate</li>
                </ul>
                <ul className='bottom-part1'>
                    
                    <li className='bottom-part-element'>Mon - Fri : 9 am - 6 pm ET</li>
                    <li className='bottom-part-element'>Sat - Sun : Closed</li>
                    <li className='bottom-part-element'>Guest # 3851-09-2467</li>
                </ul>
                
            </div>
          
        </div>
        <div className='bottom-icons'>
                <div className='bottom-icon'><i className="fa-brands fa-instagram"></i></div>
                <div className='bottom-icon'><i className="fa-brands fa-facebook"></i></div>
                <div className='bottom-icon'><i className="fa-brands fa-pinterest"></i></div>
            </div>
        <div className='bottom-empty'>
        
        </div>
        <div className='bottom-copy-right'>
        Copyright 2002 - 2023, Hayneedle Inc., All rights reserved.
        </div>
    </div>
  )
}

export default Bottom
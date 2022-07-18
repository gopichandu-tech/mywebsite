import React from 'react'
import {Link} from "react-router-dom";
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-text'>
            <h3 id='heading'>The only way to do great work is to love what you do</h3>
            <p id='sub-heading'>`~Steve Jobs</p>
    
        </div>
        <div className='footer-input'>
            <input placeholder='Email' type="email" id="email" name="email"/>
            <button>Subscribe</button>
        </div>

        <div className='footer-icons'>
            <Link to='/'><i class="fa-brands fa-facebook"></i></Link>
            <Link to='/'><i class="fa-brands fa-instagram"></i></Link>
            <Link to='/'><i class="fa-solid fa-envelope"></i></Link>
        </div>

        <div className='footer-bottom'>
            <div id='copy-right'>copy-right @ 2022</div>
            <div className='footer-bottom-logo'>
                <div> <i class="fa-brands fa-accusoft" /> </div>
                <div id='text'>M Gopi Chandu</div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
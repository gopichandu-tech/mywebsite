import React, { useState } from 'react'
import "./Navbar.css";
import {Link, useNavigate} from "react-router-dom";
// import { saveAs } from "file-saver";

function Navbar() {
  const [click,setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate();
  // const closeMobileMenu = () => setClick(false);

  // const saveFile = () => {
  //   saveAs(
  //     "/public/Images/Resume.pdf",
  //     "Resume.pdf"
  //   );
  //}
  return (
   <div className='nav-container' >
    <div className='logo'><i class="fa-brands fa-accusoft"></i></div>
    
     
     <div className='left-container' onClick={() =>navigate("/")}>
       
       <div className='heading'>M Gopi Chandu</div>
       <div className='sub-heading'>Front End Developer</div>
     </div>

     <div className='right-container' id={click ? 'hidden' : ''} >

      <Link to='/' className='nav-links' >Home</Link>
      <Link to='/projects' className='nav-links' >Projects</Link>
      <a href='/Resume/Resume.pdf' download className='nav-links' >Resume</a>
      {/* <Link to='/resume'  href='/Resume/Resume.pdf' download target='_blank'  className='nav-links' >Resume</Link> */}

      
        
   
     </div>

     {/* <div className="hamburger"><Link to='/' onClick={handleClick}><i class="fa-solid fa-bars"></i></Link></div> */}
     <div className='hamburger' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

     
   </div>
   
  )
  }

export default Navbar;